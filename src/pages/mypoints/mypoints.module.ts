import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MypointsPage } from './mypoints';

@NgModule({
  declarations: [
    MypointsPage,
  ],
  imports: [
    IonicPageModule.forChild(MypointsPage),
  ],
})
export class MypointsPageModule {}
