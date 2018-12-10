import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
//import { __createMocks as createStoreMocks } from '../src/store';

import App from '../src/renderer/App';

// Tell Jest to use the mock
// implementation of the store.
jest.mock('../src/store');

const localVue = createLocalVue();

localVue.use(Vuex);

describe('App Vue', () => {
  //let storeMocks;
  let wrapper;

  beforeEach(() => {
    // Create a fresh store and wrapper
    // instance for every test case.
    //storeMocks = createStoreMocks();
    wrapper = shallowMount(App, {
      localVue
    });
  });

  test('It should render the correct div.', () => {
    expect(wrapper.html()).toContain('<div id="app">')
  });
})