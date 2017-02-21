# offline-first-example
Basic offline first example intended for use on a static web app on iOS that includes HTML5 video.

This example uses `Webpack` & `Webpack Offline Plugin` which uses `Service Worker` and `Application Cache` as a fallback.

The video is loaded via the (polyfilled) `Fetch API` as an [Array Buffer](https://developer.mozilla.org/en-US/docs/Web/API/Body/arrayBuffer) because storing blobs in IndexedDB is not supported in iOS. Since we can't assign video sources to Array Buffers, [we first convert it to blob.](http://stackoverflow.com/questions/40393488/mobile-safari-10-indexeddb-blobs/40625816#40625816)

This is intended to be a bare bones example. For more a (much) more advanced offline first example, take a look at [Pokedex.org](http://www.pocketjavascript.com/blog/2015/11/23/introducing-pokedex-org).
