import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import storeConfig from '../src/store/index'
import { cloneDeep } from 'lodash'

test('test current state of working directory value', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  const store = new Vuex.Store(cloneDeep(storeConfig))
  expect(store.state.workingDir).toBe("")
})

test('test a change to the working dir', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  const store = new Vuex.Store(cloneDeep(storeConfig))
  store.commit('updateWorkingDir',"test");
  expect(store.state.workingDir).toBe("test")
})
