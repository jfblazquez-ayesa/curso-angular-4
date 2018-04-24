import { Injectable, Optional } from '@angular/core';
import { Contact } from '../model/contact';
import { LoggerService } from './logger.service';

//para indicar a Angular que este servicio tiene otros servicios inyectados en su constructor
@Injectable()

export class AgendaService {

  contacts: Array<Contact> = new Array();
  // Al marcar un servicio inyectado como opcional evitamos que Angular 
  // devuelva error al tratar de usar un servicio que no ha sido declarado 
  // en el módulo. En caso de que no haya sido declarado, la variable que 
  // lo recoge tendrá valor NULL. 

  constructor(@Optional() private logger: LoggerService) { }

  addContact(contact: Contact) {
    //control para evitar acceso a null
    this.logger ? this.logger.log('Añadir nuevo contacto:' + contact.name) : null;
    this.contacts.push(contact);
  }

  getContacts() {
    return this.contacts;
  }

}
