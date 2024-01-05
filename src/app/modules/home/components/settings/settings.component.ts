import { Component, inject, Input, OnInit } from '@angular/core';
import { UserEditable, UserInterface } from '../../../../@types/user';
import { UsersInterface } from '../../../../@types/users';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { selectUser } from '../../../../core/store';
import { TelegramService } from '../../../../shared/services/telegram.service';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';
import { ApiService } from '../../../../core/services/api.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  private _user: UserInterface;

  private store = inject(Store);

  private telegramService = inject(TelegramService);

  private apiService = inject(ApiService);

  private router = inject(Router);

  form: FormGroup;

  ngOnInit() {
    this.store.pipe(select(selectUser)).subscribe((user) => {
      if (!user) {
        return;
      }

      this._user = user;

      this.form = new FormGroup({
        name: new FormControl(this._user?.firstName, [Validators.required]),
        about: new FormControl(this._user?.about, [Validators.maxLength(500)]),
        age: new FormControl(this._user?.age, [Validators.required, Validators.pattern(/[0-9]*/)])
      });
    });

    this.telegramService.setBackButton(() => {
      this.router.navigate(['..']);
    });
  }

  @Input() isPreviewOpen = false;

  @Input() id = '';

  get user(): UserInterface {
    return this._user;
  }

  get userPreview(): UsersInterface {
    return {
      id: this._user.id,
      firstName: this.form.get('name')?.value,
      age: this.form.get('age')?.value,
      photo: this._user.photo,
      about: this.form.get('about')?.value
    };
  }

  openPreview = () => {
    this.isPreviewOpen = true;

    this.telegramService.setBackButton(() => {
      this.router.navigate(['/settings']);
    });
  };

  closePreview = () => {
    this.isPreviewOpen = false;

    setTimeout(() => {
      this.telegramService.setBackButton(() => {
        this.router.navigate(['..']);
      });
    }, 0);
  };

  onSubmit = () => {
    this.apiService.updateUser(this.form.value as UserEditable).subscribe((data) => {
      console.log(data);
    });
  };
}
