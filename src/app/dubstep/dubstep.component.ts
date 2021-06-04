import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dubstep',
  templateUrl: './dubstep.component.html',
  styleUrls: ['./dubstep.component.css']
})
export class DubstepComponent implements OnInit {
  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Dubstep Song Music');
  }
}
