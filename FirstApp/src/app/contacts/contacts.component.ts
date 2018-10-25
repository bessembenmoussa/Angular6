import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { map } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {ContactsService} from '../service/contacts.service';
import {Router} from '@angular/router';
import {Contact} from '../model/model.contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  pageContacts: any;
  motcle = '';
  currentPage = 0;
  size = 5;
  pages: any;
  constructor(private http: HttpClient, public contactsservice: ContactsService,
              public router: Router) { }

  ngOnInit() {
  }
  doSearch() {
    this.contactsservice.getContacts(this.motcle, this.size, this.currentPage)
      .subscribe(
        (data: any) => {
          this.pageContacts = data;
          this.pages = new Array(data.totalPages);
          console.log(this.pageContacts);
        }, err => {
          console.log(err);
        });
  }

  chercher() {
    this.doSearch();
  }
  goToPage(i: number) {
    this.currentPage = i;
    this.doSearch();
  }

  OnEditContact(id: number) {
    this.router.navigate(['/editContact', id]);
  }
  OnDeleteContact(contact: Contact) {
    const confirme = window.confirm('Est vous sure de le supprimer ?');
    if (confirme === true) {
      this.contactsservice.deleteContact(contact.id)
        .subscribe((data: any) => {
          this.pageContacts.content.splice(
            this.pageContacts.content.indexOf(contact), 1
          );
        }, err => {
          console.log(err);
        });
    }
  }

}
