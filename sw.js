const staticCacheName = 'site-static';

const assets = [
    '/',
    '/index.html',
    '/assets/js/app.js',
    '/assets/script.js',
    '/assets/style.css',
    '/assets/icons/icon-512.png',
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap',
];

self.addEventListener('install', (e) => {
    // console.log('sw has been installed', e);
    e.waitUntil(
        caches.open(staticCacheName).then((cache) => {
            console.log('Caching shell assets');
            cache.addAll(assets);
        })
    );
});

self.addEventListener('activate', (e) => {
    // console.log('sw has been activated', e);
});

self.addEventListener('fetch', (e) => {
    // console.log('fetch event triggered', e);
});
