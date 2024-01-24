import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/container/home.component';
import { AboutComponent } from './pages/about/container/about.component';
import { ContactComponent } from './pages/contact/container/contact.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectOneComponent } from './projects/project-one/container/project-one.component';
import { ProjectTwoComponent } from './projects/project-two/container/project-two.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    children: [
      { path: 'project-one', component: ProjectOneComponent },
      { path: 'project-two', component: ProjectTwoComponent },
    ],
  },

  //This is the component/module that will be loaded if no other route is matched
  { path: '**', component: HomeComponent },
];
