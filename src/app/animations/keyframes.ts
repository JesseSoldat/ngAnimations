import { trigger, state, style, transition, group, animate, keyframes } from '@angular/animations';


export const rainbowBoxTrigger = trigger('rainbowState', [
  transition('* => *', [
    group([
      animate(1000, style({
        opacity: 0.7
      })),
      animate(8000, keyframes([
        style({
          backgroundColor: 'white',
          offset: 0
        }),
        style({
          backgroundColor: 'orange',
          offset: 0.2
        }),
        style({
          backgroundColor: 'red',
          offset: 0.4
        }),
        style({
          backgroundColor: 'purple',
          offset: 0.6
        }),
        style({
          backgroundColor: 'green',
          offset: 0.8
        }),
        style({
          backgroundColor: 'blue',
          offset: 1
        })
      ]))
    ]),
    animate(500, style({
      backgroundColor: 'lightblue'
    }))
  ])
]);