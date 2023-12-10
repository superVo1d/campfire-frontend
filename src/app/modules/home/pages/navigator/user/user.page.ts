import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from '../../../../../mocks/profiles';
import { UsersInterface } from '../../../../../@types/users';

@Component({
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss']
})
export class UserPageComponent implements OnInit {
  userId: string | null;

  user: UsersInterface;

  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('userId');

    if (this.userId && data.filter(({ id }) => id === this.userId)[0]) {
      this.user = data.filter(({ id }) => id === this.userId)[0];
    }
  }
}