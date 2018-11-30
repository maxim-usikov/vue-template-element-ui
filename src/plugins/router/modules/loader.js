const CACHE = {};

// https://webpack.js.org/guides/dependency-management/#context-module-api
function importAll(r) {
  r.keys().forEach(key => {
    const module = r(key);
    if (module.default && Array.isArray(module.default)) {
      CACHE[key] = module;
    }
  });
}

importAll(require.context('./', true, /\/\d{2}_\S+\.js$/));

function routes() {
  return (
    Object.entries(CACHE)
      // eslint-disable-next-line no-unused-vars
      .map(([_, module]) => module.default)
      .reduce((prev, next) => (prev ? [...prev, ...next] : [...next]))
  );
}

function routeNames() {
  return (
    Object.entries(CACHE)
      // eslint-disable-next-line no-unused-vars
      .map(([_, module]) => {
        const m = { ...module };
        delete m.default;
        return m;
      })
      .reduce((prev, next) => (prev ? { ...prev, ...next } : next))
  );
}

export default {
  routeNames,
  routes,
};
