import importAsync from './importAsync';

import './module';

import './index.css';

setTimeout(() => {
  // Works fine: only one <link> added into `index.html`.
  // import('./async');

  // Additional `async.*.css` added into `index.html`
  importAsync();
}, 1000);
