import {Component, OnInit} from '@angular/core';
import {AboutServices} from '../service/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  info: any;
  comments = [];
  comment = {date: null, message: ''};
  newComment = false;
  constructor(public aboutServices: AboutServices) {
    this.info = this.aboutServices.getInfo();
    this.comments = this.aboutServices.getAllComments();
  }
  /* addComment() {
    if (this.comment.message != '') {
      this.comment.date
        = new
      Date();
      this.comments.push({
          date: this.comment.date,
          message: this.comment.message
        }
      );
      this.comment.message
        = '';
    }
  }*/

  addComment(c) {
    console.log(c);
      this.aboutServices.addComment(c);
      this.comments = this.aboutServices.getAllComments();
      this.comment.message = '';
    }

  ngOnInit() {

  }


}
