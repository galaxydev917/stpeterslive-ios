import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../config/config';
import 'rxjs/add/operator/map';

import { PlayListObject, VideoListObject} from '../interfaces/interfaces';

const Url = config.Url;
const YoutubeDataUrl = config.YoutubeData;
const YoutubeApikey = config.YoutubeApiKey;
const YoutubeChannelId = config.YoutubeChannelId;
@Injectable({
  providedIn: 'root'
})
export class DataService {

  page = 0;
  constructor( private http: HttpClient ) { }
  private ejectQuery<T>( query: string ) {
    return this.http.get<T>( query );
  }
  getPlaylistsForChannel() {
    return this.ejectQuery<PlayListObject>(`${YoutubeDataUrl}/playlists?key=${YoutubeApikey}&channelId=${YoutubeChannelId}&part=snippet,id&maxResults=1`);
  }

  getListVideos(nextPageToken) {
    if(nextPageToken)
      return this.ejectQuery<VideoListObject>(`${YoutubeDataUrl}/search?key=${YoutubeApikey}&pageToken=${nextPageToken}&channelId=${YoutubeChannelId}&order=date&part=snippet,id&maxResults=5`);
    else  
      return this.ejectQuery<VideoListObject>(`${YoutubeDataUrl}/search?key=${YoutubeApikey}&channelId=${YoutubeChannelId}&order=date&part=snippet,id&maxResults=5`);
  }

  getWeeklyInfo() {
    return this.ejectQuery<any>(`${Url}/wp-json/wp/v2/posts?categories=483`);
    //return this.ejectQuery<any>('https://reqres.in/api/products/3');
    
  }
  getBlogAndNewsInfo(page) {
    return this.ejectQuery<any>(`${Url}/wp-json/wp/v2/posts?categories=44&per_page=5&page=${page}`);
  }  
}
