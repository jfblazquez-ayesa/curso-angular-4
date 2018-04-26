import { Injectable, Optional } from '@angular/core';
import { Contact } from '../model/contact';
import { LoggerService } from './logger.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpUrlsService } from './http-urls.service';

import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';

//para indicar a Angular que este servicio tiene otros servicios inyectados en su constructor
@Injectable()

export class AgendaService {
  // Un subject es un objeto que permite manejar manejables. 
  // Convierte cualquier tipo de objeto en observable.
  subject = new Subject<Contact>();

  contacts: Array<Contact> = new Array();
  // Al marcar un servicio inyectado como opcional evitamos que Angular 
  // devuelva error al tratar de usar un servicio que no ha sido declarado 
  // en el módulo. En caso de que no haya sido declarado, la variable que 
  // lo recoge tendrá valor NULL. 

  constructor(private httpClient: HttpClient, private httpUrls: HttpUrlsService, @Optional() private logger: LoggerService) { }

  addContact(contact: Contact) {
    //control para evitar acceso a null
    this.logger ? this.logger.log('Añadir nuevo contacto:' + contact.name) : null;
    this.contacts.push(contact);
  }

  getContactos() {
    return this.contacts;
  }


  getContacts(refresh: boolean = false): Observable<Contact[]> | Array<Contact> {

    if (!refresh && this.contacts.length > 0) {
      return this.contacts;
    }

    // el operador "map" recive un observable y devuelve el observable trasformado
    return this.httpClient.get(this.httpUrls.get('FIREBASE_USERS_API_URL', '', '.json')).map(
      response => {
        this.contacts = [];
        for (let key in response) {
          this.contacts.push(new Contact(
            response[key].name,
            response[key].phone,
            key
          ));
        }
        return this.contacts;
      }
    );
  }

  getContactByName(name: string): Observable<Contact> {
    let index = 0;
    let interval = setInterval(() => {
      let contact: Contact = (this.contacts[index] && this.contacts[index].name == name) ? this.contacts[index] : null;
      index++;
      if(contact){
        this.subject.next(contact);
        this.subject.complete();
        clearInterval(interval);
      }else{
        console.log(`no se encuentra en la posición ${index}`);
      }
      if (index >= this.contacts.length && !this.subject.isStopped){
        // El error lleva un COMPLETE implícito
        this.subject.error('La búsqueda terminó sin resultados');
        // OJO!!!!! si el SUSCRIPTOR no recoge el ERROR, las siguientes 
        // instrucciones no se ejecutarán (como si fuera una excepción sin tratar)
        clearInterval(interval);
      }

    }, 500);
    return this.subject.asObservable();
  }
}
