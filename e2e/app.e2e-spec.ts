import { Celebrity.FashionPage } from './app.po';

describe('celebrity.fashion App', () => {
  let page: Celebrity.FashionPage;

  beforeEach(() => {
    page = new Celebrity.FashionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
