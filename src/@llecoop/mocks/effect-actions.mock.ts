import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';

export class TestActions extends Actions {
  source: any;

  constructor() {
    super(null);
  }

  set stream(source: Observable<any>) {
    this.source = source;
  }
}

export function getActions() {
  return new TestActions();
}
