import {
  Component,
  Input,
  OnInit,
  signal
} from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit {

  @Input() end = 0;

  @Input() duration = 1500;

  @Input() suffix = '';

  value = signal(0);

  ngOnInit(): void {

    const start = performance.now();

    const animate = (time: number) => {

      const progress = Math.min(
        (time - start) / this.duration,
        1
      );

      this.value.set(
        Math.floor(progress * this.end)
      );

      if (progress < 1) {

        requestAnimationFrame(animate);

      }

    };

    requestAnimationFrame(animate);

  }

}