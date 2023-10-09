import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ComponentModule } from 'src/app/components/components.modules';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ComponentModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
