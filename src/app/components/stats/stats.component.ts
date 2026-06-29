import { Component, inject } from '@angular/core';
import { GithubService } from '../../core/services/github.service';
import { CounterComponent } from "../../shared/counter/counter.component";
import { toSignal } from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CounterComponent],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent {
/* languageStats: any; */

/* constructor(private githubService: GithubService){} */
private githubService = inject(GithubService);
  profile?:any;

  languageStats = toSignal(

    this.githubService.getLanguageStatistics(),

    {

        initialValue: []

    }

);

  ngOnInit(){

  this.githubService.getProfile().subscribe(profile=>{
    this.profile=profile;
  /* this.profile?.public_repos
  this.profile?.bio
  this.profile?.followers */
  });

  }

  protected readonly stats = [
    { value: '12+', title: 'Repositories' },
    { value: '780+', title: 'Comments' },
    { value: '5', title: 'Projects' },
    { value: '15+', title: 'Technologies' }
  ];

  protected readonly languages = [    
    { title: 'C#', value: '100',  topColor: 'bg-purple-500', bgColor: 'bg-purple-500/10'},
    { title: 'Typescript', value: '100',  topColor: 'bg-blue-500', bgColor: 'bg-blue-500/10' },
    { title: 'SQL', value: '100',  topColor: 'bg-yellow-500', bgColor: 'bg-yellow-500/10' },
    { title: 'HTML5', value: '100',  topColor: 'bg-orange-500', bgColor: 'bg-orange-500/10' },
    { title: 'CSS3', value: '100',  topColor: 'bg-pink-500', bgColor: 'bg-pink-500/10' },
    { title: 'Other', value: '72',  topColor: 'bg-white', bgColor: 'bg-white/10' }
  ];

}
