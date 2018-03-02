const STATIC_FILES = [
  '/',
  '/index.html',
  'offline.html',
  '/src/js/app.js',
  '/src/js/posts.js',
  '/src/js/material.min.js',
  '/src/css/app.css',
  'https://fonts.googleapis.com/css?family=Roboto:400,700',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  'https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.3.0/material.deep_purple-orange.min.css'
];

self.addEventListener('install', (event) => {
  console.log('SW - Instalando service worker...', event);
  caches.open('static').then((cache) => {
    console.log('SW - Cacheando arquivos staticos');
    cache.addAll(STATIC_FILES);
  });
});

self.addEventListener('activate', (event) => {
  console.log('SW - Ativando service worker...', event);
  return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      } else {
        return fetch(event.request)
          .then((res) => {
            return caches.open('dynamic').then((cache) => {
              cache.put(event.request.url, res.clone());
              return res;
            });
          })
          .catch((err) => {
            return caches.open('static').then((cache) => {
              return cache.match('/offline.html');
            });
          });
      }
    })
  );
});
