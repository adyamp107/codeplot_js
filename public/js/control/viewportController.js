import * as THREE from '../build/three.module.js';

export class viewportControls {
    constructor(camera, getViewport, scene) {

        const center = new THREE.Vector3();   
        const vector = new THREE.Vector3();
        const spherical = new THREE.Spherical();
        const startPointer = new THREE.Vector3();
        const endPointer = new THREE.Vector3();
        const deltaPointer = new THREE.Vector3();
        const startTouch = new THREE.Vector3();
        const endTouch = new THREE.Vector3();
        const deltaTouch = new THREE.Vector3();

        function rotatePointer(deltaPointer) {
            deltaPointer.multiplyScalar(0.005);
            vector.copy(camera.position).sub(center);
            spherical.setFromVector3(vector);
            spherical.phi -= (deltaPointer.y);
            spherical.theta -= (deltaPointer.x);
            spherical.theta = Math.max(-0.3, Math.min(0.3, spherical.theta));
            spherical.phi = Math.max(0.8, Math.min(2.4, spherical.phi));
            spherical.makeSafe();
            vector.setFromSpherical(spherical);
            camera.position.copy(center).add(vector);
            camera.lookAt(center);
        }

        function rotateTouch(deltaTouch) {
            deltaTouch.multiplyScalar(0.005);
            vector.copy(camera.position).sub(center);
            spherical.setFromVector3(vector);
            spherical.phi -= (deltaTouch.y);
            spherical.theta -= (deltaTouch.x);
            spherical.theta = Math.max(-0.3, Math.min(0.3, spherical.theta));
            spherical.phi = Math.max(0.8, Math.min(2.4, spherical.phi));
            spherical.makeSafe();
            vector.setFromSpherical(spherical);
            camera.position.copy(center).add(vector);
            camera.lookAt(center);
        }

        function pointerUp(event) {
            getViewport.removeEventListener('pointermove', pointerMove);
        }

        function pointerMove(event) {
            endPointer.set(event.clientX, event.clientY, 0);                
            deltaPointer.subVectors(endPointer, startPointer);
            rotatePointer(deltaPointer);
            startPointer.copy(endPointer);
        }

        function pointerDown(event) {
            startPointer.set(event.clientX, event.clientY, 0); 
            getViewport.addEventListener('pointermove', pointerMove);
            window.addEventListener('pointerup', pointerUp);            
        }

        function touchUp(event) {
            getViewport.removeEventListener('touchmove', touchMove);
        }

        function touchMove(event) {
            endTouch.set(event.touches[0].clientX, event.touches[0].clientY, 0);                
            deltaTouch.subVectors(endTouch, startTouch);
            rotateTouch(deltaTouch);
            startTouch.copy(endTouch);
        }

        function touchDown(event) {
            startTouch.set(event.touches[0].clientX, event.touches[0].clientY, 0);
            getViewport.addEventListener('touchmove', touchMove);
            window.addEventListener('touchend', touchUp);
        }

        getViewport.addEventListener('pointerdown', pointerDown);    
        getViewport.addEventListener('touchstart', touchDown);
        window.addEventListener('contextmenu', (event) => {
            event.preventDefault();
        });

    }
}