import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
    apiKey: "AIzaSyAKco-OfSDVo4ScvPKWWKqhuAtYL__PiSU",
    authDomain: "my-booklist-c6f9c.firebaseapp.com",
    databaseURL: "https://my-booklist-c6f9c.firebaseio.com",
    storageBucket: "my-booklist-c6f9c.appspot.com",
    messagingSenderId: "400479026400"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
