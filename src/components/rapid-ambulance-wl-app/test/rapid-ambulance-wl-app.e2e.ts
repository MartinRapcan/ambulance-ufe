import { newE2EPage } from '@stencil/core/testing';

describe('rapid-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rapid-ambulance-wl-app></rapid-ambulance-wl-app>');

    const element = await page.find('rapid-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
