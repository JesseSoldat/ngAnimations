import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectRoutingModule } from './projects-routing.module';

import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './project/project.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    ProjectsComponent,    
    ProjectComponent, 
    NewProjectComponent,
    UsersComponent
  ],
  imports: [
    ProjectRoutingModule,
    CommonModule
  ],
  exports: [

  ]
})
export class ProjectsModule {}