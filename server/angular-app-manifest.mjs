
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://maxim2010max.github.io/keeper2/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/keeper2"
  },
  {
    "renderMode": 2,
    "route": "/keeper2/todo"
  },
  {
    "renderMode": 2,
    "route": "/keeper2/diary"
  },
  {
    "renderMode": 2,
    "route": "/keeper2/password"
  },
  {
    "renderMode": 2,
    "route": "/keeper2/info"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 8052, hash: 'cb98dcdcc3af05bc27dc8a72b0b0812fce47bf191e1a573777f8a1a558d730fb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7772, hash: '6b5db27762c5a0aef9b495d7b8e15cbde07d9c4753347468a205f66d59b4919d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'todo/index.html': {size: 13465, hash: 'b29559620e5b8c44baae9add8cbe8d6bf1da25ac6ab39d7b2979f25a906514f0', text: () => import('./assets-chunks/todo_index_html.mjs').then(m => m.default)},
    'password/index.html': {size: 13686, hash: '310f30f2ac2ab811a9ec3fe71d20fbca97b3880253aaf2cc15e6103f925bad32', text: () => import('./assets-chunks/password_index_html.mjs').then(m => m.default)},
    'diary/index.html': {size: 11062, hash: '71c27b383ce313a655d883494f2aa757bafe61784910290955b3eb96d59afffe', text: () => import('./assets-chunks/diary_index_html.mjs').then(m => m.default)},
    'index.html': {size: 16002, hash: '026294652d442d52f06e96934267b8674374acb26a07b9a17c04d225c6b75dae', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'info/index.html': {size: 16986, hash: 'b0426276fb7440c5834d18dd4c619720a80c687aa4d82214c177daf1b21cc0a6', text: () => import('./assets-chunks/info_index_html.mjs').then(m => m.default)},
    'styles-F2H375JK.css': {size: 918, hash: '4dVODkLUjNE', text: () => import('./assets-chunks/styles-F2H375JK_css.mjs').then(m => m.default)}
  },
};
