import { Component, OnInit } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  name = 'main item';
  description = 'some description';
  price = 1000;
  isAvailable = true;
  category = Category.Category1;
  reletedItems = ['item1', 'item2', 'item3'];
  availibleColors = ['green', 'yellow', 'black'];

  constructor() {}

  ngOnInit(): void {}
}
