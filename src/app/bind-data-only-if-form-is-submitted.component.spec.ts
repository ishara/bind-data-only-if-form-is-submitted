import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { BindDataOnlyIfFormIsSubmittedAppComponent } from '../app/bind-data-only-if-form-is-submitted.component';

beforeEachProviders(() => [BindDataOnlyIfFormIsSubmittedAppComponent]);

describe('App: BindDataOnlyIfFormIsSubmitted', () => {
  it('should create the app',
      inject([BindDataOnlyIfFormIsSubmittedAppComponent], (app: BindDataOnlyIfFormIsSubmittedAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'bind-data-only-if-form-is-submitted works!\'',
      inject([BindDataOnlyIfFormIsSubmittedAppComponent], (app: BindDataOnlyIfFormIsSubmittedAppComponent) => {
    expect(app.title).toEqual('bind-data-only-if-form-is-submitted works!');
  }));
});
