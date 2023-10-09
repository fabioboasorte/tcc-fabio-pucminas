import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectId: Observable<string>;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.projectId = this.route.paramMap.pipe(
      map(params => {
        return String(params.get('id'));
      })
    )
  }
}
