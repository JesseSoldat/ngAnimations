import { trigger, transition, style, animate } from '@angular/animations';

// export const showStateTrigger = trigger('showState', [
//   transition('void => *', [
//     style({
//       opacity: 0
//     }),
//     animate(1500)
//   ]),
//   transition('* => void', animate(1500, style({
//     opacity: 0
//   })))
// ]);

export const showStateTrigger = trigger('showState', [
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate(1500)
  ]),
  transition(':leave', animate(1500, style({
    opacity: 0
  })))
]);

export const animateStateTrigger = trigger('animateState', [
  transition('* => *', [
    animate('3000ms linear', style({
      width: 50
    })),
    animate(1000, style({
      width: '*'
    }))
  ])
]);