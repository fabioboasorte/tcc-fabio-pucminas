import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { ComponentModule } from 'src/app/components/components.modules';

import { ProjectsComponent } from './projects.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    ListComponent,
    ProjectsComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ComponentModule
  ],
  exports: [
    ListComponent,
    DetailsComponent
  ]
})
export class ProjectsModule { }
