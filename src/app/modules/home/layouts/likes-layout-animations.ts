import { animate, group, query, style, transition, trigger } from '@angular/animations';

const slideTo = (direction) => {
  const optional = { optional: true };
  return [
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          [direction]: 0,
          width: '100%'
        })
      ],
      optional
    ),
    query(':enter', [style({ [direction]: '-100%' })]),
    group([
      query(':leave', [animate('500ms ease', style({ [direction]: '100%' }))], optional),
      query(':enter', [animate('500ms ease', style({ [direction]: '0%' }))])
    ])
    // Normalize the page style... Might not be necessary

    // Required only if you have child animations on the page
    // query(':leave', animateChild()),
    // query(':enter', animateChild())
  ];
};

export default trigger('routeAnimations', [
  transition(':increment', slideTo('right')),
  transition(':decrement', slideTo('left'))
]);
