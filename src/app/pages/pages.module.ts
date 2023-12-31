import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing.module';

//modules
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

//pages
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [
    HomeComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class PagesModule { }
