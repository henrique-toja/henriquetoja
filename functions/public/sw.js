const CACHE_NAME = 'henrique-toja-app-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/debate.html',
    '/tests.js',
    '/manifest.json',
    '/icons/icon-192x192.png',
    '/icons/icon-512x512.png',
    '/assets/background.jpg',
    '/assets/logo.svg',
    '/css/style.css',
    'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap'
];

// Instala o Service Worker e armazena os assets em cache
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

// Intercepta as requisições e serve os assets do cache primeiro
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});