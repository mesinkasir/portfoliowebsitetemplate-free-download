import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-fairy',
  templateUrl: './fairy.component.html',
  styleUrls: ['./fairy.component.css']
})
export class FairyComponent implements OnInit {
  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Conceptual ART Photography gallery - page 3');
  }
}
