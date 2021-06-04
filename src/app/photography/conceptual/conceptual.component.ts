import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-conceptual',
  templateUrl: './conceptual.component.html',
  styleUrls: ['./conceptual.component.css']
})
export class ConceptualComponent implements OnInit {
  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Conceptual ART Photography gallery');
  }
}
