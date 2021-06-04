import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dua',
  templateUrl: './dua.component.html',
  styleUrls: ['./dua.component.css']
})
export class DuaComponent implements OnInit {
  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Street human interest photography - page 2');
  }
}
