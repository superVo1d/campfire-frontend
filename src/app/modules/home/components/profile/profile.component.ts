import { Component, inject } from '@angular/core';
import { UserInterface } from '../../../../@types/user';
import { data } from '../../../../mocks/user';
import { ModalService } from '../../../../shared/services/modal.service';
import { SettingsComponent } from '../settings/settings.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  public user: UserInterface = data;

  private modalService = inject(ModalService);

  openSettings = () => {
    this.modalService.open(SettingsComponent);
  };
}
