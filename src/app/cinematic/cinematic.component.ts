import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-cinematic',
  templateUrl: './cinematic.component.html',
  styleUrls: ['./cinematic.component.css']
})
export class CinematicComponent implements OnInit {
  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Cinematic video');
  }
}
