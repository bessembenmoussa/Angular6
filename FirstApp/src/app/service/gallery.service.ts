import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GalleryService {
  constructor(private http: HttpClient) {}
  search(motCle: string, size: number, page: number) {
    return this.http.get('https://pixabay.com/api/?key=5832566-81dc7429a63c86e3b707d0429&q=' + motCle + '&per_page=' + size + '&page=' + page )
      .pipe(map((data: any) => data));

  }
}
