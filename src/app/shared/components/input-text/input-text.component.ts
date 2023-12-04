import { Component, Input, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent {
  @Input() type: 'text' | 'number' = 'text';

  @Input() textarea = false;

  @Input() label: string;

  @Input() max = 500;

  value = '';

  length = this.value.length;

  constructor(@Optional() private readonly _ngControl?: NgControl) {}

  onChange($event: Event) {
    this.value = ($event.target as Element).innerHTML;
    this.length = this.value.length;
  }
}
