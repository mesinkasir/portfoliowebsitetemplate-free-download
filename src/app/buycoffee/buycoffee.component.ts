import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-buycoffee',
  templateUrl: './buycoffee.component.html',
  styleUrls: ['./buycoffee.component.css']
})
export class BuycoffeeComponent implements OnInit {
  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Buy me a coffee - donation');
  }
}
