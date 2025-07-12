
export default {
  basePath: 'https://maxim2010max.github.io/keeper2',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
