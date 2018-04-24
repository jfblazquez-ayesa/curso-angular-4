import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { Contact } from '../../model/contact';
import { HttpUrlsService } from '../../services/http-urls.service';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {

  contactForm: FormGroup;
  contact: Contact;
  contacts: Array<Contact>;
  updateSubscription?: Subscription
  //inyectamos en el contructor el httpClient y así Angular se encarga de instanciarlo con todas sus dependencias
  constructor(private httpClient: HttpClient, private httpUrls: HttpUrlsService, private logger: LoggerService) {
    this.contact = new Contact('', '');
    this.updateSubscription = null;
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
        this.logger.log(response)
        this.contact = new Contact('', '');
        this.contactForm.reset();
        this.getContactos();
      },
      error => { this.logger.error(error) },
      () => { this.logger.log('Fin') }
    );

  }

  getContactos() {
    this.httpClient.get(this.httpUrls.get('FIREBASE_CONTACT_API_URL', '', '.json')).subscribe(
      response => {
        this.contacts = [];
        for (let key in response) {
          this.contacts.push(new Contact(
            response[key].name,
            response[key].phone,
            key
          ));
        }
      },
      error => { this.logger.error(error) },
      () => { this.logger.log('Fin') }
    );
  }

  loadContact(contact) {
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
        this.logger.log(response)
        this.getContactos();
      },
      error => { this.logger.error(error) },
      () => { this.logger.log('Fin') }
    );

  }

}
