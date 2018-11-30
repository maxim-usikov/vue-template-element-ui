import feathers from '@feathersjs/client';
import makeSocketIoProvider from './socket.io-provider';
import makeFetchProvider from './fetch.rest-provider';

const {
  VUE_APP_FEATHERS_CLIENT_PROVIDER,
  VUE_APP_HOST_SOCKET_BACKEND,
  VUE_APP_HOST_REST_BACKEND,
} = process.env;

const { socketio, rest } = feathers;

const PROVIDER_SOCKET_IO = 'socket.io';
const PROVIDER_REST_FETCH = 'fetch';
const PROVIDERS = [PROVIDER_SOCKET_IO, PROVIDER_REST_FETCH];

let provider = () => {
  const available = PROVIDERS.map(str => `'${str}'`).join(', ');
  const message = `Bad provider: '${VUE_APP_FEATHERS_CLIENT_PROVIDER}'. Can be one of: ${available}.`;

  throw new Error(message);
};

switch (VUE_APP_FEATHERS_CLIENT_PROVIDER) {
  case PROVIDER_SOCKET_IO:
    provider = makeSocketIoProvider(socketio, VUE_APP_HOST_SOCKET_BACKEND);
    break;
  case PROVIDER_REST_FETCH:
    provider = makeFetchProvider(rest, VUE_APP_HOST_REST_BACKEND);
    break;
  default:
    break;
}

const client = feathers();
client.configure(provider, { timeout: 20000 });

export default client;
