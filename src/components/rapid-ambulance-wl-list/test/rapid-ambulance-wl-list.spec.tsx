import { newSpecPage } from '@stencil/core/testing';
import { RapidAmbulanceWlList } from '../rapid-ambulance-wl-list';

describe('rapid-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RapidAmbulanceWlList],
      html: `<rapid-ambulance-wl-list></rapid-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <rapid-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rapid-ambulance-wl-list>
    `);
  });
});
