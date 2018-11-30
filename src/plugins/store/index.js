import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

Vue.use(Vuex);

const appStore = new Vuex.Store({
  strict: !IS_PRODUCTION,
  state: {},
  mutations: {},
  actions: {},
  plugins: !IS_PRODUCTION ? [createLogger()] : [],
});

// sync import modules
// appStore.registerModule('ApplicationsModule', ApplicationsModule);
// appStore.registerModule('PlatformSelectionModule', PlatformSelectionModule);

// async import modules
// import('./modules/Applications').then(module => {
//   appStore.registerModule('ApplicationsModule', module.default || module);
// });

export default appStore;
