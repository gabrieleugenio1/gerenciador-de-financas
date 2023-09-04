const CACHE_NAME = 'financas';
const urlsToCache = [
  './',
  './index.html',
  './styles.css',
  './scripts.js',
  './icons/logo.png',
  './icons/logo.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});

