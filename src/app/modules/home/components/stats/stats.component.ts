import { Component, inject } from '@angular/core';
import { ModalService } from '../../../../shared/services/modal.service';
import { SettingsComponent } from '../settings/settings.component';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent {
  private modalService = inject(ModalService);

  openSettings = () => {
    this.modalService.open(SettingsComponent);
  };
}
