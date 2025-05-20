const CACHE_NAME = "toja-pwa-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/assets/images/logo.webp",
  "/assets/images/logo.webp",
  // adicione outros assets críticos (css, js, fonts)
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});