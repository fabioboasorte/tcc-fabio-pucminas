import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    protected router: Router
  ) {}

  goToProjects(): void {
    this.router.navigate(['projects']);
    sessionStorage.setItem('__cc_logged', 'true');
  }
}
