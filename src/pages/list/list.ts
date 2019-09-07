import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from "@angular/http";
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { MypointsPage } from '../mypoints/mypoints';
import { FavoritesPage } from '../favorites/favorites';
import { ProfilePage } from '../profile/profile';
import { SearchPage } from '../search/search';
import { MorepointsPage } from '../morepoints/morepoints';


@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  //declaro variables para el calculo de la puntuacion actual
  data2: any;
  username2: any;

  //declaro variables para el calculo de la puntuacion actual
  data: any;
  username: any;
  items: any;
  points: any;
  experiences: any;
  @Input('progress') progress;
  public loadProgress : number = 0;
  //public loadProgress : number = 0;
  //@Input('progress') progress;



  constructor(
    public navCtrl: NavController,
     private http: Http, 
     public navParams: NavParams,  
      public loading: LoadingController 
      ) {
  }
 //inician las funciones al cargar la vista
  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');

    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({
      headers: headers
    });

    let username= localStorage.getItem('username');
    console.log(username); 

//mejoro el codigo de abajo para que me diante data se envie un post mediante el termino data
//de esta forma optengo los datos de la tabla users solo de la persona que quiero.

      let data = {
        username: username

      };
      let loader = this.loading.create({
      content: 'Cargando datos de usuario...',
      });

//traemos datos de la experiencia y los almacenamos en un contenedor de variables definido como experiences
this.http.post('http://cyrustheapp.com/recursos/experience.php',  data, options)
.map(res => res.json())
.subscribe(res => {
  this.experiences = res.server_response_xp;
  // this.points = res.server_response;
  });
//tempralmente solo me traigo un objeto furuamente una cadena de datos en arreglo
console.log(this.experiences);
//terminamos la consulta mostrando en la consola cuando se halla recibido el json

      
//traemos datos de la sumatoria de todos los puntos ganados del usuario menos la sumatoria de todos los datos consumidos por el usuario.
this.http.post('http://cyrustheapp.com/recursos/calcule_total_points_sumwin-sunconsumed.php',  data, options)
.map(res => res.json())
.subscribe(res => {
  this.points = res.server_response;
  // this.points = res.server_response;


  console.log(this.points);
});
//terminamos la consulta mostrando en la consola el calculo de ambas sumatorias.


       loader.present().then(() => {
         this.http.post('http://cyrustheapp.com/recursos/fetch_data.php',  data, options)
           .map(res => res.json())
           .subscribe(res => {
             loader.dismiss()
             this.items = res.server_response;

             console.log(this.items);
           });
       });

//termina el onviewload
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

//terminan las funciones al cargar la vista

  ngOnInit() {
    // Test interval to show the progress bar
    setInterval(() => {
      if (this.loadProgress < 100)
        this.loadProgress += 1;
      else
        clearInterval(this.loadProgress);
    }, 50);
  }

  MyPointsButtonToPage() {
    this.navCtrl.push(MypointsPage);
  }

  MorepointsButtonToPage() {
    this.navCtrl.push(MorepointsPage);
  }


}
