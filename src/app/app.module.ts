import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Facebook } from '@ionic-native/facebook/ngx';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { ProfilePage } from '../pages/profile/profile';
import { ListPage } from '../pages/list/list';
import { SearchPage } from '../pages/search/search';
import { InboxPage } from '../pages/inbox/inbox';
import { SupportPage } from '../pages/support/support';
import { FavoritesPage } from '../pages/favorites/favorites';
import { MypointsPage } from '../pages/mypoints/mypoints';
import { PromotiondetailsPage } from '../pages/promotiondetails/promotiondetails';
import { ReviewdetailsPage } from '../pages/reviewdetails/reviewdetails';
import {Data} from '../pages/search/search.service';
//este import se cargo automanticamente cuando se ionic g provider winpoints
import { ShrinkingSegmentHeaderComponent } from '../components/shrinking-segment-header/shrinking-segment-header';
import { PointsorxpProvider } from '../providers/pointsorxp/pointsorxp';
//import { StarRatingModule } from 'ionic3-star-rating';
import { SharedModule } from '../app/app.shared.module';
import { MorepointsPage } from '../pages/morepoints/morepoints';
import {EventwinbydownloadPage} from '../pages/eventwinbydownload/eventwinbydownload';


import { GooglePlus } from '@ionic-native/google-plus/ngx';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    ProfilePage,
    ListPage,
    SearchPage,
    InboxPage,
    SupportPage,
    FavoritesPage,
    MypointsPage,
    MorepointsPage,
    PromotiondetailsPage,
    ReviewdetailsPage,
    EventwinbydownloadPage,
    //declarare el segment modulo en points page
    ShrinkingSegmentHeaderComponent
    //declarare el segment modulo en points page
    
    
  ],
  imports: [
    SharedModule,
//    StarRatingModule,
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp, RegisterPage,
    HomePage, ProfilePage,
    ListPage,
    SearchPage,
    InboxPage,
    SupportPage,
    FavoritesPage,
    MorepointsPage,
    PromotiondetailsPage,
    ReviewdetailsPage,
    EventwinbydownloadPage,
    MypointsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook,
    Data,
    //este proovedor de arriba se genera automaticamente cuando se ionic g provider winpoints
    PointsorxpProvider,
    GooglePlus


  ]
})
export class AppModule {}
