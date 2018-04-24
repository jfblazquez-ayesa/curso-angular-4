import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../../services/agenda.service';
import { Contact } from '../../model/contact';

@Component({
  selector: 'app-listado-contactos',
  templateUrl: './listado-contactos.component.html',
  styleUrls: ['./listado-contactos.component.css']
})
export class ListadoContactosComponent implements OnInit {

  contacts: Array<Contact>;
  
  constructor(private agendaService: AgendaService) { 
    this.contacts = this.agendaService.getContacts();
  }

  ngOnInit() {
  }

}
