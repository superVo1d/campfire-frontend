import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { BodyClassService } from '../../services/body-class.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {
  private bodyClassService = inject(BodyClassService);

  ngOnInit() {
    this.bodyClassService.addBodyClass('modal');
  }

  ngOnDestroy() {
    this.bodyClassService.removeBodyClass('modal');
  }
}
