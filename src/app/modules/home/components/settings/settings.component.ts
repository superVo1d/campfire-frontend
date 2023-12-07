import { AfterViewInit, Component, HostBinding, HostListener, inject, OnDestroy, OnInit } from '@angular/core';
import { UserInterface } from '../../../../@types/user';
import { data } from '../../../../mocks/user';
import { ModalService } from '../../../../shared/services/modal.service';
import animations from './settings-animations';
import { ProfileInterface } from '../../../../@types/profile';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  animations: [animations]
})
export class SettingsComponent {
  public user: UserInterface = data;

  public isPreviewOpen = false;

  public getUserPreview(): ProfileInterface {
    return {
      id: this.user.id,
      title: this.user.name + ', ' + this.user.age,
      photo: this.user.photo
    };
  }

  private modalService = inject(ModalService);

  @HostBinding('@openClose')
  public animationState = 'open';

  @HostListener('@openClose.done', ['$event'])
  animationEnded(e: AnimationEvent) {
    /* @ts-ignore */
    if (e.toState === 'void') {
      this.modalService.close();
    }
  }

  openPreview = () => {
    this.isPreviewOpen = true;
  };

  closePreview = () => {
    this.isPreviewOpen = false;
  };

  close = () => {
    this.animationState = 'void';
  };
}
