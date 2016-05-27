export class BindDataOnlyIfFormIsSubmittedPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('bind-data-only-if-form-is-submitted-app h1')).getText();
  }
}
