import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Push, PushObject, PushOptions } from '@ionic-native/push/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private push : Push,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.inicializaFirebase();
    });
  }


  private inicializaFirebase(){
    const options: PushOptions = {
      android:{
        senderID: 'XXXXXXXXXXX'
      }
    }

    const pushObject: PushObject = this.push.init(options)

    pushObject.on('registration').subscribe(res => console.log(`${res.registrationId}`))
    pushObject.on('notification').subscribe(res => console.log(`já chegou o disco voador: ${res.message}`))
  }

}
