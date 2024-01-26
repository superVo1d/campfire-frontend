import { Component, HostBinding, inject, Input, OnInit } from '@angular/core';
import { ModalService } from '../../../../shared/services/modal.service';
import { SettingsComponent } from '../settings/settings.component';
import { UserInterface } from '../../../../@types/user';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  private modalService = inject(ModalService);

  @Input() user: UserInterface;

  @HostBinding('style.--percentage')
  private _percentage!: number;

  get percentage() {
    return this._percentage;
  }

  ngOnInit() {
    const fieldsToCount = ['workingName', 'photo', 'about', 'age'];

    this._percentage = Math.ceil(
      fieldsToCount.reduce((value, key) => {
        return !this.user[key] || this.user[key] === '' ? value : (value / 100 + 1 / fieldsToCount.length) * 100;
      }, 0)
    );
  }

  openSettings = () => {
    this.modalService.open(SettingsComponent);
  };
}
