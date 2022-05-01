self.addEventListener('install', (e) => {
    console.log('sw has been installed', e);
});

self.addEventListener('activate', (e) => {
    console.log('sw has been activated', e);
});
