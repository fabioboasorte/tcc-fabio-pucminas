import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { Observable, tap } from 'rxjs';
import { Projects } from 'src/app/interfaces/projects.int';

@Component({
  selector: 'app-projects-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  project$: Observable<Projects[]>;

  constructor(
    protected service: ProjectsService
  ) {}

  ngOnInit(): void {
    this.project$ =
      this.service.getProjects().pipe(
        tap((items) => {
          const sortByVotes =
            items.sort(({votes:a}, {votes:b}) => b-a);

          return sortByVotes;
        })
      );
  }
}
