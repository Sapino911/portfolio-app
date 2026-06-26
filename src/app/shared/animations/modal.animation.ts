import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';

export const modalAnimation = trigger('modalAnimation',[

transition(':enter',[

style({

opacity:0,

transform:'scale(.92)'

}),

animate(

'250ms cubic-bezier(.2,.8,.2,1)',

style({

opacity:1,

transform:'scale(1)'

})

)

]),

transition(':leave',[

animate(

'180ms ease-in',

style({

opacity:0,

transform:'scale(.96)'

})

)

])

]);