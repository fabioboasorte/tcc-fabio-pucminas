import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { ProjectsService } from '../projects.service';
import { Projects } from 'src/app/interfaces/projects.int';
import { showMessage } from 'src/app/utils';

type Tstep = 1 | 2 | 3;

@Component({
  selector: 'app-project-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  @Input() id: string;
  @ViewChild('support', { read: TemplateRef }) _template: TemplateRef<any>;

  projectData: Projects;
  isDescOpen: boolean = false;
  step: Tstep = 1;
  userCPF: string = '123.456.789-09';
  donationValue: string = '';

  constructor(protected service: ProjectsService) {}

  openDescription() {
    this.isDescOpen = !this.isDescOpen;
  }

  changeView(step: Tstep) {
    this.step = step;
  }

  vote(type: 'plus' | 'minus') {
    const projectsVoted = JSON.parse(sessionStorage.getItem('voted') as string);

    if (projectsVoted && projectsVoted.includes(this.id)) {
      showMessage('Você já votou nesse projeto', 2000);
      return;
    }

    if (type === 'plus') this.projectData.votes += 1;
    else if (type === 'minus') this.projectData.votes -= 1;

    if (projectsVoted) {
      projectsVoted.push(this.id);
      sessionStorage.setItem('voted', JSON.stringify(projectsVoted));
    } else {
      sessionStorage.setItem('voted', JSON.stringify([this.id]));
    }
  }

  formatCPF() {
    let cpfFormated = this.userCPF.replace(/\D/g, '');

    this.userCPF = cpfFormated.replace(
      /(\d{3})(\d{3})(\d{3})(\d{2})/,
      '$1.$2.$3-$4'
    );
    return;
  }

  formatCurrency(value?: any) {

    if (value) {
      const convertedValue = value.toString();

      let formattedValue: any =
        parseFloat(convertedValue.replaceAll('.', '').replace(/[^\d.-]/g, ''));

      formattedValue =
        new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(isNaN(formattedValue) ? 0 : formattedValue);

      return formattedValue;
    }

    const numericValue = parseFloat(this.donationValue.replaceAll('.', '').replace(/[^\d.-]/g, '')) / 100;
    this.donationValue = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(isNaN(numericValue) ? 0 : numericValue);
  }

  async ngOnInit() {
    this.service.getProjectById(this.id).subscribe((data: Projects) => {
      this.projectData = data;
    });
  }
}
