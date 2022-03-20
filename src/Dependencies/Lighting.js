import * as THREE from 'three'
class Light {
    constructor () {
        this.addLight = (scene) => {
            const light = new THREE.PointLight()
                light.position.set(10, 10, 100)
                scene.add(light)
                const HemisphereLighting = new THREE.HemisphereLight('rgb(255,255,255)', 'rgb(255,0,0)', 0.1)
                HemisphereLighting.castShadow = true
                const ambientLight = new THREE.AmbientLight()
                const dirLight = new THREE.DirectionalLight( 0xffffff );
				dirLight.position.set( 0, 200, 100 );
				dirLight.castShadow = true;
				dirLight.shadow.camera.top = 180;
				dirLight.shadow.camera.bottom = - 100;
				dirLight.shadow.camera.left = - 120;
				dirLight.shadow.camera.right = 120;
				scene.add( dirLight );
                scene.add(HemisphereLighting)
                scene.add(ambientLight)
        }
    }
}

export default Light

// module.exports