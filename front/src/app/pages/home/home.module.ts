import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ComponentModule } from 'src/app/components/components.modules';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentModule,
  ],
})
export class HomeModule { }
