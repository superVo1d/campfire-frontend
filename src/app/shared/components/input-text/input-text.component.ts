import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

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

  @Input() control;

  @ViewChild('textArea') textArea: ElementRef<HTMLTextAreaElement>;

  public length = 0;

  ngOnInit() {
    this.length = this.control.value?.length || 0;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['control']) {
      console.log(changes);
      this.onChange();
    }
  }

  autoGrow() {
    if (this.textarea) {
      this.textArea.nativeElement.style.height = '1px';
      this.textArea.nativeElement.style.height = this.textArea.nativeElement.scrollHeight + 'px';
    }
  }

  onChange() {
    this.length = this.control?.value?.length || 0;

    this.autoGrow();
  }
}
