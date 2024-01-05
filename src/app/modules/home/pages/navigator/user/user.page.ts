import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersInterface } from '../../../../../@types/users';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUsers } from '../../../../../core/store';
import { TelegramService } from '../../../../../shared/services/telegram.service';

@Component({
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss']
})
export class UserPageComponent implements OnInit {
  userId: number | null;

  user: UsersInterface;

  private route = inject(ActivatedRoute);

  private router = inject(Router);

  // private bodyClassService = inject(BodyClassService);

  private telegramService = inject(TelegramService);

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

    // this.telegramService.setBackButton(() => {
    //   this.router.navigate(['..']);
    // });
  }
}
