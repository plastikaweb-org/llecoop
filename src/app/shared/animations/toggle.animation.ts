import { animate, style, transition, trigger } from '@angular/animations';

export const toggleAnimation = trigger('toggleAnimation', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('0.25s ease-in-out', style({ opacity: 1 }))
  ]),
  transition(':leave', [animate('0.25s ease-in-out', style({ opacity: 0 }))])
]);
