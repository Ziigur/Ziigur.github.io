
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('cache_v1').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/favicon.ico'
      ]);
    })
  );
 });