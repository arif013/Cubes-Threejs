import App from "./App.js";
import * as THREE from 'three'
import * as TWEEN from '@tweenjs/tween.js'

export default class RaycastScene extends App{
    
    setup(){
        this.rayCaster = new THREE.Raycaster();
        this.boxes = [];

        for(let i=0; i<100; i++){
            let x = Math.random()*100 - 50;
            let y = Math.random()*100 - 50;
            let z = Math.random()*100 - 50;
            let box = new THREE.Mesh(new THREE.BoxGeometry(5, 5, 5), new THREE.MeshStandardMaterial());
            box.position.set(x,y,z);
            this.boxes.push(box);
            this.scene.add(box)
        }

    }
    update(){
        for(let box of this.boxes){
            box.material.color.set(0xffffff)
        }
        this.rayCaster.setFromCamera(this.pointer, this.camera);
        let intersect = this.rayCaster.intersectObjects(this.boxes);

        for(let obj of intersect){
            // For dynamic color while hovering
            // let maxVal = 0xFFFFFF; 
            // let randomNumber = Math. random() * maxVal;
            // randomNumber = Math. floor(randomNumber);
            // randomNumber = randomNumber. toString(16);
            // let randColor = randomNumber. padStart(6, 0);
            // let color = `#${randColor. toUpperCase()}`
            // obj.object.material.color.set(color)
            
            obj.object.material.color.set(0xFF0000)

            // For Tween motion
            const tween1 = new TWEEN.Tween(obj.object.position).to({x: Math.random()*100-50, y:Math.random()*100-50, z:Math.random()*100-50},4000).easing(TWEEN.Easing.Quadratic.InOut)
            
            tween1.start()
        }
    }
}