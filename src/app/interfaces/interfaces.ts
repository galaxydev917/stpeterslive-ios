
export interface PlayListObject {
  items: Array<PlayListObjectElement>;
}
export interface PlayListObjectElement {
  id: string;
  etag: string;
  kind: string;
}


export interface VideoListObject {
  nextPageToken: string
  items: Array<VideoListObjectElement>;
}
export interface VideoListObjectElement {
  id: string;
  etag: string;
  kind: string;
  snippet: {
    title: string;
    publishedAt: any;
    thumbnails: {
      default: {
        url: string;
      }         
    };
    resourceId : {
      kind: string;
      videoId: string;
    }
  }
}



