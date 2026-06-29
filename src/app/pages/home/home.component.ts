import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { HeroComponent } from "../../components/hero/hero.component";
import { AboutComponent } from "../about/about.component";
import { SkillCardComponent } from "../../components/skill-card/skill-card.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ExperienceComponent } from "../experience/experience.component";
import { ContactComponent } from "../contact/contact.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { GithubSectionComponent } from "../../components/github-section/github-section.component";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, AboutComponent, SkillCardComponent, ExperienceComponent, ContactComponent, FooterComponent, ProjectsComponent, GithubSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 
}
