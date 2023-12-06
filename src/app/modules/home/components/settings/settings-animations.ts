import { animate, state, style, transition, trigger } from '@angular/animations';

export default trigger('openClose', [
  state(
    'void',
    style({
      transform: 'translateX(110%) scale(0.8)'
    })
  ),
  state(
    'open',
    style({
      transform: 'translateX(0) scale(1)'
    })
  ),
  transition('void <=> open', [animate('0.3s')])
]);
