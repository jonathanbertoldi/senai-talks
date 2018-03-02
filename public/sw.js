self.addEventListener('install', event => {
  console.log('SW - Instalando service worker...', event);
})

self.addEventListener('activate', event => {
  console.log('SW - Ativando service worker...', event);
  return self.clients.claim();
})