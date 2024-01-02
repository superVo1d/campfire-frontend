import { Component, inject, Input, OnInit } from '@angular/core';
import { UserInterface } from '../../../../@types/user';
import { data } from '../../../../mocks/user';
import { ModalService } from '../../../../shared/services/modal.service';
import { UsersInterface } from '../../../../@types/users';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { selectUser } from '../../../../core/store';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  private _user: UserInterface;

  private store = inject(Store);

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
  }

  @Input() isPreviewOpen = false;

  @Input() id = '';

  get user(): UserInterface {
    return this._user;
  }

  get userPreview(): UsersInterface {
    return {
      id: this._user.id,
      firstName: this._user.firstName + ', ' + this._user.age,
      photo: this._user.photo
    };
  }

  private modalService = inject(ModalService);

  openPreview = () => {
    this.isPreviewOpen = true;
  };

  closePreview = () => {
    this.isPreviewOpen = false;
  };

  onSubmit = () => {
    console.log(this.form.value);
  };
}
