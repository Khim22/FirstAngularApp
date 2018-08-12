import { Component, OnInit, Input } from '@angular/core';
import { AddressBookInfo } from '../model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }
  
  @Input() cart: AddressBookInfo;
  ngOnInit() {
  }

}
