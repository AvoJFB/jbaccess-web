import { JbaccessWebPage } from './app.po';

describe('jbaccess-web App', () => {
  let page: JbaccessWebPage;

  beforeEach(() => {
    page = new JbaccessWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
