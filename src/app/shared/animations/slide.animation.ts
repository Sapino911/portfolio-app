import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';

export const slideUpAnimation = trigger('slideUpAnimation', [

  transition(':enter', [

    style({

      opacity: 0,

      transform: 'translateY(40px)'

    }),

    animate(

      '600ms cubic-bezier(.2,.8,.2,1)',

      style({

        opacity: 1,

        transform: 'translateY(0)'

      })

    )

  ])

]);