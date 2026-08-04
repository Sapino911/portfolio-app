import { Component, input } from '@angular/core';
import { GithubLanguage } from '../../../../core/models/github-language.model';

@Component({
  selector: 'app-github-languages',
  standalone: true,
  imports: [],
  templateUrl: './github-languages.component.html',
  styleUrl: './github-languages.component.scss'
})
export class GithubLanguagesComponent {
  languages = input.required<GithubLanguage[]>(); 
}
