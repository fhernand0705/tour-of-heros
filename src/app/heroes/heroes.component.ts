import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[]; //defining heroes property for template binding

  constructor(private heroService: HeroService) { }

  ngOnInit() { //calls method instead of constructor
    this.getHeroes();
  }

  getHeroes(): void { //method to receive list of heroes when called
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}
