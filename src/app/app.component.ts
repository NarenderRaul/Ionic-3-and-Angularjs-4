import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//import { LoginPage } from '../pages/login/login';
import { ScanPage } from '../pages/scan/scan';
import { Api } from '../providers/api';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage = ScanPage;

  constructor(platform: Platform, splashScreen: SplashScreen, statusBar: StatusBar, api: Api) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      platform.registerBackButtonAction(() => {
        let curPage = this.nav.getActive().name;
        if(curPage==='ScanPage') {
          platform.exitApp();
        }
      });
    });
  }
}
