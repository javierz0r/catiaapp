import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
import {Http, Headers, RequestOptions}  from "@angular/http";
import { LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
//(::puntos::)importo el provedor que contiene la funcion se ganar puntos para poder utilizarla en esta vista, segun A) La funcion, B) restricciones, C) usuario y D) cantidad de puntos.((::puntos::))
import { PointsorxpProvider } from '../../providers/pointsorxp/pointsorxp';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild("email") email;
  @ViewChild("username") username;
  @ViewChild("mobile") mobile;
  @ViewChild("password") password;
  fuctionconsult: any;


  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private http: Http, 
    public alertCtrl: AlertController, 
    public loading: LoadingController,
//((::puntos::))publico en el constructor, el proovedor de la funcion ganar puntos para contar con el servicio de este proovedor.(::puntos::))
    private PointsorxpProvider: PointsorxpProvider,
//((::puntos::))publico en el constructor, el proovedor de la funcion ganar puntos para contar con el servicio de este proovedor.(::puntos::))
     
    
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  Register(){

    
    //// check to confirm the username, email, telephone and password fields are filled.
    //// checkeamos si existen campos vacios.
   
     if(this.username.value=="" ){
   
    let alert = this.alertCtrl.create({
   
    title:"ATTENTION",
    subTitle:"Username field is empty",
    buttons: ['OK']
    });
   
    alert.present();
     } else
    if(this.email.value==""){
   
    let alert = this.alertCtrl.create({
   
    title:"ATTENTION",
    subTitle:"Email field is empty",
    buttons: ['OK']
    });
   
    alert.present();
         
   }
    else 
     if(this.mobile.value=="" ){
   
    let alert = this.alertCtrl.create({
   
    title:"ATTENTION",
    subTitle:"Mobile number field is empty",
    buttons: ['OK']
    });
   
    alert.present();
     } else
    if(this.password.value==""){
   
    let alert = this.alertCtrl.create({
   
    title:"ATTENTION",
    subTitle:"Password field is empty",
    buttons: ['OK']
    });
   
    alert.present();
         
   }
    else 
    {
   
   //(::points::)este else indica que la registracion se ha generado exitosamente asi que vamos a ver si podemos darle o no los puntos al usuario y cuantos.(::points::)
   var headers = new Headers();
       headers.append("Accept", 'application/json');
       headers.append('Content-Type', 'application/json' );
       let options = new RequestOptions({ headers: headers });
   
     let data = {
           username: this.username.value,
           password: this.password.value,
           mobile: this.mobile.value,
           email: this.email.value      
         };
   
   
    let loader = this.loading.create({
       content: 'Processing please wait...',
     });
   
    loader.present().then(() => {
   this.http.post('http://cyrustheapp.com/recursos/register.php',data, options)
   .map(res => res.json())
   .subscribe(res => {
   
    loader.dismiss()
   if(res=="Registration successfull"){
     let alert = this.alertCtrl.create({
       title:"CONGRATS",
       subTitle:(res),
       buttons: ['OK']
       });
      
       alert.present();
//((::puntos)) antes de llevar al usuario por medio del pushhomepage de 
//nuevo a la vista de login por haberse registrado. vamos a ejecutar 
//la funcion que dependiendo de  da puntos o experiencia (::puntos::)  
//lo que el programador agregara en el cache sera la accion, a la acción se le pondrá el mismo nombre que la función
//importante: almacenamos el nombre de la funcion usada para usarla en la funcion global:
localStorage.setItem("actionconsult","Register");
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
    this.navCtrl.push(HomePage);
   
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





}
