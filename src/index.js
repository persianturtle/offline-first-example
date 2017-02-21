import 'babel-polyfill'
import 'whatwg-fetch'
import idb from 'idb-keyval'
import OfflinePlugin from 'offline-plugin/runtime'

OfflinePlugin.install()

const video = document.querySelector('video')

fetch('/offline-first-example/dist/video/video.mp4')
.then(response => response.arrayBuffer())
.then(buffer => {
  idb.set('video', buffer).then(setVideoSourceFromBuffer(video, buffer))
})
.catch(error => {
  idb.get('video').then(buffer => setVideoSourceFromBuffer(video, buffer))
  console.log('Oh no!', error)
})

function setVideoSourceFromBuffer(video, buffer) {
  let blob = new Blob([buffer], { type: 'video/mp4'})
  video.src = window.URL.createObjectURL(blob)
}
