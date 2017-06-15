import { trigger, transition, style, animate } from '@angular/animations';

export const routeFadeStateTrigger = trigger('routeFadeState', [
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate(1000)
  ]),
  transition(':leave', animate(300, style({
    opacity: 0
  })))
]);

export const routeSlideStateTrigger = trigger('routeSlideState', [
  transition(':enter', [
    style({
      transform: 'translateY(-100%)',
      opacity: 0
    }),
    animate(500)
  ]),
  transition(':leave', animate(500, style({
    transform: 'translateY(100%)',
    opacity: 0
  })))
])