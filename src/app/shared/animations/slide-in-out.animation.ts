import { trigger, state, style, transition, animate } from '@angular/animations';
/*
export const slideInOutAnimation : AnimationEntryMetadata = trigger('routeAnimation', [
  state('start', style({
    transform: 'translateX(-100%)'
  })),
  state('in', style({
    transform: 'translateX(0)'
  })),
  state('out', style({
    transform: 'transateX(100%)'
  })),
  transition('start => in', animate('0.5s ease-in')),
  transition('in => out', animate('0.5s ease-out'))
]);
*/

export const slideInOutAnimation = trigger('routeAnimation', [
  state('*', style({
    position: 'fixed',
    width: '100%'
  })),
  transition(':enter', [
    style({
      transform: 'translateX(-100%)'
    }),
    animate('0.5s ease-in-out', style({ transform: 'translateX(0)' }))
  ]),
  transition(':leave', [
    style({
      transform: 'translateX(0)'
    }),
    animate('0.5s ease-in-out', style({ transform: 'translateX(100%)'}))
  ])
]);
