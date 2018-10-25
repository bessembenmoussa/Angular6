import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  values = '';
  value = '';
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  /* onKey(event: any) { // without type info
    this.values += event.key + ' | ' + event.target.value + ' | ';
  }*/
  /* onKey(event: KeyboardEvent) { // with type info
    this.values += (<HTMLInputElement>event.target).value + ' | ';
  }*/
  onKey(value: string) {
    this.values += value + ' | ';
  }

  onEnter(value: string) { this.value = value; }
  update(value: string) { this.value = value; }


  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }
}
