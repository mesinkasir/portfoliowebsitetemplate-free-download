import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-digitalart',
  templateUrl: './digitalart.component.html',
  styleUrls: ['./digitalart.component.css']
})
export class DigitalartComponent implements OnInit {
  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Digital ART');
  }
}
