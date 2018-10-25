import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {Contact} from '../model/model.contact';

@Injectable()
export class ContactsService {
  constructor(public http: HttpClient) {
  }
  getContacts(mc: string, size: number, page: number ) {
    return this.http.get<any[]>('http://localhost:8080/chercherContacts?mc=' + mc + '&size=' + size + '&page=' + page)
      .pipe(map(data => data));
  }
  getContact(id: number ) {
    return this.http.get<any[]>('http://localhost:8080/contacts/' + id)
      .pipe(map(data => data));
  }
  saveContact(contact: Contact) {
    return this.http.post('http://localhost:8080/contacts', contact)
      .pipe(map(data => data));
  }
  updateContact(contact: Contact) {
    return this.http.put('http://localhost:8080/contacts/' + contact.id, contact)
      .pipe(map(data => data));
  }
  deleteContact(id: number) {
    return this.http.delete('http://localhost:8080/contacts/' + id)
      .pipe(map(data => data));
  }


}
