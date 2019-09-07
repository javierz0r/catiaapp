import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavoritesPage } from './favorites';
import { StarRatingModule } from 'ionic3-star-rating';

@NgModule({
  declarations: [
    FavoritesPage,
  ],
  imports: [
    StarRatingModule,
    IonicPageModule.forChild(FavoritesPage),
  ],
})
export class FavoritesPageModule {}
