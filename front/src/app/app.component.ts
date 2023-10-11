import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  public innerWidth: number;
  public oldInnerWidth: number;

  title = 'CoCriando App';

  ngOnInit(): void {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    if (!this.isMobileDevice() &&
      this.innerWidth != this.oldInnerWidth) {
      this.router.navigate(['notice']);
      this.oldInnerWidth = window.innerWidth;
    }
    else {
      if (this.innerWidth != this.oldInnerWidth) {
        this.oldInnerWidth = window.innerWidth;
        this.router.navigate(['']);
      }
    }
  }

  isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
  }
}
