import { newSpecPage } from '@stencil/core/testing';
import { RapidAmbulanceWlList } from '../rapid-ambulance-wl-list';

describe('rapid-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RapidAmbulanceWlList],
      html: `<rapid-ambulance-wl-list></rapid-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as RapidAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length;

    const items = page.root.shadowRoot.querySelectorAll('md-list-item');
    expect(items.length).toEqual(expectedPatients);
  });
});
