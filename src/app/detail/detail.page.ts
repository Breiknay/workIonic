import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  urls: any;
  private sub: any;
  constructor(private route: ActivatedRoute) {
    this.sub = this.route.params.subscribe(params => {
      this.urls= params.urls;
      console.log(this.urls);
    });
  }  ngOnInit() {
  }
}
