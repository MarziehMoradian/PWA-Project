const CACHE_NAME = "version1";
const urlsToCache = ["index.html", "offline.html"];
const self = this;
//install serviceWorker
self.addEventListener('Install',(event) =>{
    event.waituntil(
        caches.open((CACHE_NAME).then((cache) => {
            console.log("opend cache");
            return cache.addAll(urlsToCache)
        }))
    )
})
//listen for Request
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
        .then(() => fetch(event.request))
        .catch(err => {
            caches.match("offline.html")
        })
    )
})

// Activate the serviceWorker
// Activate the serviceWorker
self.addEventListener("activate", (event) => {
    const cacheWhiteList = [];
    cacheWhiteList.push(CACHE_NAME);
  
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        Promise.all(
          cacheNames.map((cacheName) => {
            if (!cacheWhiteList.includes(cacheName)) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });