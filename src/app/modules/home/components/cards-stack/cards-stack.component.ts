import { Component, ElementRef, inject, Input, OnInit, ViewChild } from '@angular/core';
import { UsersInterface } from '../../../../@types/users';
import { ButtonStyleType } from '../../../../@types/button';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-cards-stack',
  templateUrl: './cards-stack.component.html',
  styleUrls: ['./cards-stack.component.scss']
})
export class CardsStackComponent implements OnInit {
  ButtonStyleType = ButtonStyleType;

  @Input() initialUserId;

  @Input()
  set cards(_cards: UsersInterface[]) {
    this.userCards = _cards;
  }

  prevIndex = 0;

  activeIndex = 1;

  nextIndex = 2;

  @ViewChild('slider') slider!: ElementRef;

  private activatedRoute = inject(ActivatedRoute);

  private router = inject(Router);

  public userCards: UsersInterface[];

  ngOnInit(): void {
    this.activatedRoute.queryParams
      .subscribe((params) => {
        const index = this.userCards.findIndex((user) => user.id === parseInt(params['id']));

        if (index !== -1) {
          this.activeIndex = index;
          this.prevIndex = (((this.activeIndex - 1) % 5) + 5) % 5;
          this.nextIndex = (this.activeIndex + 1) % 5;
        }
      })
      .unsubscribe();
  }

  handleSwipe($event: HammerInput) {
    if (Math.abs($event.overallVelocity) < 0.5) {
      return;
    }

    switch ($event.direction) {
      case 2:
        this.prevIndex = this.activeIndex;
        this.activeIndex = (this.activeIndex + 1) % 5;
        this.nextIndex = (this.activeIndex + 1) % 5;

        break;
      case 4:
        this.nextIndex = this.activeIndex;
        this.activeIndex = (((this.activeIndex - 1) % 5) + 5) % 5;
        this.prevIndex = (((this.activeIndex - 1) % 5) + 5) % 5;

        break;
      default:
        return;
    }

    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        id: this.userCards[this.activeIndex].id
      }
    });

    const target = this.slider.nativeElement.querySelector('.active');

    target.style.setProperty(
      'transform',
      `translate3d(${$event.velocityX * 100}%, ${$event.velocityY * 100}%, 0) rotate(0) scale(1)`
    );

    setTimeout(() => {
      target.style.removeProperty('transform');
    }, 300);
  }

  handlePan($event: HammerInput) {
    const [x, y] = [$event.deltaX * 0.2, $event.deltaY * 0.1];

    $event.target.style.setProperty('transform', `translate3d(${x}px, ${y}px, 0) rotate(${x / 50}deg)`);

    if ($event.isFinal) {
      $event.target.style.setProperty('transition', 'transform 0.3s ease-in-out');
      $event.target.style.removeProperty('transform');

      setTimeout(() => {
        $event.target.style.removeProperty('transition');
      }, 300);
    }
  }
}
