import { Component, OnInit } from '@angular/core';
import {ContactsService} from '../service/contacts.service';

@Component({
  selector: 'app-nouveau-contact',
  templateUrl: './nouveau-contact.component.html',
  styleUrls: ['./nouveau-contact.component.css']
})
export class NouveauContactComponent implements OnInit {

  constructor(public contactsService: ContactsService) { }

  ngOnInit() {
  }
  OnSaveContact(dataForm) {
    this.contactsService.saveContact(dataForm)
      .subscribe((data: any) => {
        console.log(data);
      }, err => {
        console.log(JSON.parse(err.body).message); // pour afficher le message de l exeption
      });
  }

}
