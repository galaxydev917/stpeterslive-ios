import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { InAppBrowser, InAppBrowserOptions  } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  options : InAppBrowserOptions = {
    location : 'yes',//Or 'no' 
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls 
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only 
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only 
    toolbar : 'yes', //iOS only 
    enableViewportScale : 'no', //iOS only 
    allowInlineMediaPlayback : 'no',//iOS only 
    presentationstyle : 'pagesheet',//iOS only 
    fullscreen : 'yes',//Windows only    
};
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
    private iab: InAppBrowser,
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
  openWithSystemBrowser(url : string){
    let target = "_system";
    this.iab.create(url,target,this.options);
  }
  openWithInAppBrowser(url : string){
    let target = "_blank";
    this.iab.create(url,target,this.options);
  }
  openWithCordovaBrowser(url : string){
    let target = "_self";
    this.iab.create(url,target,this.options);
  }  
}
