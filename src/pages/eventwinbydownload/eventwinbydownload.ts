import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
// import { Http } from '@angular/http';todavia no se usara
import { ListPage } from '../list/list';
import {Http, Headers, RequestOptions}  from "@angular/http";
import { ProfilePage } from '../profile/profile';
import { LoadingController } from 'ionic-angular';
import { FavoritesPage } from '../favorites/favorites';
import { SearchPage } from '../search/search';
import { ReviewdetailsPage } from '../reviewdetails/reviewdetails';
import { Events } from 'ionic-angular';

/**
 * Generated class for the EventwinbydownloadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eventwinbydownload',
  templateUrl: 'eventwinbydownload.html',
})
export class EventwinbydownloadPage {
  @ViewChild("character") character;

  promotions: any;
  pjs: any;
  constructor( public loading: LoadingController, private http: Http,   public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public events: Events) {

  }

  logRatingChange(rating){
    console.log("changed rating: ",rating);
    // do your stuff
}

  

  ionViewDidLoad() {
    let username= localStorage.getItem('username');

    console.log('recibi este usuario',username);

    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({
      headers: headers
    });
    console.log(username); 



      let data = {
        username: username

      };
      let loader = this.loading.create({
      content: 'Cargando datos de usuario...',
      });

this.http.post('http://34.68.79.96/api/tuspj.php',  data, options)
.map(res => res.json())
.subscribe(res => {
  this.pjs = res.server_responsepjs;
  console.log(this.pjs);
  // this.points = res.server_response;
  });
//tempralmente solo me traigo un objeto furuamente una cadena de datos en arreglo

      
    // let items = {
    //   promoimg: this.items.promoimg//optuve el nombre de

    // };



    
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
  console.log("desabilidado")
}






reclamarevento()

{
  console.log(this.character._text)
  let username= localStorage.getItem('username');

     var headers = new Headers();
         headers.append("Accept", 'application/json');
         headers.append('Content-Type', 'application/json' );
         let options = new RequestOptions({ headers: headers });
     
       let data = {
             username: this.character._text,
             event_id: '999999',
             reclamado_unica_vez: '1',

           };
     
     
      let loader = this.loading.create({
         content: 'Processing please wait...',
       });
     
      loader.present().then(() => {
     this.http.post('http://34.68.79.96/api/register.php',data, options)
     .map(res => res.json())
     .subscribe(res => {
     
      loader.dismiss()
     if(res=="Premio Entregado"){

//suponemos que se estara realizando el update 57 O NO  y esperamos respuesta
       let alert = this.alertCtrl.create({
         title:"CONGRATS",
         subTitle:(res),
         buttons: ['OK']
         });
        
         alert.present();


      // this.navCtrl.push(HomePage);
     
     }else
     {
      let alert = this.alertCtrl.create({
      title:"ERROR",
      subTitle:(res),
      buttons: ['OK']
      });
     
      alert.present();
       } 
     });
     });
      }
     
     }

  

