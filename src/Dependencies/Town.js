import * as THREE from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
var Loader = new FBXLoader()
class Town {
    constructor(scene) {
        this.create = () => {
            var url = require('./FBXmodel.fbx')
            Loader.load(url, function (fbx2) {
                scene.add(fbx2)
            },
            function (progr) {
                console.log(progr)
            })
        }
    }
}

export default Town