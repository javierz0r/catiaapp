import { Component, ViewChild, NgZone  } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SearchPage } from '../pages/search/search';
import { InboxPage } from '../pages/inbox/inbox';
import { FavoritesPage } from '../pages/favorites/favorites';
import { MypointsPage } from '../pages/mypoints/mypoints';
import { SupportPage } from '../pages/support/support';
import { GooglePlus } from '@ionic-native/google-plus/ngx';





@Component({
  templateUrl: 'app.html'
})


export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // luisjordan.net - Declaramos una nueva variable para controlar el texto mostrado
  text: string = '';
//EN ESTE APARTADO SE DEFINE CON QUE VISTA SE INICIA LA APP, IDEAL PARA CONSTRUIR LAS OTRAS VISTAS QUE NO SEAN HOME SIN LOGEAR
  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(

    public platform: Platform,
     public statusBar: StatusBar,
     public googlePlus: GooglePlus,
      public splashScreen: SplashScreen,
      public zone: NgZone
      ) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

//INICIAN LAS COSAS DEL SHOW-HIDE SIDE
    
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [

      { title: 'Profile', component: ListPage },
      { title: 'Search', component: SearchPage },
      { title: 'Inbox', component: InboxPage },
      { title: 'Support', component: SupportPage },
      { title: 'EventosActivos', component: FavoritesPage },
      { title: 'My Special Points', component: MypointsPage },
      { title: 'Back', component: ProfilePage }, 
      { title: 'Exit', component: HomePage }
      
    ];

  }

  logRatingChange(rating){
    console.log("changed rating: ",rating);
    // do your stuff
}

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  rightMenuClick(text) {
    this.text = text;
  }



  
}