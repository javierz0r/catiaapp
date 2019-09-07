import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { Platform } from 'ionic-angular'; no usada aun
import { Data } from './search.service';
import { ListPage } from '../list/list';
import { ProfilePage } from '../profile/profile';
import { FavoritesPage } from '../favorites/favorites';
// import {
//   GoogleMaps,
//   GoogleMap,
//   LatLng,
//   GoogleMapsEvent,
// } from '@ionic-native/google-maps'

// declare var google;

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
//cosas del buscador
  searchTerm : any="";
  jsonData : any;
//terminan cosas del buscador
  pet: string = "category";
  isAndroid: boolean = false;
//maps
@ViewChild('map') mapElement: ElementRef;
// private map:GoogleMap;
// private location:LatLng;
 
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    // private googleMaps: GoogleMaps,
    public data: Data
//    private platform: Platform
    ) {
     /*segment of category and pin */
//      this.isAndroid = platform.is('android');
      /*segment of category and pin */
  }

  
//funciones que se cargan al cargar search pagina  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
    this.setFilteredItems();  //esta carga la usa el buscador
   
  }

  
//funciones que se cargan al cargar search pagina 
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
  


  setFilteredItems() {
 
        this.jsonData = this.data.filterItems(this.searchTerm);
 
    }


}
