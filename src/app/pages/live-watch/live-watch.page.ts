import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { DataService } from '../../services/data.service';
import { VideoListObjectElement } from '../../interfaces/interfaces';
import { Platform, IonSlides } from '@ionic/angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { MenuController } from '@ionic/angular';

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

  constructor(
    private location: Location,
    public menuCtrl: MenuController,
    private dataService: DataService,
    public plt: Platform,
    private youtube: YoutubeVideoPlayer
  ) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    this.isLoading = true;
    this.getVideoList();
  }

  getVideoList() {
    this.dataService.getPlaylistsForChannel().subscribe( resp => {
      this.dataService.getListVideos(resp.items[0].id, this.nextPageToken).subscribe( resp => {
        if(this.nextPageToken == undefined)
          this.firstVideo = resp.items[0];

        this.nextPageToken = resp.nextPageToken;
        for(var i=0; i<resp.items.length; i++){
          this.videos.push(resp.items[i]);
        }
        this.isLoading = false;
        this.isLoadingMore = false;
      });    
    });
  }  

  playVideo(video) {
    if (this.plt.is('cordova')) {
      this.youtube.openVideo(video.snippet.resourceId.videoId);
    } else {
      window.open('https://www.youtube.com/watch?v=' + video.snippet.resourceId.videoId);
    }
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
}
