import {Injectable} from '@angular/core';

@Injectable()
export class AboutServices {
  info = {nom: 'Bessem', email: 'bessem.bnmoussa@gmail.com', telephone: 52198080};
  comments = [];

  addComment(c) {
    c.date = new Date();
    this.comments.push(c);
  }
  getAllComments() {
    return this.comments;
  }
  getInfo() {
    return this.info;
  }
}
