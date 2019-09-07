import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from "@angular/http";
import { LoadingController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { ProfilePage } from '../profile/profile';
import { SearchPage } from '../search/search';
import { Events } from 'ionic-angular';
import { PromotiondetailsPage } from '../promotiondetails/promotiondetails';

/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  rating: number = 4;
  data: any;
  username: any;
  promotions: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events,
    public alertCtrl: AlertController,
     private http: Http, 
     public loading: LoadingController
    )
    
    
    {
      events.subscribe('star-rating:changed', (starRating) => {
        console.log(starRating);
        this.rating = starRating;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');

    this.username = this.navParams.get('username');

    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({
      headers: headers
    });

    let data = {
      username: this.username//optuve el nombre de

    };
    

    let loader = this.loading.create({
      content: 'Processing please wait...',
    });

    // loader.present().then(() => {
    //   this.http.post('http://cyrustheapp.com/recursos/fetch_data.php', data, options)
    //     .map(res => res.json())
    //     .subscribe(res => {

    //       loader.dismiss()
    //       this.items = res.server_response;

    //       console.log(this.items);
    //     });
    // });

//tablita restaurantes-.-

    loader.present().then(() => {
      
      return     this.http.post('http://34.68.79.96/api/eventos.php', data, options)
        .map(res => res.json())
        .subscribe(res => {


          this.promotions = res.server_response;
          loader.dismiss();  
          console.log(this.promotions);
        });
    });


    //boton
    





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

logRatingChange(rating){
  console.log("changed rating: ",rating);
  // do your stuff
}


//boton clickeable del ngfor en promociones  
itemClicked(event, promotion) {
  this.navCtrl.push (PromotiondetailsPage, {promotion: promotion});
}

}
