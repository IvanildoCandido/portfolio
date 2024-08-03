import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Fullstack Developer',
        p: 'Trybe | Out 2020 - Out 2021',
      },
      text: '<p>Durante meu período na Trybe, atuei como desenvolvedor Fullstack utilizando tecnologias como React e NodeJS.</p>',
    },
  ]);
}
