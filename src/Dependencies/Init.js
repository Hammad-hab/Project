import * as THREE from "three"

// import Physijs from 'ph'
// import worker from 'wo'
// import loader from 'worker'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
function Init() {
  var
    scene, camera, renderer, controls
 
  var Appended = false
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 5000)
  camera.position.z += 900
  camera.position.y += 300
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.domElement.setAttribute('id', "canvas")
  if (Appended === false && Appended === false) {
    Appended = true
    document.body.appendChild(renderer.domElement)
  }
  controls = new OrbitControls(camera, renderer.domElement)
  scene.fog = new THREE.FogExp2('#808080', 1.00079)
  // scene.fog = new THREE.Fog('rgb(0,0,0)', 1000, 5000)
  // new THREE.FogExp2()
  // scene.remove()
  return {
    _scene: function () {
      return scene
    },
    _camera: function () {
      return camera
    },
    _renderer: function () {
      return renderer
    }
  }
}

export default Init