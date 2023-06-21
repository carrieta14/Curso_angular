import { Component } from '@angular/core';

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.component.html',
  styleUrls: ['./list-heroes.component.scss']
})
export class ListHeroesComponent {

  heroes: string[]=[
    "Batman","Ironman","Flash", "Spiderman"
  ]

  delete_hero: string|undefined;

  delete():void{
    this.delete_hero = this.heroes.pop();
  }
}
