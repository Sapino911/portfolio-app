import { Component, inject, signal } from '@angular/core';
import { ScrollService } from '../../core/services/scroll.service';
import { NavigationService } from '../../core/services/navigation.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(
    private scrollService: ScrollService,
){}

 navigation = inject(NavigationService);
 
navigate(section: string){

    this.scrollService.scrollTo(section);

}

menuOpen = signal(false);

toggleMenu(): void {

    this.menuOpen.update(value => !value);

}

closeMenu(): void {

    this.menuOpen.set(false);

}
}
