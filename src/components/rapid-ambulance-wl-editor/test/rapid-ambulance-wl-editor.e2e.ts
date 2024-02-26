import { newE2EPage } from '@stencil/core/testing';

describe('rapid-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rapid-ambulance-wl-editor></rapid-ambulance-wl-editor>');

    const element = await page.find('rapid-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
