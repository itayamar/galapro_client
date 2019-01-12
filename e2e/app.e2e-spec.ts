import { GalaProPage } from './app.po';

describe('gala-pro App', function() {
  let page: GalaProPage;

  beforeEach(() => {
    page = new GalaProPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
