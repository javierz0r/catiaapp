import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from "@angular/http";
//importando clicks de los botones de abajo
import { ProfilePage } from '../profile/profile';
import { ListPage } from '../list/list';
import { LoadingController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { FavoritesPage } from '../favorites/favorites';
//importados clicks de los botones de abajo
/**
 * Generated class for the MypointsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mypoints',
  templateUrl: 'mypoints.html',
})
export class MypointsPage {
  points: any;
  section: string = 'two';
  somethings: any = new Array(20);
  historiales: any;



  constructor(
    
    public navCtrl: NavController, 
    public navParams: NavParams,
    private http: Http,
    public loading: LoadingController 
    
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MypointsPage');
//tomo datos de puntos de usuario
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
  // let loader = this.loading.create({
  // content: 'Cargando datos de usuario...',
  // });

//traemos datos de la sumatoria de todos los puntos ganados del usuario menos la sumatoria de todos los datos consumidos por el usuario.
this.http.post('http://cyrustheapp.com/recursos/calcule_total_points_sumwin-sunconsumed.php',  data, options)
.map(res => res.json())
.subscribe(res => {
  this.points = res.server_response;
  // this.points = res.server_response;
  console.log(this.points);
});





//traemos datos de la sumatoria de todos los puntos ganados del usuario menos la sumatoria de todos los datos consumidos por el usuario.
  this.http.post('http://cyrustheapp.com/recursos/consumidosyganados.php',  data, options)
    .map(res => res.json())
    .subscribe(res => {
      this.historiales = res.server_response_historiales;
      console.log(this.historiales);

});
//traidos










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
