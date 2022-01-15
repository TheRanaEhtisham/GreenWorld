import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProjectComponent } from './project/project.component';
import { ResidenciaComponent } from './residencia/residencia.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: 'residence',
    component: ResidenciaComponent,
  },
  {
    path: 'lifestyle-amenities',
    component: LifestyleComponent,
  },
  {
    path: 'project',
    component: ProjectComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
