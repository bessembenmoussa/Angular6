import { Component, OnInit } from '@angular/core';
import {Contact} from '../model/model.contact';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactsService} from '../service/contacts.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  mode = 1;
  contact: Contact = new Contact();
  idContact: number;
  constructor(public activatedRoute: ActivatedRoute,
              public contactsService: ContactsService,
              public router: Router) {
    this.idContact = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.contactsService.getContact(this.idContact)
      .subscribe((data: any) => {
        this.contact = data;
      }, err => {
        console.log(err);
      });
  }
  updateContact() {
    this.contactsService.updateContact(this.contact)
      .subscribe((data: any) => {
        console.log(data);
        this.contact = data;
        alert( 'Mise a jour effectué.' );
        this.router.navigate(['/contact']);
      }, err => {
        console.log(err);
        alert( 'Probleme' );
      });
  }

}
