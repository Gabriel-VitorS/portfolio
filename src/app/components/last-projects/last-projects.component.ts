import { Component, input, OnInit } from '@angular/core';
import { required } from '@angular/forms/signals';

@Component({
  selector: 'app-last-projects',
  templateUrl: './last-projects.component.html',
  styleUrls: ['./last-projects.component.css']
})
export class LastProjectsComponent implements OnInit {

  inputProjectTitle = input()
  inputProjectUrl = input()
  inputProjectCategory = input()

  constructor() { }

  ngOnInit() {
  }

}
