const { offlineFallback, warmStrategyCache } = require('workbox-recipes');
const { CacheFirst } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');

precacheAndRoute(self.__WB_MANIFEST);

const pageCache = new CacheFirst({
  cacheName: 'page-cache',
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60,
    }),
  ],
});

warmStrategyCache({
  urls: ['/index.html', '/'],
  strategy: pageCache,
});

registerRoute(({ request }) => request.mode === 'navigate', pageCache);

// TODO: Implement asset caching

// Define the Workbox service worker
workbox.routing.registerRoute(
  // Cache CSS stylesheets
  ({ request }) => request.destination === 'style',
  new workbox.strategies.CacheFirst()
);

workbox.routing.registerRoute(
  // Cache JavaScript files
  ({ request }) => request.destination === 'script',
  new workbox.strategies.StaleWhileRevalidate()
);

workbox.routing.registerRoute(
  // Cache images
  ({ request }) => request.destination === 'image',
  new workbox.strategies.CacheFirst()
);

// Cache other assets using a custom strategy
workbox.routing.registerRoute(
  // Cache other assets
  ({ request }) => request.destination !== 'style' && request.destination !== 'script' && request.destination !== 'image',
  new workbox.strategies.StaleWhileRevalidate()
);

registerRoute();
