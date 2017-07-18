import { SunstarAppPage } from './app.po';

describe('sunstar-app App', () => {
  let page: SunstarAppPage;

  beforeEach(() => {
    page = new SunstarAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
