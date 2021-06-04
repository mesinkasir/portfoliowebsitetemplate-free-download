import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-retouch',
  templateUrl: './retouch.component.html',
  styleUrls: ['./retouch.component.css']
})
export class RetouchComponent implements OnInit {
  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Beauty ART retouch photography - page 2');
  }
}
