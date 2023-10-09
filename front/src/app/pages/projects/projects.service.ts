import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projects } from 'src/app/interfaces/projects.int';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projectsUrl = 'http://18.223.33.170:3000/projects';

  constructor(
    private http: HttpClient
  ) { }

  getProjects(): Observable<Projects[]> {
    return this.http.get<Projects[]>(this.projectsUrl)
  }

  getProjectById(id: string): Observable<Projects> {
    return this.http.get<Projects>(`${this.projectsUrl}/findById/${id}`)
  }
}
