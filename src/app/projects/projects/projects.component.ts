import { Component, OnInit } from '@angular/core';
import { ProjectService } from './../projects.service';
import { Project } from './../project.model';
import { AnimationEvent } from '@angular/animations';
import { markedTrigger, itemStateTrigger } from './animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [ 
    markedTrigger,
    itemStateTrigger
  ]
})
export class ProjectsComponent implements OnInit {
  createNew: boolean = false;
  displayedProjects: Project[] = [];
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
          if(this.projects.length >=1 ) {
            this.displayedProjects.push(this.projects[0])
          }                 
      });
  }
  onItemAnimated(animationEvent: AnimationEvent, projectId: number) {
    if(animationEvent.fromState != 'void') {
      return;
    }
    if(this.projects.length > projectId + 1) {
      this.displayedProjects.push(this.projects[projectId +1 ]);
    } else {
      this.projects = this.displayedProjects;
    }
    
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
