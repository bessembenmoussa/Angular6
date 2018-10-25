import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {GalleryService} from '../service/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  pagePhotos: any;
  currentPage = 1;
  size = 10;
  totalPage = 0;
  pages = [];
  motCle = '';
  constructor(private http: HttpClient, private galleryServices: GalleryService) { }

  ngOnInit() {
  }
  onSearch(dataForm) {
    this.galleryServices.search(this.motCle, this.size, this.currentPage)
      .subscribe((data: any) => {console.log(data);
        this.pagePhotos = data;
        this.totalPage = this.pagePhotos.totalHits / this.size;
        if ((this.pagePhotos.totalHits % this.size) != 0) {++this.totalPage; }
        this.pages = new Array(this.totalPage);
      }, err => {

      });
  }
  goToPage(index) {
    this.currentPage = index + 1;
    this.onSearch({motCle : this.motCle});
  }

}
