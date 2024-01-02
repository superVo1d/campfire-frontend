import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersInterface } from '../../../../../@types/users';
import { BodyClassService } from '../../../../../shared/services/body-class.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUsers } from '../../../../../core/store';

@Component({
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss']
})
export class UserPageComponent implements OnInit, OnDestroy {
  userId: number | null;

  user: UsersInterface;

  private route = inject(ActivatedRoute);

  private bodyClassService = inject(BodyClassService);

  private store = inject(Store);

  cards$: Observable<UsersInterface[]> = this.store.select(selectUsers);

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('userId');

    if (userId) {
      this.userId = parseInt(userId);
    }

    this.cards$.subscribe((data) => {
      if (this.userId && data.filter(({ id }) => id === this.userId)[0]) {
        this.user = data.filter(({ id }) => id === this.userId)[0];
      }
    });

    this.bodyClassService.addBodyClass('modal');
  }

  ngOnDestroy() {
    this.bodyClassService.removeBodyClass('modal');
  }
}
