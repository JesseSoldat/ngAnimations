import { Component, OnInit } from '@angular/core';
import { ProjectService } from './../projects.service';
import { Project } from './../project.model';

import { markedTrigger } from './animations';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [ 
    markedTrigger
  ]
})
export class ProjectsComponent implements OnInit {
  createNew: boolean = false;
  projects: Project[];
  progress: string = 'progressing';
  markedProjectIndex: number = 0; 
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.loadProjects()
      .subscribe(
        (projects: Project[]) => {
          this.progress = 'finished';
          this.projects = projects;  
                 
      });
  }
  onStatusUpdated(newStatus: string, id: number) {
    this.projects[id].status = newStatus;
    
  }
  onProjectDeleted(i) {
    this.projects.splice(i, 1);    
  }

  onProjectCreated(project: Project) {
    this.createNew = false;
    this.projects.unshift(project); 
  }

  

}
