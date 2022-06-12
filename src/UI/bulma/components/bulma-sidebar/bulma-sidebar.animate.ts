import {animate, state, style, transition, trigger} from '@angular/animations';

export default [
  trigger('openClose', [
    // ...
    state('true', style({
      width: '200px',
    })),
    state('false', style({
      width: '50px',
    })),
    transition('true <=> false', [
      animate('250ms'),
    ]),
  ]),
  trigger('openCloseBtn', [
    // ...
    state('true', style({
      right: '0',
    })),
    state('false', style({
      // right: '50%',
      position:''
    })),
    transition('true <=> false', [
      animate('250ms'),
    ]),
  ]),
]
