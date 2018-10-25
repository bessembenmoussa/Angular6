import { Component, OnInit } from '@angular/core';
import {HeroesClass} from '../heroes-class';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private heroservice: HeroService) { }

  heroes: HeroesClass[] = [];

  ngOnInit() {
    this.getHereos();
  }
getHereos(): void {
    this.heroservice.getHeroes().subscribe(heroes => this.heroes = heroes.slice(1 , 5));
}
}
