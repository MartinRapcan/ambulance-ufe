import { newE2EPage } from '@stencil/core/testing';

describe('rapid-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rapid-ambulance-wl-list></rapid-ambulance-wl-list>');

    const element = await page.find('rapid-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
