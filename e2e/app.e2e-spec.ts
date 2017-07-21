import { CvBootstrapPage } from './app.po';

describe('cv-bootstrap App', () => {
  let page: CvBootstrapPage;

  beforeEach(() => {
    page = new CvBootstrapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
