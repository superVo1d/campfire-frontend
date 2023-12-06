import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-userpic',
  templateUrl: './userpic.component.html',
  styleUrls: ['./userpic.component.scss']
})
export class UserpicComponent {
  @HostBinding('style.background-image')
  private _path!: string;

  @Input()
  public set path(imageUrl: string) {
    this._path = `url("${imageUrl}")`;
  }
}
