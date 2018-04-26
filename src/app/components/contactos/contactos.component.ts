import { Component, OnInit, Optional, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { Contact } from '../../model/contact';
import { HttpUrlsService } from '../../services/http-urls.service';
import { LoggerService } from '../../services/logger.service';
import { AgendaService } from '../../services/agenda.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit, OnDestroy {

  contactForm: FormGroup;
  contact: Contact;
  contacts: Array<Contact>;
  updateSubscription?: Subscription;
  suscriptionContacts?: Subscription;
  //inyectamos en el contructor el httpClient y así Angular se encarga de instanciarlo con todas sus dependencias
  constructor(private httpClient: HttpClient, private httpUrls: HttpUrlsService, private agenda: AgendaService, @Optional() private logger: LoggerService) {
    this.contact = new Contact('', '');
    this.contacts = new Array();
    this.updateSubscription = null;
    this.suscriptionContacts = null;
  }

  ngOnDestroy() {
    // nos desuscribimos al salir del componente
    // de este modo liberamos memoria en el navegador
    if (this.suscriptionContacts && !this.suscriptionContacts.closed) {
      this.suscriptionContacts.unsubscribe();
    }
  }

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required])
    });
    this.contactForm.valueChanges.subscribe(value => {
      if (this.contactForm.valid) {
        this.contact = new Contact(
          this.contactForm.controls['name'].value,
          this.contactForm.controls['phone'].value,
          this.contact.id
        );

        if (this.contact.id) {
          this.editarContacto();
        }
      }
    });
    this.getContactos();
  }

  nuevoContacto() {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers };
    let body = JSON.stringify(this.contact);
    this.httpClient.post(this.httpUrls.get('FIREBASE_CONTACT_API_URL', '', '.json'), body, options).subscribe(
      response => {
        this.logger.log(response);
        console.log(response);
        this.contact = new Contact('', '');
        this.contactForm.reset();
        this.getContactos();
      },
      error => { this.logger.error(error) },
      () => { this.logger.log('Fin') }
    );

  }


  loadContact(contact: Contact) {
    this.contact = contact;
    console.log(this.contact);
    this.contactForm.patchValue(contact);
  }

  editarContacto() {
    // si hay una suscripción activa y no está cerrada, la cancelamos antes de volver a suscribirnos
    if (this.updateSubscription != null && !this.updateSubscription.closed) {
      this.updateSubscription.unsubscribe();
    }
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers };
    let body = JSON.stringify(this.contact);
    this.updateSubscription = this.httpClient.put(this.httpUrls.get('FIREBASE_CONTACT_API_URL', '', '/' + this.contact.id + '.json'), body, options).subscribe(
      response => {
        this.logger.log(response);
        console.log(response);
        this.getContactos();
      },
      error => { this.logger.error('Error al editar: ' + error) },
      () => { this.logger.log('Fin') }
    );

  }

  deleteContact(contact: Contact, button) {
    button.disabled = true;
    this.updateSubscription = this.httpClient.delete(this.httpUrls.get('FIREBASE_CONTACT_API_URL', '', '/' + contact.id + '.json')).subscribe(
      response => {
        this.logger.log(response)
        this.getContactos();
      },
      error => { this.logger.error('Error al borrar: ' + error); button.disabled = false; },
      () => { this.logger.log('Fin') }
    );

  }

  getContactos() {
    let contactsObs = this.agenda.getContacts();
    // if (isObservable(contactsObs)){
    if (contactsObs instanceof Observable) {
      this.suscriptionContacts = contactsObs.subscribe(
        response => {
          this.contacts = response;

          // pruebas the suscripción a un Observable creado con "Subject"
          this.agenda.getContactByName('asdf').subscribe(
            // next
            contacto => {
              if (contacto) {
                console.log(contacto);
              } else {
                console.log("no encontrado");
              }
            },
            // error
            error => {
              console.log(error);
            },
            // complete
            () => {
              console.log('complete');
            }
          );
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this.contacts = contactsObs;
    }
  }

}
