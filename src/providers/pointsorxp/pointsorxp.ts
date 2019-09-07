//comentado ya que usare mi otro metodo http por el tipo de cabeceras
//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions}  from "@angular/http";
import { LoadingController } from 'ionic-angular';

//(::puntos::)importo el provedor que contiene la funcion se ganar puntos para poder utilizarla en esta vista, segun A) La funcion, B) restricciones, C) usuario y D) cantidad de puntos.((::puntos::))


/*
  Generated class for the PointsorxpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()



export class PointsorxpProvider {
  gaintoday: any;
  rewardresponselocal: any;
  constructor(
     private http: Http,
      public loading: LoadingController 
    
    ) {


    
//unconsole de bienvenida para decir que se iniciara una funcion global por haber activado la f(y)
//    console.log('Hello i am a fuction global and i going to run because you are logged');

  }

  getpointsorexperience() {
//se especifica que se ha iniciado la funcion especifica dentro de cada funcion.
    console.log('Running Fuction...');
    console.log("you are logged, I going to get you specific amount of points based in CyrusApp");
  
  //leemos el nombre de la funcion con la que vamos a trabajar
  let username= localStorage.getItem('username'); 
  let actionconsult= localStorage.getItem('actionconsult');
  console.log(actionconsult); //mostramos por consola el nombre de la consulta ¡¡¡beta delete!!!
  
  //defino las variables de cabeceras tipo json para que se active el flujo de datos
  var headers = new Headers();
  headers.append("Accept", 'application/json');
  headers.append('Content-Type', 'application/json');
//declaradas...
//utilizo la variable options para transito http con las cabeceras correspondientes.    
  let options = new RequestOptions({
    headers: headers
  });
// //utilizadas...

// //defino o redefino u/o actualizo la informacion de fuctiondata correspondiente a la funcion del click
  
let dataenvio = {
  actionconsult: actionconsult,
  username: username
};
  
//traemos datos de la experiencia y los almacenamos en un contenedor de variables definido como experiences
this.http.post('http://cyrustheapp.com/recursos/action_hive.php',  dataenvio, options)
  .map(res => res.json())
  .subscribe(res => {
    this.rewardresponselocal = res.server_response_hive;
    console.log(this.rewardresponselocal);
  });
//terminamos la consulta mostrando en la consola cuando se halla recibido el json
//y la imprimimos por consola...

//reciclare las variables traidas localmente para condicionarlas en este proovedor
 
//inicio las condiciones de toget:
  




  } 







}
