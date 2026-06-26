import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

   // Current active section
  readonly activeSection = signal('home');

  // Update the active section
  setActiveSection(section: string): void {
    this.activeSection.set(section);
  }

  // Read the current active section
  getActiveSection(): string {
    return this.activeSection();
  }

 
}
