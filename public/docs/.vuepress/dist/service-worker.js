/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "cc58d177efbab381ef5b42e908151fac"
  },
  {
    "url": "assets/css/0.styles.ee179520.css",
    "revision": "9ea15421c257b7c2e72a5668b435969f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c31e7ab0.js",
    "revision": "97ae91dc49effb9283d688299e336f78"
  },
  {
    "url": "assets/js/11.5a96d243.js",
    "revision": "59257e429098c06cbc11793c388f792e"
  },
  {
    "url": "assets/js/12.94701333.js",
    "revision": "deb229b49600afd6d6796b8b3d823cb9"
  },
  {
    "url": "assets/js/13.a0544705.js",
    "revision": "39acb5e0739eb2f329752de49f70b72f"
  },
  {
    "url": "assets/js/14.244351a8.js",
    "revision": "b1f128a09f86168dbfde603124ef4b55"
  },
  {
    "url": "assets/js/15.113c881f.js",
    "revision": "3d22c06f295b4962c1abd4f96feaeca7"
  },
  {
    "url": "assets/js/16.7652da8c.js",
    "revision": "83a80a058668e56ed138210bc0d9e28d"
  },
  {
    "url": "assets/js/17.1875ead7.js",
    "revision": "3c1f71064473c072d2af4af1080c0002"
  },
  {
    "url": "assets/js/2.99b0c77e.js",
    "revision": "c8aa65e23c2657533e695dcca03f7b8f"
  },
  {
    "url": "assets/js/3.b3fb0750.js",
    "revision": "7011fadfb982644658113ebc4ca4db05"
  },
  {
    "url": "assets/js/4.2babbe0f.js",
    "revision": "4db6744a971b34d382b633da0b93f274"
  },
  {
    "url": "assets/js/5.29a369a6.js",
    "revision": "43e1ad9689e0745595d6ca7b7117d8f4"
  },
  {
    "url": "assets/js/6.c0fa56b5.js",
    "revision": "7f5b8909ec2c9bf6c94440390f982d49"
  },
  {
    "url": "assets/js/7.13ec8d6d.js",
    "revision": "6c97c3898bd9a4c07233dcefcaf657ae"
  },
  {
    "url": "assets/js/8.1185355c.js",
    "revision": "e3fd20debffe20d9433832b923cf42e9"
  },
  {
    "url": "assets/js/9.8938d1f7.js",
    "revision": "e7ac2eb5f612e31e10f13ac4571c864a"
  },
  {
    "url": "assets/js/app.9a8bf14a.js",
    "revision": "52d672209901e04984c2a59b56696fef"
  },
  {
    "url": "form/cascade.html",
    "revision": "aa2ad5e2281e6ee114374a5603a0384c"
  },
  {
    "url": "form/checkbox.html",
    "revision": "0b5ded8c203ed87065319fc580b523bd"
  },
  {
    "url": "form/distPicker.html",
    "revision": "2db8db3478e5075412019f542df436b1"
  },
  {
    "url": "form/doubleDate.html",
    "revision": "6f00f1450125c9fdd4e3f37311e70451"
  },
  {
    "url": "form/form.html",
    "revision": "756ce52bf45dc66533b77aff7c5e826b"
  },
  {
    "url": "form/image.html",
    "revision": "ea36d6926969b6f1627cb26078c1fd51"
  },
  {
    "url": "form/index.html",
    "revision": "7e19d215b195608a26d239a19a28e20d"
  },
  {
    "url": "form/input.html",
    "revision": "b4fafc58b846b6bfd32c59c4f893d81d"
  },
  {
    "url": "form/inputRange.html",
    "revision": "8f915cadcbc47fa0f039a520d61bacd0"
  },
  {
    "url": "form/quill.html",
    "revision": "26087f5468e0b1ed92b54c0a701bf5ba"
  },
  {
    "url": "form/radio.html",
    "revision": "ea3e3dd3d6e3913228f92d01fbf7d810"
  },
  {
    "url": "form/radioAndInput.html",
    "revision": "5ff9594a36ad9d7af3b5da9532396294"
  },
  {
    "url": "form/select.html",
    "revision": "b3063dc2e8b9824b8cfc78a0703375de"
  },
  {
    "url": "hero.png",
    "revision": "1d6b7de393828cc6e531e4d24f231b4a"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "images/cascade.png",
    "revision": "f4f0e131d982c91f1e42c4b666b3c38f"
  },
  {
    "url": "images/checkbox.png",
    "revision": "d7d98c2801d46ea12f4d7196abd8cb1b"
  },
  {
    "url": "images/distPicker.png",
    "revision": "5f81ac971977d382776efe7f68344f0d"
  },
  {
    "url": "images/doubleDate.png",
    "revision": "15e0184696ebd870a384766ecc8b5bab"
  },
  {
    "url": "images/input.png",
    "revision": "2acd62ada328b48eedb9dc1b6c418790"
  },
  {
    "url": "images/inputRange.png",
    "revision": "0f99a0f12d903ce62dd4c21a7a08767c"
  },
  {
    "url": "images/radio.png",
    "revision": "092006d64a59d43f35616cfc7e9027f8"
  },
  {
    "url": "images/radioAndInput.png",
    "revision": "4adcfcc3d51324389c2d5abf41a1f1a2"
  },
  {
    "url": "images/select.png",
    "revision": "f591f3ad025bbd6110b3cd0c2e2cf124"
  },
  {
    "url": "index.html",
    "revision": "523fbbbd883493a1999813fdd70a07f0"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
