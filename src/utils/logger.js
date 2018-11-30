import Vue from 'vue';

const TYPE_LOG = 'log';
const TYPE_INFO = 'info';
const TYPE_WARN = 'warn';
const TYPE_ERROR = 'error';

function isProduction() {
  return Vue.config.productionTip;
}

function message(type, ...args) {
  if (!isProduction()) {
    /* eslint-disable no-console */
    console.group(`[app ${type}]:`);
    console[type](...args);
    console.groupEnd();
    /* eslint-enable no-console */
  }
}

export function log(...args) {
  message(TYPE_LOG, ...args);
}

export function info(...args) {
  message(TYPE_INFO, ...args);
}

export function warn(...args) {
  message(TYPE_WARN, ...args);
}

export function error(...args) {
  message(TYPE_ERROR, ...args);
}
