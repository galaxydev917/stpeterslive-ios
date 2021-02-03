import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { DataService } from '../../services/data.service';
import { VideoListObjectElement } from '../../interfaces/interfaces';
import { Platform, IonSlides } from '@ionic/angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { MenuController } from '@ionic/angular';
import { InAppBrowser, InAppBrowserOptions  } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-live-watch',
  templateUrl: './live-watch.page.html',
  styleUrls: ['./live-watch.page.scss'],
})
export class LiveWatchPage implements OnInit {
  nextPageToken: any;
  videoId: any;
  videos: VideoListObjectElement[] = [];
  firstVideo: VideoListObjectElement;
  isLoading = false;
  isLoadingMore = false;
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
    public menuCtrl: MenuController,
    private dataService: DataService,
    public plt: Platform,
    private iab: InAppBrowser,
    private youtube: YoutubeVideoPlayer
  ) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    this.isLoading = true;
    this.getVideoList();
  }
  getVideoList() {

    this.dataService.getListVideos(this.nextPageToken).subscribe( resp => {
      if(this.nextPageToken == undefined)
        this.firstVideo = resp.items[0];

      this.nextPageToken = resp.nextPageToken;
      for(var i=0; i<resp.items.length; i++){
        this.videos.push(resp.items[i]);
      }
      console.log("videos=======", this.videos);
      this.isLoading = false;
      this.isLoadingMore = false;
    });    
  }  

  playVideo(video) {

    if (this.plt.is('android')) {
      this.youtube.openVideo('67LKVFZTDrc');
    }
    if (this.plt.is('ios')) {
      this.openWithCordovaBrowser('https://www.youtube.com/watch?v=' + video.id.videoId);
    } 
    // else {
    //   window.open('https://www.youtube.com/watch?v=' + video.id.videoId);
    // }
  }
  viewMore(){
    this.isLoadingMore = true;

    this.getVideoList();
  }
  back(){
    this.location.back();
  }
  openMenu() {
    this.menuCtrl.enable(true, 'customMenu');
    this.menuCtrl.open('customMenu');
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
