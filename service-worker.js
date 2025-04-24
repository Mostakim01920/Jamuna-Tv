self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open('static').then(function (cache) {
      return cache.addAll(['./']);
    })
  );
});

self.addEventListener('fetch', function (e) {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
