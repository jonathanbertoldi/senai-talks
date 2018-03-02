if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(() => console.log('Service Worker registrado com sucesso!'))
    .catch((err) => console.log('Erro ao registrar service worker', err));
}
