if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(() => console.log('Service Worker registrado'))
    .catch((err) => console.log('Erro registrando service worker', err));
}

