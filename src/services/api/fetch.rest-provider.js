function makeProvider(client, host) {
  // TODO: maybe switch or add axios transport?
  const connection = window.fetch;
  const transports = client(host);
  const provider = transports.fetch(connection);

  return provider;
}

export default makeProvider;
