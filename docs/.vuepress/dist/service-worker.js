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
    "revision": "5a3f2dd44e7ad1ceab7dce60cca91ce5"
  },
  {
    "url": "assets/css/0.styles.90cad421.css",
    "revision": "d7c43bf16fcaf6b89e0f844c0f672834"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.26f21f38.js",
    "revision": "97ae91dc49effb9283d688299e336f78"
  },
  {
    "url": "assets/js/11.8e373b9a.js",
    "revision": "59257e429098c06cbc11793c388f792e"
  },
  {
    "url": "assets/js/12.63803996.js",
    "revision": "deb229b49600afd6d6796b8b3d823cb9"
  },
  {
    "url": "assets/js/13.4e194037.js",
    "revision": "39acb5e0739eb2f329752de49f70b72f"
  },
  {
    "url": "assets/js/14.9f386518.js",
    "revision": "b1f128a09f86168dbfde603124ef4b55"
  },
  {
    "url": "assets/js/15.c22a62ee.js",
    "revision": "3d22c06f295b4962c1abd4f96feaeca7"
  },
  {
    "url": "assets/js/16.66cd2221.js",
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
    "url": "assets/js/3.dce6e9d3.js",
    "revision": "7011fadfb982644658113ebc4ca4db05"
  },
  {
    "url": "assets/js/4.654d0c3b.js",
    "revision": "4db6744a971b34d382b633da0b93f274"
  },
  {
    "url": "assets/js/5.c5183407.js",
    "revision": "43e1ad9689e0745595d6ca7b7117d8f4"
  },
  {
    "url": "assets/js/6.261c745c.js",
    "revision": "7f5b8909ec2c9bf6c94440390f982d49"
  },
  {
    "url": "assets/js/7.74fa504e.js",
    "revision": "6c97c3898bd9a4c07233dcefcaf657ae"
  },
  {
    "url": "assets/js/8.29993ef8.js",
    "revision": "e3fd20debffe20d9433832b923cf42e9"
  },
  {
    "url": "assets/js/9.a6b8b708.js",
    "revision": "e7ac2eb5f612e31e10f13ac4571c864a"
  },
  {
    "url": "assets/js/app.f2cf0074.js",
    "revision": "64f7daea4f427abe2b5c9d7ba547896f"
  },
  {
    "url": "form/cascade.html",
    "revision": "0ccf6f4474c10a628cc6dfd8920cf211"
  },
  {
    "url": "form/checkbox.html",
    "revision": "470b22570c8cdba5fc2faba1d9602e90"
  },
  {
    "url": "form/distPicker.html",
    "revision": "2909ca964910481db26ef3654c77ca94"
  },
  {
    "url": "form/doubleDate.html",
    "revision": "5917beec773267e78bcca8b19691b178"
  },
  {
    "url": "form/form.html",
    "revision": "1d4961cb90cdc73c6a035dab37902cdd"
  },
  {
    "url": "form/image.html",
    "revision": "74c23c52644ec6d0dcb912f2aba22215"
  },
  {
    "url": "form/index.html",
    "revision": "bf6eeb21bfe54d3f1f89fb395c91b64f"
  },
  {
    "url": "form/input.html",
    "revision": "49077ca3a273206a1ba6464133e09519"
  },
  {
    "url": "form/inputRange.html",
    "revision": "1fa5e6a4dd8dd79e71a854672e5a19f4"
  },
  {
    "url": "form/quill.html",
    "revision": "f121d969a22cf9b54d4d56023f26e1d4"
  },
  {
    "url": "form/radio.html",
    "revision": "a73d577e51997d13c69cebf747da6d97"
  },
  {
    "url": "form/radioAndInput.html",
    "revision": "3451bda514176d55590d60bd86c0202b"
  },
  {
    "url": "form/select.html",
    "revision": "732e1afa59c78c0cdbf1b4a791243dc5"
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
    "revision": "7e06e58290b25b85794694da7a8e8e7a"
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
