import { Component, OnInit } from '@angular/core';
import { strings } from '../../config/strings';
import { Platform } from '@ionic/angular';
import { InAppBrowser, InAppBrowserOptions  } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {
  rowHeight : any;
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
  constructor(
    public plt: Platform,
    private iab: InAppBrowser
    ) { }

    // tslint:disable-next-line: variable-name
    private _strings = strings;
    public get strings() {
      return this._strings;
    }

  ionViewWillEnter() {
  }

   ngOnInit() {
    this.rowHeight = (this.plt.height() - 110) / 3 + 'px';
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

//ionic cordova run ios --target="A89C1114-5C2D-40ED-A0A1-7C70CDD399E3" --livereload
