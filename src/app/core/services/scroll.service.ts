import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
 readonly scrollProgress = signal(0);

  constructor() {
    this.initialize();
  }

  private initialize(): void {

  let ticking = false;

  window.addEventListener('scroll', () => {

    if (!ticking) {

      requestAnimationFrame(() => {

        const scrollTop = window.scrollY;

        const documentHeight =
          document.documentElement.scrollHeight -
          window.innerHeight;

        const progress =
          (scrollTop / documentHeight) * 100;

        this.scrollProgress.set(progress);

        ticking = false;

      });

      ticking = true;

    }

  });

}

  scrollTo(sectionId: string): void {

    const element = document.getElementById(sectionId);

    if (!element) return;

    const navbarHeight = 90;

    const offsetTop =
        element.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight;

    window.scrollTo({

        top: offsetTop,

        behavior: 'smooth'

    });

}
  
  /* scrollPercentage = signal(0);
  
  scrollTo(sectionId: string): void {

    const element = document.getElementById(sectionId);
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }

  } */

  

}