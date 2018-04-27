import { LocalStorageMock } from './local-storage.mock';

export class ThemeMock extends LocalStorageMock {
  ls: any = { 'mat-theme': 'theme-dark' };
}
