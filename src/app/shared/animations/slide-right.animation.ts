import { animate, AnimationEntryMetadata, state, style, transition, trigger } from '@angular/core'

export const slideRightAnimation : AnimationEntryMetadata = trigger('routeAnimation', [
  state('*', style({
    transform: 'translateX(0)'
  })),
  transition(':enter', [
    style({
      transform: 'translateX(-100%)'
    }),
    animate('0.5s ease-in')
  ])
]);
