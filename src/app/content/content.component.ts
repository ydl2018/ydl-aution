///<reference path="../../../node_modules/rxjs/internal/operators/filter.d.ts"/>
import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  pageTitle: '';
  pageDesc: '';

  constructor(public router: Router) {
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    this.router.events.pipe(
      filter((event: Event) => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      if (event.url === '/dashboard') {
        // @ts-ignore
        this.pageTitle = '这里是首页';
        this.pageDesc = '';
      } else if (event.url.startsWith('/stock')) {
        this.pageTitle = '股票信息管理';
        this.pageDesc = '进行股票信息基本增删改查';
      }
    });
  }

  ngOnInit() {

  }
}
