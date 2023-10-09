import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: 'button.component.html',
  styleUrls: ['button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() route: string;
  @Input() type: 'primary' | 'secondary' | 'arrow';
  @Input() border: boolean;
  @Input() arrow: boolean;

  ngOnInit() {}
}
