import { Project } from './../project.model';
import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  @Output() creationCanceled = new EventEmitter<void>();
  @Output() projectCreated = new EventEmitter<Project>();
  availableStatus = ['active','inactive','critical'];
  constructor() { }

  ngOnInit() {
  }

  onCreateProject() {
    this.projectCreated.emit({
      name: this.form.value.name,
      description: this.form.value.description,
      status: this.form.value.status
    });
    this.form.reset();
  }

  onCancel() {
    this.form.reset();
    this.creationCanceled.emit();
  }

}
