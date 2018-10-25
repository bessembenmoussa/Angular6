import { Component, OnInit } from '@angular/core';
import {HeroesClass} from '../heroes-class';
// import {HEROES} from '../mock-heroes';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService) { }

  // selectedHero: HeroesClass;
  // heroes = HEROES;
  heroes: HeroesClass[];
  // onSelect(hero: HeroesClass): void {
  //   this.selectedHero = hero;
  // }
  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
  add(name: string): void {
    name = name.trim();
if (!name) { return; }
this.heroService.addHero({name} as HeroesClass)
  .subscribe(hero => { this.heroes.push(hero); });
  }

  delete(hero: HeroesClass): void {
    this.heroes = this.heroes.filter( h => h !== hero);
    this.heroService.deleteHero(hero)
      .subscribe();
  }
  ngOnInit() {
    this.getHeroes();
  }

}
