var cacheName = 'measuresand';
var cacheFiles = ['./','./index.html','./css/style.css','./js/main.js'];

/* Start Service Worker and cache all content */
self.addEventListener('install',function(e) {
  e.waitUntil(
      caches.open(cacheName).then(function(cache){
        return cache.addAll(cacheFiles);
        });
      );
});

/* Serve cached content when offline */
self.addEventListener('fetch',function(e){
  e.respondWith(
  caches.match(e.request).then(function(response){
    return response || fetch(e.request);
    })
   );
 });
     
