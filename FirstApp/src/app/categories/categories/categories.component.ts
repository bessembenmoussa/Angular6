import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  pageCategories: any;
  pageContacts: any;
  motCle = '';
  size = 5;
  currentPage = 0;
  pages: any;
  mode = 1;
  constructor(private categoryservice: CategoryService) { }

  ngOnInit() {
  }
  OnEditCategory(id) {
  }
  OnDeleteCategory(category) {}
  chercher() {
    this.categoryservice.getCategories(this.motCle, this.size, this.currentPage)
      .subscribe(
        (data: any) => {
          this.pageCategories = data;
          this.pages = new Array(data.totalPages);
          console.log(this.pageCategories);
        }, err => {
          console.log(err);
        });
  }
  OnGetContacts(id) {
    this.categoryservice.getContacts(id)
      .subscribe((data: any) => {
          this.pageContacts = data;
          this.mode = 2;
        console.log(data);
        }, error => {
        console.log(error);
        });
  }

}
