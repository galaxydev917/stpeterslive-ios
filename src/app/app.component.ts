import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Online Service',
      url: '/live-watch',
      icon: './assets/menu_icon/youtube.svg'
    },
    {
      title: 'Donation',
      url: '/choose-amount',
      icon: './assets/menu_icon/payment.svg'
    },
    {
      title: 'The Weekly',
      url: '/weekly',
      icon: './assets/menu_icon/newspaper.svg'
    },
    {
      title: 'Blog/News',
      url: '/bolg-news',
      icon: './assets/menu_icon/newspaper.svg'
    },   
    {
      title: 'Register',
      url: '/register',
      icon: './assets/menu_icon/clipboard.svg'
    },   
    {
      title: 'Find us',
      url: '/find-us',
      icon: './assets/menu_icon/placeholder.svg'
    },       
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
