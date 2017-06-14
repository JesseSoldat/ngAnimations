import { style, state, transition, animate, trigger, keyframes } from '@angular/animations';
export const markedTrigger = trigger('markedState', [
  state('default', style({
    border: '1px solid black',
    background: 'transparent',
    padding: '20px'
  })),
  state('marked', style({
    border: '2px solid blue',
    background: '#caeff9',
    padding: '19px'
  })),
  transition('default => marked', [
    style({
      border: '2px solid black',
      padding: '19px',
      transform: 'scale(1)'
    }),
    animate('200ms ease-out', style({
      transform: 'scale(1.01)'
    })),
    animate(200)
  ]),
  transition('marked => default', [
    style({
      border: '1px solid blue',
      padding: '20px'
    }),
    animate('300ms ease-out')
  ])
]);

export const itemStateTrigger = trigger('itemState', [
  transition(':enter', [
    animate('800ms ease-out', keyframes([
      style({
        opacity: 0,
        transform: 'translateX(-100%)',
        offset: 0
      }),
      style({
        opacity: 1,
        transform: 'translateX(15%)',
        offset: 0.5
      }),
      style({
        opacity: 1,
        transform: 'translateX(0)',
        offset: 1
      })
    ]))
  ]),
  transition(':leave', [
    animate('800ms ease-in', keyframes([
      style({
        opacity: 1,
        transform: 'translateX(0)'
      }),
      style({
        opacity: 0,
        transform: 'translateX(100%)'
      })
    ]))
  ])
])