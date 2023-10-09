import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './pages/home/home.module';
import { ProjectsModule } from './pages/projects/projects.module';
import { ComponentModule } from './components/components.modules';
import { NoticeModule } from './pages/notice/notice.module';
import { LoginComponent } from './pages/login/login.component';
import { LoginModule } from './pages/login/login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ComponentModule,
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ProjectsModule,
    NoticeModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
