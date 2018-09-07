import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

  public stocks: Array<Stock>;
  constructor(public router:Router) { }

  ngOnInit() {
    this.stocks = [
      new Stock(1,"老林",99,4.5,"這是第一只股票",["IT"]),
      new Stock(2,"老林",99,3.5,"這是第一只股票",["IT"]),
      new Stock(3,"老林",99,2.5,"這是第一只股票",["IT"]),
      new Stock(4,"老林",99,3.5,"這是第一只股票",["IT"]),
      new Stock(5,"老林",99,1.5,"這是第一只股票",["IT"]),
    ]
  }
  update(stock:Stock) {
    this.router.navigateByUrl("/stock/"+stock.id);
  }
  create(){
    this.router.navigateByUrl('/stock/0')
  }
}
export class Stock {
  constructor (
    public id: number,
    public name: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {

  }
}
