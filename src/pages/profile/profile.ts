import { AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import 'rxjs/add/operator/map';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from "@angular/http";
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { ListPage } from '../list/list';
import { SearchPage } from '../search/search';
import { FavoritesPage } from '../favorites/favorites';
import { PromotiondetailsPage } from '../promotiondetails/promotiondetails';
import {Location} from '@angular/common';
import {EventwinbydownloadPage} from '../eventwinbydownload/eventwinbydownload';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  data: any;
  username: any;
  promotions: any;






  constructor(public navCtrl: NavController,
    private _location: Location, 
    public alertCtrl: AlertController, 
     public navParams: NavParams,
     private http: Http, 
     public loading: LoadingController
     ) {


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

     signUp() {
      this.navCtrl.push(RegisterPage);
    }

//funciones al cargar la vista de profile page que en realidad es el dashboard

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');

    
  }
//funciones al cargar la vista de profile page que en realidad es el dashboard


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




  ngOnInit() {
 

  }  


//boton clickeable del ngfor en promociones  
  itemClicked(event, promotion) {
    this.navCtrl.push (PromotiondetailsPage, {promotion: promotion});
  }

  backfuctionbynavigation(){


    this._location.back();

}

quierovotar() {
  this.navCtrl.push(EventwinbydownloadPage);
}


}

