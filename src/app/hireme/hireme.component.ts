import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-hireme',
  templateUrl: './hireme.component.html',
  styleUrls: ['./hireme.component.css']
})
export class HiremeComponent implements OnInit {
  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Hire me job as freelancer');
  }
}
