import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [ButtonComponent, HeaderComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [ButtonComponent, HeaderComponent],
})
export class ComponentModule {}
