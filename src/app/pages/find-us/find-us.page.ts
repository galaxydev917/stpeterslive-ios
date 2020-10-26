import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Location } from "@angular/common";
import { InAppBrowser, InAppBrowserOptions  } from '@ionic-native/in-app-browser/ngx';
declare var google;
@Component({
  selector: 'app-find-us',
  templateUrl: './find-us.page.html',
  styleUrls: ['./find-us.page.scss'],
})
export class FindUsPage implements OnInit {

  @ViewChild('map', { static: true }) mapElement: ElementRef;
  map: any;

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
    private iab: InAppBrowser) { }

  ngOnInit() {
    let latLng = new google.maps.LatLng(-27.969450, 153.410400);
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.addMarker(this.map); 

  }
  addMarker(map:any){

    let marker = new google.maps.Marker({
      map: map,
      //animation: google.maps.Animation.BOUNCE,
      position: map.getCenter()
    });
    
    let content = "<p style='font-weight: 600; margin-block-start: 0.5em; margin-block-end: 0.5em; color:red'>St Peter's Anglican&nbsp; &nbsp;<br>Church Gold Coast</p>";
    
    this.addInfoWindow(marker, content);
  }
  addInfoWindow(marker, content){
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
    infoWindow.open(this.map, marker);

    // google.maps.event.addListener(marker, 'click', () => {
    //   infoWindow.open(this.map, marker);
    // });
  }
  back(){
    this.location.back();
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
