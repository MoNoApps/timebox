import { TimetestPage } from './app.po';

describe('timetest App', function() {
  let page: TimetestPage;

  beforeEach(() => {
    page = new TimetestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
