import {
  Component,
  ElementRef,
  HostBinding,
  inject,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { BodyClassService } from '../../services/body-class.service';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit, OnChanges {
  @Input() type: 'text' | 'number' = 'text';

  @Input() textarea = false;

  @Input() label: string;

  @Input() max = 500;

  @Input() placeholder = '';

  @Input() control;

  @ViewChild('input') inputEl: ElementRef<HTMLInputElement>;

  @ViewChild('textareaEl') textareaEl: ElementRef<HTMLTextAreaElement>;

  @HostBinding('class.error') get error() {
    return this.control.invalid && (this.control.dirty || this.control.touched);
  }

  public length = 0;

  private bodyClassService = inject(BodyClassService);

  ngOnInit() {
    this.length = this.control.value?.length || 0;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['control']) {
      this.onChange();
    }
  }

  autoGrow() {
    if (this.textareaEl?.nativeElement) {
      this.textareaEl.nativeElement.style.height = '1px';
      this.textareaEl.nativeElement.style.height = this.textareaEl.nativeElement.scrollHeight + 'px';
    }
  }

  onFocus() {
    if (this.inputEl?.nativeElement) {
      this.inputEl.nativeElement?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }

    if (this.textareaEl?.nativeElement) {
      this.textareaEl?.nativeElement?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }

  onChange() {
    const value = this.control?.value;

    if (this.type === 'number' && value) {
      this.control?.patchValue(value.toString().replace(/[^0-9]/g, ''));
    }

    this.length = value?.length || 0;

    this.autoGrow();
  }
}
