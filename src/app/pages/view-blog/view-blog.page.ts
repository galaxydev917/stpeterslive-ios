import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.page.html',
  styleUrls: ['./view-blog.page.scss'],
})
export class ViewBlogPage implements OnInit {
  blog_data: any;
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private location: Location) {
    this.route.queryParams.subscribe(params => {

      if (params && params.blog) {
        this.blog_data = JSON.parse(params.blog);
      }
    });
  }

  ngOnInit() {
  }
  back(){
    this.location.back();
  }
}
