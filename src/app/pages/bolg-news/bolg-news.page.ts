import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bolg-news',
  templateUrl: './bolg-news.page.html',
  styleUrls: ['./bolg-news.page.scss'],
})
export class BolgNewsPage implements OnInit {
  isLoading = false;
  blogList: any[] = [];
  isLoadingMore = false;
  page = 1;
  constructor(
    private location: Location,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getBlogList();
  }
  getBlogList(){
    this.isLoading = true;
    this.dataService.getBlogAndNewsInfo(this.page).subscribe( resp => {
      for(var i=0; i<resp.length; i++){
        this.blogList.push(resp[i]);
      }
      console.log(this.blogList);
      this.isLoading = false;
      this.isLoadingMore = false;
    });
  }

  viewBlog(item){
    let navigationExtras = {
      queryParams: {
        blog: JSON.stringify(item)
      }
    };
    this.router.navigate(['view-blog'], navigationExtras);
  }
  back(){
    this.location.back();
  }
  viewMore(){
    this.isLoadingMore = true;
    this.page = this.page + 1;
    this.getBlogList();
  }
}
