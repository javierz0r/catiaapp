import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { Http } from '@angular/http';todavia no se usara
import { ListPage } from '../list/list';
import { ProfilePage } from '../profile/profile';
import { FavoritesPage } from '../favorites/favorites';
import { SearchPage } from '../search/search';
import { ReviewdetailsPage } from '../reviewdetails/reviewdetails';
import { Events } from 'ionic-angular';

/**
 * Generated class for the PromotiondetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-promotiondetails',
  templateUrl: 'promotiondetails.html',
})
export class PromotiondetailsPage {
  
  @ViewChild('rating') rating : any;
//  rating: any;
 //caiman ratingdeatras: any;
  promotions: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {

    this.promotions = navParams.get('promotion');







  }

  logRatingChange(rating){
    console.log("changed rating: ",rating);
    // do your stuff
}

  

  ionViewDidLoad() {
    console.log('estoy recibiendo datos de tu click');
    console.log(this.promotions);
      
    // let items = {
    //   promoimg: this.items.promoimg//optuve el nombre de

    // };
    console.log(this.promotions);


    
  }

//declaro la funcion push que lleva a la pagina de preview details

//detclarada  


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

  
  



gotoreviewpage() {
  this.navCtrl.push (ReviewdetailsPage, {rating: this.rating, promotion: this.promotions});
}

// gotoreviewpage() {
//   this.navCtrl.push(ReviewdetailsPage, {
//    ratingdeatras: this.rating
//   } );
// }


}



