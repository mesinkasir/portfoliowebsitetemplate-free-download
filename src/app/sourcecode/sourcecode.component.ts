import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-sourcecode',
  templateUrl: './sourcecode.component.html',
  styleUrls: ['./sourcecode.component.css']
})
export class SourcecodeComponent implements OnInit {
  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Free download source code gratis');
  }
}
