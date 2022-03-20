/* eslint-disable no-unused-expressions */

import './App.css';
import * as three from "three"
import O1 from "./Components And Files/Textures/Cube Maps/penguins (18)/kenon_cloudbox_bk.png"
import O2 from "./Components And Files/Textures/Cube Maps/penguins (18)/kenon_cloudbox_ft.png"
import O3 from "./Components And Files/Textures/Cube Maps/penguins (18)/kenon_cloudbox_up.png"
import O4 from "./Components And Files/Textures/Cube Maps/penguins (18)/kenon_cloudbox_dn.png"
import O5 from "./Components And Files/Textures/Cube Maps/penguins (18)/kenon_cloudbox_lf.png"
import O6 from "./Components And Files/Textures/Cube Maps/penguins (18)/kenon_cloudbox_rt.png"
import Stats from 'three/examples/jsm/libs/stats.module.js';
import Listener from "./Dependencies/EventListeners"
import Character from "./Dependencies/Character"
import Init from "./Dependencies/Init"
import Town from "./Dependencies/Town"
import { FcInfo } from 'react-icons/fc'
import Light from './Dependencies/Lighting'
import Enemy from './Dependencies/Enemy'
import _func from './Dependencies/_func';
import Physijs from 'physijs-webpack'
import Worker from 'worker'
import process from 'process'
Physijs.scripts.worker = 'worker.js'
function Main() {
  var
    scene, camera, renderer
  var _return = Init()
 
  scene = new Physijs.Scene()
  renderer = _return._renderer()
  camera = _return._camera()
  // Creating the ground
  var THREE = {
    Vector3: three.Vector3








  }
  var GrGeometry = new three.BoxGeometry(2000, 100, 2000, 20, 20, 20)
  const Ground = new three.Mesh(GrGeometry, new three.MeshBasicMaterial({
    color: "rgb(255,255,255)",
    side: three.DoubleSide,
    // wireframe: true,
  }))
  function CollisonDectector(x1, x2, y1, y2, z1, z2) {
    var DistX = x1 - x2
    var DistY = y1 - y2
    return Math.sqrt(Math.pow(DistX, 2) + Math.pow(DistY, 2))
  }
  Ground.position.y -= 50
  const grid = new three.GridHelper(2000, 20, 0x000000, 0x000000);
  grid.material.opacity = 0.2;
  grid.material.transparent = true;
  const Posaxis = new three.AxesHelper(1000)
  const Negaxis = new three.AxesHelper(-1000)
  scene.add(Ground, grid, Posaxis, Negaxis)
  // Loading Cube Map 
  var loader = new three.CubeTextureLoader()
  var texture = [
    O1, O2, O3, O4, O5, O6
  ]
  scene.background = loader.load(texture)

  // Adding User
  var User = Character(scene, camera)
  var Mutant = Enemy(scene)
  
  // Fetching info
  var UserPosition = User.position()
  var UserInfo = User.info()

  var MutantPosition = Mutant.position()
  var MutantInfo = Mutant.info()

  var town = new Town(scene)
  town.create()
  var Lighting = new Light()
  Lighting.addLight(scene)
  Listener[0].EventListener("default")


  // var Collison = CollisonDectector(UserPosition.x, MutantPosition.x, UserPosition.y, MutantPosition.y)
  var stats = new Stats();
  document.body.appendChild(stats.dom);

  function Animation() {
    requestAnimationFrame(Animation)
    scene.simulate()
    if (scene.fog.density >= 1.00079) {
      scene.fog.density -= 1
    } else if (scene.fog.density <= 0.00079) {
      scene.fog.density++
    }
    renderer.render(scene, camera)
    stats.update();
  }
  Animation()
  return (
    <>
      <p className='infopara' onClick={function () {
        alert('If your GPU rendering is slow then this page will freeze occasionally')
      }}>
        <FcInfo />
      </p>
    </>
  )
}
export default Main;


