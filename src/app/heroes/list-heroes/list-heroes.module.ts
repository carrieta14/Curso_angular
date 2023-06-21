import { NgModule } from "@angular/core";
import { ListHeroesComponent } from "./list-heroes.component";
import { CommonModule } from "@angular/common";

@NgModule({
  exports: [
    ListHeroesComponent
  ],
  declarations: [ ListHeroesComponent],
  imports: [CommonModule]
})
export class ListHeroesModule {}
