import { ApplicationRef, ComponentRef, createComponent, EnvironmentInjector, Injectable, Type } from '@angular/core';
import { ModalComponent } from '../components';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modalRef: ComponentRef<ModalComponent>;

  constructor(
    private appRef: ApplicationRef,
    private injector: EnvironmentInjector
  ) {}

  open<C>(ModalContent: Type<C>, modalInputs?: { [name: string]: any }) {
    const modalContentRef = createComponent<C>(ModalContent, {
      environmentInjector: this.injector
    });

    if (modalInputs) {
      Object.keys(modalInputs).map((name) => {
        modalContentRef.setInput(name, modalInputs[name]);
      });
    }

    this.modalRef = createComponent(ModalComponent, {
      environmentInjector: this.injector,
      projectableNodes: [[modalContentRef.location.nativeElement]]
    });

    document.body.appendChild(this.modalRef.location.nativeElement);
    this.appRef.attachView(this.modalRef.hostView);

    this.appRef.attachView(modalContentRef.hostView);
  }

  closeAll() {
    this.modalRef.destroy();
  }

  close() {
    this.closeAll();
  }
}
