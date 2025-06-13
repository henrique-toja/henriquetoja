const CACHE_NAME = 'personality-test-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
    '/manifest.json',
    'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap'
    // Adicione aqui o caminho para seus ícones se desejar
    // '/icons/icon-192x192.png',
    // '/icons/icon-512x512.png'
];

// Instala o Service Worker e armazena os assets em cache
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Cache aberto');
                return cache.addAll(urlsToCache);
            })
    );
});

// Intercepta as requisições e serve os assets do cache primeiro
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Se o recurso estiver no cache, retorna ele
                if (response) {
                    return response;
                }
                // Senão, faz a requisição à rede
                return fetch(event.request);
            })
    );
});
