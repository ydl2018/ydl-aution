import { Component, OnInit } from '@angular/core';
import {Stock} from '../stock-manage/stock-manage.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {
  stock:Stock;

  constructor() { }

  ngOnInit() {
    this.stock =  new Stock(1,"老林",99,4.5,"這是第一只股票",["IT"]);
  }

}
