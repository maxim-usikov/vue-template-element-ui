import io from 'socket.io-client';

function makeProvider(client, host) {
  const connection = io(host);
  const provider = client(connection, { timeout: 20000 });

  return provider;
}

export default makeProvider;
