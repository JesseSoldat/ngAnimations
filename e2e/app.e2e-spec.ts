import { JAnimePage } from './app.po';

describe('j-anime App', () => {
  let page: JAnimePage;

  beforeEach(() => {
    page = new JAnimePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
