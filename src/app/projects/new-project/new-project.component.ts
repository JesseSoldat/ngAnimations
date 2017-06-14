import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  availableStatus = ['active','inactive','critical'];
  constructor() { }

  ngOnInit() {
  }

  onCreateProject() {

  }

  onCancel() {
    this.form.reset();

  }

}
