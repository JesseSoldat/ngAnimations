import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { ProjectsComponent } from './projects/projects.component';

const projectRoutes: Routes = [
  {path: '', component: ProjectsComponent},
  {path: 'users', component: UsersComponent}
]
@NgModule({
  imports: [
    RouterModule.forChild(projectRoutes)
  ],
  exports: [RouterModule]
})
export class ProjectRoutingModule {}