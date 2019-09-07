import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { ListPage } from '../list/list';
import { ProfilePage } from '../profile/profile';
import { FavoritesPage } from '../favorites/favorites';
import { SearchPage } from '../search/search';

/**
 * Generated class for the SupportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-support',
  templateUrl: 'support.html',
})
export class SupportPage {
  section: string = 'two';
  somethings: any = new Array(20);
  pet: string = "category";
  isAndroid: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform) {
  this.isAndroid = platform.is('android');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SupportPage');
  }
//declaro funciones de los botones de abajo
Profile() {
  this.navCtrl.push(ProfilePage);
}


List() {
  this.navCtrl.push(ListPage);
}

Search() {
  this.navCtrl.push(SearchPage);
}

Favorites() {
  this.navCtrl.push(FavoritesPage);
}
//declaradas funciones de los botones de abajo


}
