import { SkySpicaPage } from './app.po';

describe('sky-spica App', () => {
  let page: SkySpicaPage;

  beforeEach(() => {
    page = new SkySpicaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
