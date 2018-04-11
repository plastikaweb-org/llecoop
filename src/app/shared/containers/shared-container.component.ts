import { HostBinding } from '@angular/core';

export abstract class SharedContainerComponent {
  @HostBinding('@fadeInAnimation') fadeInAnimation = true;

  constructor(protected sandBox: any) {}

  onLogout() {
    this.sandBox.doLogout();
  }

  onChangeLanguage(lang: string) {
    this.sandBox.doChangeLang(lang);
  }
}
