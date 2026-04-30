const cacheName = "kids-portuguese-cache-v1";
const filesToCache = [
  "/index.html",
  "/style.css",
  "/main.js",
  "/manifest.json",
  "/images/app-icon-192.png",
  "/images/app-icon-512.png"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(filesToCache))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
