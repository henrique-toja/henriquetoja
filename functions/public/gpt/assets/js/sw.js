const CACHE_NAME = "toja-pwa-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/assets/js/serviceworker.js",
  "/assets/js/header.js",
  "/assets/js/footer.js",
  "/assets/js/chat.js",
  "/assets/js/body.js",
  "/assets/js/database.js",
  "/assets/images/logo.webp",
  "/assets/images/henriquetoja.jpg",
  "/assets/css/style.css"
];

// Instala e faz cache dos arquivos
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Remove caches antigos ao atualizar SW
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => cacheName !== CACHE_NAME)
          .map(cacheName => caches.delete(cacheName))
      );
    })
  );
});

// Busca do cache ou da rede
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});