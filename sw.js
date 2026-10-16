const CACHE_NAME = "scores-shell-3afca7b6d965";
const INDEX_PATH = "/scores/index.html";
const PRECACHE = [
  "/scores/LICENSES/Apache-2.0.txt",
  "/scores/LICENSES/Lucide-ISC.txt",
  "/scores/LICENSES/OFL-1.1.txt",
  "/scores/LICENSES/React-MIT.txt",
  "/scores/LICENSES/Special-Elite-METADATA.pb",
  "/scores/LICENSES/Vite-LICENSE.md",
  "/scores/THIRD_PARTY_NOTICES.md",
  "/scores/assets/index-C4AuzeWh.js",
  "/scores/assets/index-DqOE8oqZ.css",
  "/scores/assets/water-yam-base-paper.webp",
  "/scores/assets/water-yam-paper-sheet-material.webp",
  "/scores/assets/water-yam-ruled-card-v2.webp",
  "/scores/assets/water-yam-score-card-material-fit.webp",
  "/scores/assets/water-yam-tab-exhibit-material-fit.webp",
  "/scores/assets/water-yam-tab-fiber.webp",
  "/scores/assets/water-yam-tab-notebook-material-fit.webp",
  "/scores/assets/water-yam-tab-primary-material.webp",
  "/scores/assets/water-yam-tab-secondary-material.webp",
  "/scores/fonts/courier-prime-400.ttf",
  "/scores/fonts/courier-prime-700.ttf",
  "/scores/fonts/material-symbols-outlined.woff2",
  "/scores/fonts/special-elite-400.ttf",
  "/scores/icons/apple-touch-icon.png",
  "/scores/icons/favicon-32.png",
  "/scores/icons/icon-192.png",
  "/scores/icons/icon-512.png",
  "/scores/index.html",
  "/scores/manifest.webmanifest"
];
const PRECACHE_URLS = new Set(PRECACHE.map((path) => new URL(path, self.location.origin).href));

async function cacheResponse(key, response) {
  try {
    const cache = await caches.open(CACHE_NAME);
    await cache.put(key, response);
  } catch {
    // A cache write must not make an otherwise available response fail.
  }
}

async function fetchAndCache(request, cacheKey = request) {
  const response = await fetch(request);
  if (response.ok) await cacheResponse(cacheKey, response.clone());
  return response;
}

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const previousCaches = (await caches.keys()).filter((key) => key.startsWith("scores-shell-") && key !== CACHE_NAME);
    await Promise.all(previousCaches.map((key) => caches.delete(key)));
    await self.clients.claim();
    // Notebook databases are independent and never deleted with cached assets.
    if (previousCaches.length) {
      const clients = await self.clients.matchAll({ type: "window" });
      for (const client of clients.filter((client) => client.url.startsWith(self.registration.scope))) {
        client.postMessage({ type: "scores-shell-updated" });
      }
    }
  })());
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    const responsePromise = fetchAndCache(request, INDEX_PATH)
      .catch(() => caches.match(INDEX_PATH));
    event.respondWith(responsePromise);
    event.waitUntil(responsePromise.then(() => undefined, () => undefined));
    return;
  }

  if (!PRECACHE_URLS.has(url.href)) return;

  const responsePromise = caches.match(request)
    .then((cached) => cached || fetchAndCache(request));
  event.respondWith(responsePromise);
  event.waitUntil(responsePromise.then(() => undefined, () => undefined));
});
