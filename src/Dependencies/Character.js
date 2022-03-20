/* eslint-disable no-unused-expressions */

import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import * as THREE from 'three'
// import returnArray from './CharacterJS_func'
// var Incre = 1
var WalkingModel, IdleModel, PunchModel
const Raycaster = new THREE.Raycaster()


var Actions = {
  IsWalking : false,
  IsPunching : false
}
var AvatarInfo = {
  Health : 100,
  AttackPower : 5,
  Name: 'Numern Gaurd'
}
const range = 1000
function add(OBJ, camera) {
  window.addEventListener('keydown', (e) => {
    switch (e.key) {
      case "w":
        Actions.IsWalking = true
        const direction = new THREE.Vector3
        const speed = 0.01
        OBJ.getWorldDirection(direction)
        if (OBJ.position.z < range && OBJ.position.x < range)  OBJ.position.addScaledVector(direction, speed);
        else {
            OBJ.position.z = 10
            OBJ.position.x = 10
            OBJ.position.addScaledVector(direction, speed);
            camera.position.addScaledVector(direction, speed)
        }
        return {
          getDirection: () => {
            return direction
          }
        }
        break
      case 'a':
        Actions.IsWalking = true
        OBJ.rotation.y += 0.001
        break
      case "d":
        Actions.IsWalking = true
        OBJ.rotation.y -= 0.001
        break
      case "x":
        Actions.IsPunching = true
        break
      default:
        // Hmm...The user pressed the wrong key
        break
    }
  })
  window.onkeyup = function () {
    Actions.IsWalking = false
    Actions.IsPunching = false
  }
}
var position;
function Character(scene, camera) {
  var Loader = new FBXLoader()
  var Idle = require('./Idle.fbx')
  var Walking = require('./Walking.fbx')
  var PunchAttack = require('./Hook.fbx')
  Load(scene, Loader, Idle, 'idle', camera)
  Load(scene, Loader, Walking, 'walk', camera)
  Load(scene, Loader, PunchAttack, 'punch', camera)
  return {
    info : function () {
      return AvatarInfo
    },
    position: function () 
    {
      return position
    }
  }
}

function Load(scene, Loader, url, animation, camera) {
  Loader.load(url, function (OBJ) {
    const clock = new THREE.Clock();
    OBJ.receiveShadow = true
    OBJ.castShadow = true
    var mixer = new THREE.AnimationMixer(OBJ);
    const action = mixer.clipAction(OBJ.animations[0]);
    action.play();
    OBJ.traverse(function (child) { if (child.isMesh) { child.castShadow = true; child.receiveShadow = true; } });
    function inner() {
      requestAnimationFrame(inner)
      const delta = clock.getDelta();
      if (mixer) { mixer.update(delta); };
      if (animation === 'walk') {WalkingModel = OBJ; if (Actions.IsWalking === true) { scene.add(WalkingModel);  position = WalkingModel.position; } else { scene.remove(WalkingModel); }; add(OBJ, camera);} 
      else if (animation === "idle") { IdleModel = OBJ; if (Actions.IsWalking === false && Actions.IsPunching === false) 
        { 
          IdleModel.position.x = WalkingModel.position.x
          IdleModel.position.y = WalkingModel.position.y
          IdleModel.position.z = WalkingModel.position.z
          IdleModel.rotation.x = WalkingModel.rotation.x
          IdleModel.rotation.y = WalkingModel.rotation.y
          IdleModel.rotation.z = WalkingModel.rotation.z
          scene.add(IdleModel); 
        } else if (Actions.IsWalking === true || Actions.IsPunching === true) { scene.remove(IdleModel); }
      }
     else if (animation === 'punch') {
          PunchModel = OBJ
          if (Actions.IsPunching === true) {
            Actions.IsWalking = false
            PunchModel.position.x = WalkingModel.position.x
            PunchModel.position.y = WalkingModel.position.y
            PunchModel.position.z = WalkingModel.position.z
            PunchModel.rotation.x = WalkingModel.rotation.x
            PunchModel.rotation.y = WalkingModel.rotation.y
            PunchModel.rotation.z = WalkingModel.rotation.z
            scene.add(PunchModel)
          }
          else {
            scene.remove(PunchModel)
          }
     }
    }
    inner()
  });
}
export default Character



/* 

*/ 