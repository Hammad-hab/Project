import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import _func from './_func'

const range = 1000
var Range = 100
var position
var EnemyInfo = {
    Health : 500,
    AttackPower : 50,
    Name: 'Mad Mutant'
  }
function Enemy(scene) {
    var Model = require('./Mutant_Walking.fbx')
    var Loader = new FBXLoader()
    Load(scene, Loader, Model)

    return {
        info: function () {
            return EnemyInfo
        },
        position: function () {
            return position
        },
        range:  function () {
            return Range
        }
    }
}


// if (_func[1].get('inRange') === 'yes') {
   /* Follow avatar. Direction = Avatar Direction; 
   if (CollisonVar <= 10) 
   then 
   Model = require(Attack.FBX)
   Avatar.heath -= Attack Power
  */
// }
function Load(scene, Loader, url, animation) {
    var Direction = [45, 0.5, 10, 5, 0.5, 10, 180, 90, 10, 5, 0.00001, -90]
    var Interval = [1000, 2000, 3000, 4000, 5000, 6000, 4000, 3000, 6000, 5000]
    Loader.load(url, function (OBJ) {
        const clock = new THREE.Clock();
        OBJ.receiveShadow = true
        OBJ.castShadow = true
        var mixer = new THREE.AnimationMixer(OBJ);
        const action = mixer.clipAction(OBJ.animations[0]);
        action.play();
        scene.add(OBJ)
        OBJ.traverse(function (child) { if (child.isMesh) { child.castShadow = true; child.receiveShadow = true; } });
        function inner() {
            requestAnimationFrame(inner)
            const delta = clock.getDelta();
            if (mixer) { mixer.update(delta); };
            var direction = new THREE.Vector3
            OBJ.getWorldDirection(direction)
             position = OBJ.position

            if (OBJ.position.z < range && OBJ.position.x < range) OBJ.position.addScaledVector(direction, 5);
            else {
                OBJ.position.z = 10
                OBJ.position.x = 10
                OBJ.position.addScaledVector(direction, 5);
            }
        }
        inner() 
        setInterval(() => {
            OBJ.rotation.y += _func[0](Direction)
        }, _func[0](Interval));
    });
}


export default Enemy