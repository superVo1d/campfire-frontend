import { Component, HostBinding, inject, Input, OnInit } from '@angular/core';
import { ModalService } from '../../../../shared/services/modal.service';
import { SettingsComponent } from '../settings/settings.component';
import { data } from '../../../../mocks/user';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  private modalService = inject(ModalService);

  private user = data;

  @HostBinding('style.--percentage')
  private _percentage!: number;

  get percentage() {
    return this._percentage;
  }

  ngOnInit() {
    const fieldsToCount = ['name', 'photo', 'about', 'age'];

    this._percentage = Math.ceil(
      fieldsToCount.reduce((value, key) => {
        return this.user[key] === '' ? value : (value / 100 + 1 / fieldsToCount.length) * 100;
      }, 0)
    );
  }

  openSettings = () => {
    this.modalService.open(SettingsComponent);
  };
}
