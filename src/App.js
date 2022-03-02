/* eslint-disable no-unused-expressions */

import './App.css';
import * as THREE from "three"
// import SkyMap from "./Components And Files/arid_rt.jpg"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import O1 from "./Components And Files/Textures/Cube Maps/penguins (21)/meadow_bk.jpg"
import O2 from "./Components And Files/Textures/Cube Maps/penguins (21)/meadow_ft.jpg"
import O3 from "./Components And Files/Textures/Cube Maps/penguins (21)/meadow_up.jpg"
import O4 from "./Components And Files/Textures/Cube Maps/penguins (21)/meadow_dn.jpg"
import O5 from "./Components And Files/Textures/Cube Maps/penguins (21)/meadow_lf.jpg"
import O6 from "./Components And Files/Textures/Cube Maps/penguins (21)/meadow_rt.jpg"
function Main() {
  var
    scene, camera, renderer
  var Appended = false
  // (function () {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 2000)
  camera.position.z += 30
  var GrGeometry = new THREE.BoxBufferGeometry(10, 10, 10, 10, 10, 10)
  // var Mater = new THREE.ShaderMaterial({
  //   uniforms: {
  //     time: { value: 0 }
  //   },
  //   vertexShader: `
  //   uniform float time;
  //   void main() {
  //   vec3 newposition = position;
  //   newposition.z += cos(uv.x + uv.y + time);
  //   // newposition.z += sin(newposition.x +  time);
  //   gl_Position = projectionMatrix * modelViewMatrix * vec4(newposition, 1.0 );
  //   }
  //   `,
  //   fragmentShader: `
  // void main() {
  //     gl_FragColor = vec4(0,0,1,1);
  // }`,
  //   wireframe: true
  // })

  // })() 
  var loader = new THREE.CubeTextureLoader()
  // loader.setPath("./Components And Files/Textures/Cube Maps/penguins (2)")
  var texture = [
    O1, O2, O3, O4, O5, O6
  ]
  var Ground = new THREE.Mesh(GrGeometry, new THREE.MeshBasicMaterial({
    envMap: loader.load(texture),
    side: THREE.DoubleSide
  }))

    //  scene.add(Ground)
  scene.background = loader.load(texture)
   
    
    
    renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.domElement.setAttribute('id', "canvas")
    if (Appended === false && Appended === false) {
    Appended = true
    document.body.appendChild(renderer.domElement)
    // document.getElementById('canvas').remove()
  }
  var controls = new OrbitControls(camera, renderer.domElement)
  function Animation() {
    requestAnimationFrame(Animation)
    Ground.rotation.x += 0.01
    Ground.rotation.y += 0.01
    Ground.rotation.z += 0.01
    // camera.rotation.y += 0.0025
    // Mater.uniforms.time.value += 0.01
    renderer.render(scene, camera)
  }
  Animation()
  return (
    <>
      {/* <SignUp/> */}
    </>
  )


}
export default Main;


