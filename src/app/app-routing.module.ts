import { ExamplesComponent } from './examples/examples.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  {path: 'examples', component: ExamplesComponent},
  {path: 'projects', loadChildren: './projects/projects.module#ProjectsModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}