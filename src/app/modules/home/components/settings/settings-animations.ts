import { animate, state, style, transition, trigger } from '@angular/animations';

export default trigger('openClose', [
  state(
    'void',
    style({
      transform: 'translateX(100%)'
    })
  ),
  state(
    'open',
    style({
      transform: 'translateX(0)'
    })
  ),
  transition('void <=> open', [animate('0.3s ease-in-out')])
]);
