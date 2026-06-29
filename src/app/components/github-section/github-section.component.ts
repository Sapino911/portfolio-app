import { Component } from '@angular/core';
import { GithubProfile } from '../../core/models/github.model';
import { GithubService } from '../../core/services/github.service';

@Component({
  selector: 'app-github-section',
  standalone: true,
  imports: [],
  templateUrl: './github-section.component.html',
  styleUrl: './github-section.component.scss'
})
export class GithubSectionComponent {

  constructor(private githubService: GithubService){}
  profile?:any;
  repo?:any;

  ngOnInit(){

  this.githubService.getProfile().subscribe(profile=>{
    this.profile=profile;
  /* this.profile?.public_repos
  this.profile?.bio
  this.profile?.followers */
  });

  this.githubService.getRepositories().subscribe(repo=>{
    this.repo=repo;
  /* this.profile?.public_repos
  this.profile?.bio
  this.profile?.followers */
  });

  }

  
}
