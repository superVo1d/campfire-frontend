import { ApplicationRef, ComponentRef, createComponent, EnvironmentInjector, Injectable, Type } from '@angular/core';
import { ModalComponent } from '../components';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  componentRef: ComponentRef<ModalComponent>;

  modalContentRef: ComponentRef<any>;

  constructor(
    private appRef: ApplicationRef,
    private injector: EnvironmentInjector
  ) {}

  open<C>(ModalContent: Type<C>) {
    const modalContentRef = createComponent<C>(ModalContent, {
      environmentInjector: this.injector
    });

    this.componentRef = createComponent(ModalComponent, {
      environmentInjector: this.injector,
      projectableNodes: [[modalContentRef.location.nativeElement]]
    });

    document.body.appendChild(this.componentRef.location.nativeElement);
    this.appRef.attachView(this.componentRef.hostView);
    this.appRef.attachView(modalContentRef.hostView);
  }

  close() {
    this.componentRef.destroy();
  }
}
