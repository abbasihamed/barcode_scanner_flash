'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "6af494da773441f62858f0535d6d0ad2",
".git/config": "edcee071fd956f6ce6ac7fdd497275ec",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f2ad16c3a8d880a70a63028415b6901f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "91a65320d51925a244e06511acef7325",
".git/logs/refs/heads/main": "91a65320d51925a244e06511acef7325",
".git/logs/refs/remotes/origin/main": "0b27c9d91d565efe5f9a29ef375bc241",
".git/objects/14/d5f8727902e23d0f9a38c5a1407fba90c51c5f": "567679120f147a0746ceaf699bd5096d",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2d/31e07511a64bd2bcdd0c2f6f51840748203dc4": "e03966c0141d8c2de1a75d273ba80dc3",
".git/objects/33/f836f8c85633a88060a1137126378ad3802f64": "62456749371741a6029a2925222992ca",
".git/objects/38/a40e5b8117633a3f598eba169939ba86a60cb1": "b995d9136c051fc21d2781bf62e97abc",
".git/objects/3a/06a915d9de039958d1cc8a37f07cf6ab5b71fc": "a940799cde1a4ca15db981b113357876",
".git/objects/3a/f7de70477148be78ae142719edfb780c55a0d0": "d805b05023cfc62cb8e9cc8a37258f3c",
".git/objects/3e/a90909ab527981ac1982c2aeeaf8296ad8f404": "37f707f46ad170554a91e99818d719b1",
".git/objects/3f/5066e0d998219448ef61cf9824910b2cf1a9c2": "d45724028b582f71bc02adb602520b72",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/51/a4abb65bf2f865c4a6a0de03aca34dd41106b3": "7996952c2143f1c698bfd49a1d69fd71",
".git/objects/55/17e2f85950a51be6f0a88926aea7e245724c43": "ef0f56f6b0f69dcd5238cc7c27f89e34",
".git/objects/66/d0e8e47a9dfbc555190340b11c248ba30e58d8": "ada33f9c82e89141715afb99c3eda478",
".git/objects/6a/39e822504a1654aa9802e2cbd13fba0f3961b3": "587869cce66e0fa76cf35d200ea7fc46",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7d/e91ebdfd317dac028d52ef86929ba0eab7122f": "d6715f2160b9a299b1a64845c640b743",
".git/objects/80/d6d9d21a55ac28a4f50d1aef2263a89efa235a": "ed2736cea4da7dbb83a71b362265b9c1",
".git/objects/83/cae69f210a50440255b2133f065fcb9f7857d7": "1469815d76b085d82318a1978d9366de",
".git/objects/85/af2e882f2266398facb59532c1801a4988fd70": "18e57425fc73bee1429da55ffbbbbfaa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/3e7c17e26a00f313a4d204bcc08bca25d7bea0": "5f2f3123ede76b2cc8022c32c2150b78",
".git/objects/91/722159026579ffe0501fdc229a75569b4076e1": "4590cc600a56490caced3a33349134a8",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9b/1ec3c9f63b52bded28c6dd78176936d0e9454c": "ca5cbb1fbe9a5948317703053c025b15",
".git/objects/9f/fc4d40afb013eb043e18911361655db030e239": "a01e5c765ea37159114ab8b1d80fc6df",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b4/af4194ea06244816217f79dd9c17de6fdca72b": "a442f873861bd5d63f51ac03210c481a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c8/a569d0ce3ee22d625992f16addc5e70e657e40": "439b2dac870b5edc3d3058bfc85f6d50",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/ff5be72139f88bf1048fbc8f74e6efd26c49ab": "b9d01a31d1ca1ce6a620fb19501f5f21",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e1/4a482d929b976ff9b3030c65e038bcc7091761": "99f8ec042e62a90461a1aa59729ad4bc",
".git/objects/e2/58f3e9da5f20f204a6351e33b76c0eaaa4cf47": "77051b972e6733c1ef3b61d5e7ddf121",
".git/objects/e5/22f608e7733a796d8f9b73372640971e07da0a": "88442fb140e4ea734cbbdffcad2c7402",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/e2221cdfe5f86cb0da5180ba1a4e92225e7cf1": "45d3e8f8b2cfd8e2f6bbc8bcfb949d76",
".git/objects/f9/dfc798b5f472bf8a618814260418609113e5bf": "2dda54dbc9e91b4f80d76c461e9ff822",
".git/objects/fd/b83a1d1557bc737089178e9d5ca55bc8f65fe4": "b7b9afb52acecf3ab488a29b50ee84a8",
".git/refs/heads/main": "3df783c89d86502d9c6dcdba1ba2686b",
".git/refs/remotes/origin/main": "3df783c89d86502d9c6dcdba1ba2686b",
"assets/AssetManifest.json": "e03700b8d2e951473c9f1d78744351ae",
"assets/assets/barcode.html": "a6ab2f4572e497bcc8736295be77486b",
"assets/assets/html5-qrcode.min.js": "baa7a49535fe42d140ba0f0cb8248e39",
"assets/barcode.html": "6fbba6b6c767280d9c8d8eff14bf2ae4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/html5-qrcode.min.js": "baa7a49535fe42d140ba0f0cb8248e39",
"assets/NOTICES": "8f2b7ab052dfcf4ace9901a3769cab3f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "df2e74b5c1f957a4afde3ea0a99d263a",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e3d292125248741a49150a9bea31ee7c",
"/": "e3d292125248741a49150a9bea31ee7c",
"main.dart.js": "e5737365b1de5e33dec4d48cf7f06dde",
"manifest.json": "f5a4a969f3b6e3bef26f862ae1ddc7aa",
"version.json": "3b64309eaa71999eb25d308035df7b5a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
