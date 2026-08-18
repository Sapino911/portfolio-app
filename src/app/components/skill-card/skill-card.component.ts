
import { Component, ChangeDetectionStrategy } from '@angular/core';
/* import { LucideAngularModule, BriefcaseBusiness, Wrench, Database, Server, Monitor } from '@lucide/angular';
import { LucideCircleCheck } from '@lucide/angular';  */
/* import { LucideIcon, LucideBriefcaseBusiness, LucideWrench } from '@lucide/angular'; */
import { LucideBriefcaseBusiness, LucideWrench, LucideDatabase, LucideServer, LucideMonitor } from '@lucide/angular';


@Component({
  selector: 'app-skill-card',
  standalone: true,
  imports: [LucideBriefcaseBusiness, LucideWrench, LucideDatabase, LucideServer, LucideMonitor],
  templateUrl: './skill-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './skill-card.component.scss',

})
export class SkillCardComponent {

  /* readonly LucideBriefcaseBusiness = LucideBriefcaseBusiness; */
  /* readonly Monitor = Monitor;
  readonly Server = Server;
  readonly Database = Database;
  readonly Wrench = Wrench;
  readonly BriefcaseBusiness = BriefcaseBusiness; */


  readonly skills = [
    { icon: LucideBriefcaseBusiness, title: 'Frontend', text: ['Angular', 'Typescript', 'HTML5', 'CSS3/Tailwind Css', 'RxJS'] },
    { icon: LucideWrench, title: 'Backend', text: ['ASP.NET Core 8', 'C#', 'REST APIs', 'JWT Authentication', 'Clean Architecture'] },
    { icon: LucideDatabase, title: 'Database', text: ['SQL Server', 'MySQL', 'Entity Framework', 'MongoDB', 'Oracle'] },
    { icon: LucideServer, title: 'Tools & DevOps', text: ['Git', 'GitHub', 'Visual Studio', 'VS Code', 'Swagger/Postman'] },
    { icon: LucideMonitor, title: 'Business & Analysis', text: ['Requirements Gathering & Analysis', 'Process Mapping', 'UML', 'Agile/Scrum'] }
  ]

}
