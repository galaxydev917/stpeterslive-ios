import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { DataService } from '../../services/data.service';
import { InAppBrowser, InAppBrowserOptions  } from '@ionic-native/in-app-browser/ngx';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.page.html',
  styleUrls: ['./weekly.page.scss'],
})
export class WeeklyPage implements OnInit {
  weeklyList: any[] = [];
  isLoading = false;
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
    private location: Location,
    private dataService: DataService,
    public menuCtrl: MenuController,
    private iab: InAppBrowser
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.dataService.getWeeklyInfo().subscribe( resp => {
      for(var i=0; i<resp.length; i++){
        this.weeklyList.push(resp[i]);
      }
      this.isLoading = false;
    });
  }

  back(){
    this.location.back();
  }

  openPDF(item){
    var link_all = item.content.rendered;
    var pdf_link = link_all.split('"')[1];
    let target = "_system";
    this.iab.create(pdf_link,target,this.options);
  }
  
  openMenu() {
    this.menuCtrl.enable(true, 'customMenu');
    this.menuCtrl.open('customMenu');
  }
}
