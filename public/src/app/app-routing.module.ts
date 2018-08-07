import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkComponent } from'./work/work.component';
import { HomeComponent } from'./home/home.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: "home",component: HomeComponent },
  { path: "work",component: WorkComponent },
  { path: "projects",component: ProjectsComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', pathMatch: 'full', redirectTo: '/home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
