import { newSpecPage } from '@stencil/core/testing';
import { RapidAmbulanceWlApp } from '../rapid-ambulance-wl-app';

describe('rapid-ambulance-wl-app', () => {
  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [RapidAmbulanceWlApp],
      html: `<rapid-ambulance-wl-app base-path="/"></rapid-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget();
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual('rapid-ambulance-wl-editor');
  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [RapidAmbulanceWlApp],
      html: `<rapid-ambulance-wl-app base-path="/ambulance-wl/"></rapid-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget();
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual('rapid-ambulance-wl-list');
  });
});
