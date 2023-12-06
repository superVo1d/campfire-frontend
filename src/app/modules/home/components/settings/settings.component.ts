import { AfterViewInit, Component, HostBinding, HostListener, inject, OnDestroy, OnInit } from '@angular/core';
import { UserInterface } from '../../../../@types/user';
import { data } from '../../../../mocks/user';
import { ModalService } from '../../../../shared/services/modal.service';
import animations from './settings-animations';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  animations: [animations]
})
export class SettingsComponent {
  public user: UserInterface = data;

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

  close = () => {
    this.animationState = 'void';
  };
}
