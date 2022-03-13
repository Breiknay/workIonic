import {OnInit, ViewChild} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { ApiService } from '../api.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {IonInfiniteScroll, NavController} from '@ionic/angular';
import {DetailPageModule} from './../detail/detail.module';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Items: any;

  constructor(private apiService: ApiService,
              private router: Router,
              public navCtrl: NavController) {

  }

  ngOnInit() {
    this.apiService.getImage().subscribe((resp: any) => {
      this.Items = resp;
      console.log(resp);
    });
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  onItemClicked(urls) {
    this.router.navigate(['/Info',urls.regular]);
  }
}

