import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScrollProgressComponent } from "./shared/scroll-progress/scroll-progress.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ScrollProgressComponent],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio-app';
}
