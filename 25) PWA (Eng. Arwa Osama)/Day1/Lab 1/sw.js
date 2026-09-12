const CACHE_NAME = "pwa-cache-v1";

const FILES_TO_CACHE = [
    "./",
    "./index.html",
    "./script.js",
    "./myScript.js",
    "./offline.html",
    "./404.html",
    "./manifest.json"
];

// =====================
// Install
// =====================

self.addEventListener("install", event => {

    event.waitUntil(

        caches.open(CACHE_NAME)
            .then(cache => {

                console.log("Caching files");

                return cache.addAll(FILES_TO_CACHE);

            })

    );

});

// =====================
// Activate
// =====================

self.addEventListener("activate", event => {

    event.waitUntil(

        caches.keys()
            .then(keys => {

                return Promise.all(

                    keys.map(key => {

                        if (key !== CACHE_NAME) {

                            return caches.delete(key);

                        }

                    })

                );

            })

    );

});

// =====================
// Fetch
// =====================

self.addEventListener("fetch", event => {

    event.respondWith(

        caches.match(event.request)

            .then(cacheResponse => {

                if (cacheResponse) {

                    return cacheResponse;

                }

                return fetch(event.request)

                    .then(networkResponse => {

                        if (networkResponse.status === 404) {

                            return caches.match("./404.html");

                        }

                        return caches.open(CACHE_NAME)

                            .then(cache => {

                                cache.put(
                                    event.request,
                                    networkResponse.clone()
                                );

                                return networkResponse;

                            });

                    })

                    .catch(() => {

                        return caches.match("./offline.html");

                    });

            })

    );

});