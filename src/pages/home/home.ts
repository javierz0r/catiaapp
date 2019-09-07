import { Component, ViewChild } from '@angular/core';
import { Headers, Http, RequestOptions } from "@angular/http";
import { Facebook } from '@ionic-native/facebook/ngx';
import { AlertController, LoadingController, NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { ProfilePage } from '../profile/profile';
import { RegisterPage } from '../register/register';
import { GooglePlus } from '@ionic-native/google-plus/ngx';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild("username") username;
  @ViewChild("password") password;
  googlevacia: string;
  data: string;
  items: any;
  username2: any;
  data2: any;

  isLoggedIn: boolean = false
  user: any

  constructor(public navCtrl: NavController,
     public alertCtrl: AlertController, 
     public loading: LoadingController, 
     private http: Http,
     public googlePlus: GooglePlus,
     private fb: Facebook ) {

  }



  signUp() {
    this.navCtrl.push(RegisterPage);
  }

  signIn() {

    //// check to confirm the username and password fields are filled

    if (this.username.value == "") {

      let alert = this.alertCtrl.create({

        title: "ATTENTION",
        subTitle: "Username field is empty",
        buttons: ['OK']
      });

      alert.present();
    } else

    if (this.password.value == "") {

      let alert = this.alertCtrl.create({

        title: "ATTENTION",
        subTitle: "Password field is empty",
        buttons: ['OK']
      });

      alert.present();

    } else {

      var headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json');
      let options = new RequestOptions({
        headers: headers
      });

      let data = {
        username: this.username.value,
        password: this.password.value
      };

      let loader = this.loading.create({
        content: 'Processing please wait...',
      });
      
      loader.present().then(() => {
        
        this.http.post('http://34.68.79.96/api/login.php', data, options)
          .map(res => res.json())
          .subscribe(res => {
            console.log(res)
            loader.dismiss()
            if (res == "Your Login success") {

              let alert = this.alertCtrl.create({
                title: "CONGRATS",
                subTitle: (res),
                buttons: ['OK']
              });

              alert.present();


//le dogo a el front end que encriptadamente mantenga la variable username consultada   ....
localStorage.setItem('username', this.username.value);
//  this.username.value sera el valor que le dare a esta variable username, que vendria siendo el consultado por http arriba
// en este caso el localStorage sera el username consultado.



              this.navCtrl.push(ProfilePage, data);
            } else {
              let alert = this.alertCtrl.create({
                title: "ERROR",
                subTitle: "Your Login Username or Password is invalid",
                buttons: ['OK']
              });

              alert.present();
            }
          });
      } );






    }

  }




//facebook
  
  login() {
    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then(res => {
        console.log(res)
        if(res.status === "connected") {
          this.getUserDetails(res.authResponse.userID)
        } else {
          
        }
      })
      .catch(e => console.log('Error logging into Facebook', e));
  }

  getUserDetails(userid) {
    this.fb.api("/"+userid+"/?fields=id,email,name,picture",["public_profile"])
      .then(res => {
        this.isLoggedIn = true
        this.user = res
        localStorage.setItem('faceresponse', this.user);
        this.navCtrl.push (ProfilePage, this.user);
        console.log(this.user)
      })
      .catch(e => {
        console.log(e);
      });
  }

//facebook

 gotoprofileplis() {
  this.navCtrl.push (ProfilePage, this.user);

 }

 

 loginGoogle1(){

  this.googlePlus.login({})
  .then(res => {
    console.log(res);
    let googlevacia = {
      correodegoogle: res.degoogle,
      imagendegoogle: res.degoogle,
      nombredegoogle: res.degoogle
    };
    this.navCtrl.push(ProfilePage, googlevacia);
  })
  .catch(err => {
    console.error(err);
  });
}

doGoogleLogout(){
  this.googlePlus.logout()
  .then(res =>{
    //user logged out so we will remove him from the NativeStorage
//      this.nativeStorage.remove('google_user');
this.navCtrl.push(HomePage);
  }, err =>{
    console.log(err);
  })
}  



}
