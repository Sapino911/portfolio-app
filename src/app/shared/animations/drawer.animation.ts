import {
    trigger,
    transition,
    style,
    animate
} from '@angular/animations';

export const drawerAnimation = trigger(

'drawerAnimation',[

transition(':enter',[

style({

transform:'translateX(100%)'

}),

animate(

'250ms ease-out',

style({

transform:'translateX(0)'

})

)

]),

transition(':leave',[

animate(

'200ms ease-in',

style({

transform:'translateX(100%)'

})

)

])

]);