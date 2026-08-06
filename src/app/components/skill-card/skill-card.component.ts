
import { Component } from '@angular/core';
import { LucideAngularModule, BriefcaseBusiness, Wrench, Database, Server, Monitor } from 'lucide-angular';
import { LucideCircleCheck } from '@lucide/angular';

@Component({
    selector: 'app-skill-card',
    standalone: true,
    imports: [LucideAngularModule],
    templateUrl: './skill-card.component.html',
    styleUrl: './skill-card.component.scss'
})
export class SkillCardComponent {

  readonly Monitor = Monitor;
  readonly Server = Server;
  readonly Database = Database;
  readonly Wrench = Wrench;
  readonly BriefcaseBusiness = BriefcaseBusiness;


  protected readonly skills = [
    { icon: Monitor, title: 'Frontend', text: ['Angular', 'Typescript', 'HTML5', 'CSS3/Tailwind Css', 'RxJS'] },
    { icon: Server, title: 'Backend', text: ['ASP.NET Core 8', 'C#', 'REST APIs', 'JWT Authentication', 'Clean Architecture'] },
    { icon: Database, title: 'Database', text: ['SQL Server', 'MySQL', 'Entity Framework', 'MongoDB', 'Oracle'] },
    { icon: Wrench, title: 'Tools & DevOps', text: ['Git', 'GitHub', 'Visual Studio', 'VS Code', 'Swagger/Postman'] },
    { icon: BriefcaseBusiness, title: 'Business & Analysis', text: ['Requirements Gathering & Analysis', 'Process Mapping', 'UML', 'Agile/Scrum'] }
  ]

}
