import { HostBinding } from '@angular/core';

export abstract class SharedContainerComponent {
  @HostBinding('@fadeInAnimation') fadeInAnimation = true;

  constructor(protected sandBox: any) {}
}
