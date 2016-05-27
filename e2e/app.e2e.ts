import { BindDataOnlyIfFormIsSubmittedPage } from './app.po';

describe('bind-data-only-if-form-is-submitted App', function() {
  let page: BindDataOnlyIfFormIsSubmittedPage;

  beforeEach(() => {
    page = new BindDataOnlyIfFormIsSubmittedPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('bind-data-only-if-form-is-submitted works!');
  });
});
