import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  getCategories(mc: string, size: number, page: number) {
    return this.http.get<any[]>('http://localhost:8080/chercherCategories?mc=' + mc + '&size=' + size + '&page=' + page);
  }

  getContacts(id) {
    return this.http.get<any>('http://localhost:8080/getContactsOfCategory?id=' + id);
  }
}
