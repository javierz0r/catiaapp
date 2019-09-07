import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
import {Http, Headers, RequestOptions}  from "@angular/http";
import { ListPage } from '../list/list';
import { ProfilePage } from '../profile/profile';
import { FavoritesPage } from '../favorites/favorites';
import { SearchPage } from '../search/search';
import { Events } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
//(::puntos::)importo el provedor que contiene la funcion se ganar puntos para poder utilizarla en esta vista, segun A) La funcion, B) restricciones, C) usuario y D) cantidad de puntos.((::puntos::))
import { PointsorxpProvider } from '../../providers/pointsorxp/pointsorxp';
/**

/**
 * Generated class for the ReviewdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reviewdetails',
  templateUrl: 'reviewdetails.html',
})
export class ReviewdetailsPage {

  logRatingChange(rating){
    console.log("changed rating: ",rating);
    // do your stuff
  }
  
  @ViewChild("promo_or_local") promo_or_local;
  @ViewChild("username") username;
  @ViewChild("total_stars") total_stars;
  @ViewChild("textrevie") textrevie;
  @ViewChild("rating2") rating2;


  rating: any;
  ratingdeatras: any;
  promotions: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events,
    private http: Http, 
    public alertCtrl: AlertController, 
    public loading: LoadingController,
//((::puntos::))publico en el constructor, el proovedor de la funcion ganar puntos para contar con el servicio de este proovedor.(::puntos::))
    private PointsorxpProvider: PointsorxpProvider 
    
    
      ) {




//muestro en consola los varolres traidos
    this.rating = navParams.get('rating');
    this.promotions = navParams.get('promotion');
  
    let rating2 = this.rating;
    // quierosaber que valor ratingdeatas me estoy trajendo de la otra pagina 
    console.log("rating de atras y mejorado alante:",this.rating2);
//visto...

console.log("dato de promotion a realizarle el review:",this.promotions);



  }




  reviewpromo(){
    let usernameprevie= localStorage.getItem('username');

    
    //// verificamos si el ratting es 2 para mostrar alerta y die
    //// verificamos si el rating es igual 1 para mostrar alerta y die
    //// verificamos si es falso lo anterior y procedemos con el summit
    

    if (this.textrevie.value=="")  {
     if(this.rating2.rating=="2"){
   
    let alert = this.alertCtrl.create({
   
    title:"ATTENTION",
    subTitle:"UNDER ONE STARS? comment field is empty",
    buttons: ['OK']
    });
   
    alert.present();
     } 

     else
     if(this.rating2.rating=="1"){
    
     let alert = this.alertCtrl.create({
    
     title:"ATTENTION",
     subTitle:"UNDER TWO STARS? coment field is empty",
     buttons: ['OK']
     });
    
     alert.present();
          
    }

  }    
  else {
   //(::points::)este else indica que la registracion se ha generado exitosamente asi que vamos a ver si podemos darle o no los puntos al usuario y cuantos.(::points::)
   var headers = new Headers();
       headers.append("Accept", 'application/json');
       headers.append('Content-Type', 'application/json' );
       let options = new RequestOptions({ headers: headers });
   
     let data = {
           username: usernameprevie,
           textrevie: this.textrevie.value,
           total_stars: this.rating.rating,
           promo_or_local: "1",  
           enviamepromoidreview: this.promotions.id
         };
   
   
    let loader = this.loading.create({
       content: 'Processing please wait...',
     });
   
    loader.present().then(() => {
   this.http.post('http://cyrustheapp.com/recursos/review_1.php',data, options)
   .map(res => res.json())
   .subscribe(res => {
   
    loader.dismiss()
   if(res=="Review successfull"){
     let alert = this.alertCtrl.create({
       title:"REVIEW SEND",
       subTitle:(res),
       buttons: ['OK']
       });
      
       alert.present();
//((::puntos)) antes de llevar al usuario por medio del pushhomepage de 
//en este caso reviewpromo
localStorage.setItem("actionconsult","reviewpromo");
//almacenada...
//se ejecutara la funcion global
this.PointsorxpProvider.getpointsorexperience();
//ejecutada...

//((::puntos::))puntos o experiencia ejecutada con exito
//si el usuario no se ha repetido (before 12Hours) se le cargara:
//1) puntos acorde de un CRUD
//2) xp Acorde otro Crud
//3) o ninguna de las dos
//por seguridad cyrus se mantendra registro de esta entrega.((::puntos::))
    this.navCtrl.push(ProfilePage);
   
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
 
//si agarro 3 o mas cae en este if    
    if(this.rating2.rating=="3" || this.rating2.rating=="4" || this.rating2.rating=="5" )
    {
   
   //(::points::)este else indica que la registracion se ha generado exitosamente asi que vamos a ver si podemos darle o no los puntos al usuario y cuantos.(::points::)
   var headers = new Headers();
       headers.append("Accept", 'application/json');
       headers.append('Content-Type', 'application/json' );
       let options = new RequestOptions({ headers: headers });
   
     let data = {
           username: usernameprevie,
           textrevie: this.textrevie.value,
           total_stars: this.rating.rating,
           promo_or_local: "1",     
           enviamepromoidreview: this.promotions.id
         };
   
   
    let loader = this.loading.create({
       content: 'Processing please wait...',
     });
   
    loader.present().then(() => {
   this.http.post('http://cyrustheapp.com/recursos/review_1.php',data, options)
   .map(res => res.json())
   .subscribe(res => {
   
    loader.dismiss()
   if(res=="Review successfull"){
     let alert = this.alertCtrl.create({
       title:"REVIEW SEND",
       subTitle:(res),
       buttons: ['OK']
       });
      
       alert.present();
//((::puntos)) antes de llevar al usuario por medio del pushhomepage de 
//en este caso reviewpromo
localStorage.setItem("actionconsult","reviewpromo");
//almacenada...
//se ejecutara la funcion global
this.PointsorxpProvider.getpointsorexperience();
//ejecutada...

//((::puntos::))puntos o experiencia ejecutada con exito
//si el usuario no se ha repetido (before 12Hours) se le cargara:
//1) puntos acorde de un CRUD
//2) xp Acorde otro Crud
//3) o ninguna de las dos
//por seguridad cyrus se mantendra registro de esta entrega.((::puntos::))
    this.navCtrl.push(ProfilePage);
   
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
    
   
   }//cierre de





ionViewDidLoad() {
  console.log('ionViewDidLoad ReviewdetailsPage');
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
