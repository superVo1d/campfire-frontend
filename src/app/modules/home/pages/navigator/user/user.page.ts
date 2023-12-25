import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from '../../../../../mocks/profiles';
import { UsersInterface } from '../../../../../@types/users';
import { BodyClassService } from '../../../../../shared/services/body-class.service';

@Component({
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss']
})
export class UserPageComponent implements OnInit, OnDestroy {
  userId: string | null;

  user: UsersInterface;

  private route = inject(ActivatedRoute);

  private bodyClassService = inject(BodyClassService);

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('userId');

    if (this.userId && data.filter(({ id }) => id === this.userId)[0]) {
      this.user = data.filter(({ id }) => id === this.userId)[0];
    }

    this.bodyClassService.addBodyClass('modal');
  }

  ngOnDestroy() {
    this.bodyClassService.removeBodyClass('modal');
  }
}
