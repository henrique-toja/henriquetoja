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