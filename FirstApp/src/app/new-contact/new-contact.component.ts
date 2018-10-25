import { Component, OnInit } from '@angular/core';
import {Contact} from '../model/model.contact';
import {ContactsService} from '../service/contacts.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
  contact: Contact = new Contact();
  mode = 1;
  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
  }
  saveContact() {
    console.log(this.contact);
    this.contactsService.saveContact(this.contact)
      .subscribe((data: any) => {
        this.contact = data;
        this.mode = 2;
      }, err => {
        console.log(err);
      })
  }

}
