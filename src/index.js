import 'babel-polyfill'
import 'whatwg-fetch'
import idb from 'idb-keyval'
import OfflinePlugin from 'offline-plugin/runtime'

OfflinePlugin.install()

idb.get('video')
.then(buffer => {
  if (!buffer) {
    return fetchVideo()
  }

  setVideoSourceFromBuffer(buffer)
})

function fetchVideo() {
  fetch('/offline-first-example/dist/video/video.mp4')
  .then(response => response.arrayBuffer())
  .then(buffer => {
    idb.set('video', buffer).then(() => {
      setVideoSourceFromBuffer(buffer)
    })
  })
}

function setVideoSourceFromBuffer(buffer) {
  const video = document.querySelector('video')
  let blob = new Blob([buffer], { type: 'video/mp4'})
  video.src = URL.createObjectURL(blob)
}
