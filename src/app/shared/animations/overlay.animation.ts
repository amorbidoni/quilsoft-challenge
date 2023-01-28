import {
    animate,
    state,
    style,
    transition,
    trigger,
  } from '@angular/animations';
  
  export const OverlayAnimation = trigger('overlayAnimation', [
    state(
      'in',
      style({
        opacity: 0,
      })
    ),
    transition(':enter', [
      style({ opacity: 0 }),
      animate(
        '1s 0.2s ease',
        style({
          opacity: '*',
        })
      ),
    ]),
    transition(':leave', [
      animate(
        '0.5s 0.2s linear',
        style({
          opacity: 0,
        })
      ),
    ]),
  ]);
  