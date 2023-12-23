import { animate, state, style, transition, trigger } from '@angular/animations';

export default trigger('openClose', [
  state(
    'void',
    style({
      opacity: '0',
      transform: 'translateX(100%)'
    })
  ),
  state(
    'open',
    style({
      opacity: '1',
      transform: 'translateX(0)'
    })
  ),
  transition('void <=> open', [animate('0.3s ease-in-out')])
]);
