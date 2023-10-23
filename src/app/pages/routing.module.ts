import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
    },
    {
        path: 'details/:id',
        component: DetailsComponent
    },
    {
      path: 'create/:id',
      component: CreateComponent
    },
    {
      path: 'create',
      component: CreateComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
