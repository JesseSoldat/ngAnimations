import { Component, OnInit, Input } from '@angular/core';
import { Project } from './../project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() project: Project;
  constructor() { }

  ngOnInit() {}

  getProjectStatusClass() {
    return {
      'label-success': this.project.status === 'active',
      'label-default': this.project.status === 'inactive',
      'label-danger': this.project.status === 'critical'
    };
  }
       
  

} 
