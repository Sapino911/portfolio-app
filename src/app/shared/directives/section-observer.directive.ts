import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  inject
} from '@angular/core';

import { NavigationService } from '../../core/services/navigation.service';

@Directive({
  selector: '[appSectionObserver]',
  standalone: true
})
export class SectionObserverDirective implements OnInit {

  @Input() appSectionObserver = '';

  private element = inject(ElementRef<HTMLElement>);
  private navigation = inject(NavigationService);

  ngOnInit(): void {

    const observer = new IntersectionObserver(

      ([entry]) => {

        if (entry.isIntersecting) {

          this.navigation.setActiveSection(
            this.appSectionObserver
          );

        }

      },

      {
        threshold: 0.5
      }

    );

    observer.observe(this.element.nativeElement);

  }

}