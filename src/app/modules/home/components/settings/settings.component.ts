import { Component, HostBinding, HostListener, inject, Input, OnInit } from '@angular/core';
import { UserInterface } from '../../../../@types/user';
import { data } from '../../../../mocks/user';
import { ModalService } from '../../../../shared/services/modal.service';
import animations from './settings-animations';
import { UsersInterface } from '../../../../@types/users';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  animations: [animations]
})
export class SettingsComponent implements OnInit {
  private _user: UserInterface = data;

  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(this._user.name, [Validators.required]),
      about: new FormControl(this._user.about, [Validators.maxLength(500)]),
      age: new FormControl(this._user.age, [Validators.required, Validators.pattern(/[0-9]*/)])
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
      title: this._user.name + ', ' + this._user.age,
      photo: this._user.photo
    };
  }

  private modalService = inject(ModalService);

  @HostBinding('@openClose')
  public animationState = 'open';

  @HostListener('@openClose.done', ['$event'])
  animationEnded(e: AnimationEvent) {
    /* @ts-ignore */
    if (e.toState === 'void') {
      this.modalService.closeAll();
    }
  }

  openPreview = () => {
    this.isPreviewOpen = true;
  };

  closePreview = () => {
    console.log('closePreview');
    this.isPreviewOpen = false;
  };

  onSubmit = () => {
    console.log(this.form.value);
  };

  close = () => {
    this.animationState = 'void';
  };
}
