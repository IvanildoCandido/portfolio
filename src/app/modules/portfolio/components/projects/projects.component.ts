import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Ícone do Projeto PayStream',
      title: 'Projeto PayStream',
      width: '100px',
      height: '51px',
      description:
        'Projeto de controle de mensalidade de serviços de clientes ',
      links: [
        {
          nane: 'Conheça o Projeto PayStram',
          href: 'http://systechsolucoes.com.br/paystream',
        },
      ],
    },
  ]);
}
