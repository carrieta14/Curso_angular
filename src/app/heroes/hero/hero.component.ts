import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  name: string = 'ironman';
  age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Flash';
  }

  changeAge(): void {
    this.age = 60;
  }

  reset(): void {
    this.name= 'ironman';
    this.age = 45;
  }
}
