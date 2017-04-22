import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { ScanPage } from '../pages/scan/scan';
import { ScanResultPage } from '../pages/scan-result/scan-result';
import { Api } from '../providers/api';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ScanPage,
    ScanResultPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ScanPage,
    ScanResultPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Api,
    SplashScreen,
    StatusBar,
    BarcodeScanner
  ]
})
export class AppModule { }
