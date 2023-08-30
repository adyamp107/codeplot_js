import * as THREE from './build/three.module.js';
import { viewportControls } from './control/viewportController.js';

const getViewport1 = document.getElementById('viewport-1');
const getViewport2 = document.getElementById('viewport-2');
const getViewport3 = document.getElementById('viewport-3');
const getViewport4 = document.getElementById('viewport-4');

const scene1 = new THREE.Scene();
const scene2 = new THREE.Scene();
const scene3 = new THREE.Scene();
const scene4 = new THREE.Scene();

const camera1 = new THREE.PerspectiveCamera(75, getViewport1.getBoundingClientRect().width / getViewport1.getBoundingClientRect().height, 0.1, 1000);
const camera2 = new THREE.PerspectiveCamera(75, getViewport2.getBoundingClientRect().width / getViewport2.getBoundingClientRect().height, 0.1, 1000);
const camera3 = new THREE.PerspectiveCamera(75, getViewport3.getBoundingClientRect().width / getViewport3.getBoundingClientRect().height, 0.1, 1000);
const camera4 = new THREE.PerspectiveCamera(75, getViewport4.getBoundingClientRect().width / getViewport4.getBoundingClientRect().height, 0.1, 1000);


const renderer1 = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
});

const renderer2 = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
});

const renderer3 = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
});

const renderer4 = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
});

renderer1.setSize(getViewport1.getBoundingClientRect().width, getViewport1.getBoundingClientRect().height);

getViewport1.appendChild(renderer1.domElement);
getViewport2.appendChild(renderer2.domElement);
getViewport3.appendChild(renderer3.domElement);
getViewport4.appendChild(renderer4.domElement);

//////////////////////////////////////////////////////////////////////////////////////

const material1 = new THREE.MeshStandardMaterial({
    color: 0x008cff,
    roughness: 0,
    metalness: 0.7,
});
const material2 = new THREE.MeshStandardMaterial({
    color: 0xf5dc00,
    roughness: 0,
    metalness: 0.7,
});
const material3 = new THREE.MeshPhongMaterial({color: 0xffffff});

const geometry1 = new THREE.BoxGeometry(4, 8, 4); 
const geometry2 = new THREE.BoxGeometry(4, 4, 4); 
const geometry3 = new THREE.BoxGeometry(4, 5, 4); 
const geometry4 = new THREE.BoxGeometry(8, 4, 4); 
const geometry5 = new THREE.BoxGeometry(1, 1, 4.5); 

const cubeBlue1 = new THREE.Mesh(geometry1, material1); 
cubeBlue1.position.set(0, 0, 0);

const cubeBlue2 = new THREE.Mesh(geometry2, material1); 
cubeBlue2.position.set(4, 2, 0);

const cubeBlue3 = new THREE.Mesh(geometry3, material1); 
cubeBlue3.position.set(8, 2.5, 0);

const cubeBlue4 = new THREE.Mesh(geometry4, material1); 
cubeBlue4.position.set(6, 7, 0);

const cubeBlue5 = new THREE.Mesh(geometry5, material3); 
cubeBlue5.position.set(3.5, 6.5, 0);

const blue = new THREE.Group();

const cubeYellow1 = new THREE.Mesh(geometry1, material2); 
cubeYellow1.position.set(0, 0, 0);

const cubeYellow2 = new THREE.Mesh(geometry2, material2); 
cubeYellow2.position.set(4, 2, 0);

const cubeYellow3 = new THREE.Mesh(geometry3, material2); 
cubeYellow3.position.set(8, 2.5, 0);

const cubeYellow4 = new THREE.Mesh(geometry4, material2); 
cubeYellow4.position.set(6, 7, 0);

const cubeYellow5 = new THREE.Mesh(geometry5, material3); 
cubeYellow5.position.set(3.5, 6.5, 0);

const yellow = new THREE.Group();

blue.add(cubeBlue1, cubeBlue2, cubeBlue3, cubeBlue4, cubeBlue5);
blue.scale.set(0.1, 0.1, 0.1);
blue.position.set(-1.3, 0.1, 0);

yellow.add(cubeYellow1, cubeYellow2, cubeYellow3, cubeYellow4, cubeYellow5);
yellow.rotation.z = Math.PI;
yellow.scale.set(0.1, 0.1, 0.1);

//////////////////////////////////////////////////////////////////////////////////////

const C = new THREE.Group();
const O = new THREE.Group();
const D = new THREE.Group();
const E = new THREE.Group();
const P = new THREE.Group();
const L = new THREE.Group();
const A = new THREE.Group();
const Y = new THREE.Group();

const geometry6 = new THREE.BoxGeometry(3, 6, 3);
const geometry7 = new THREE.BoxGeometry(6, 3, 3);
const geometry8 = new THREE.BoxGeometry(3, 11, 3);
const geometry9 = new THREE.BoxGeometry(3, 5, 3);
const geometry10 = new THREE.BoxGeometry(3, 9, 3);
const geometry11 = new THREE.BoxGeometry(3, 3, 3);

const CPixel1 = new THREE.Mesh(geometry6, material1);
CPixel1.position.set(0, 0, 0);

const CPixel2 = new THREE.Mesh(geometry7, material1);
CPixel2.position.set(4, 4, 0);

const CPixel3 = new THREE.Mesh(geometry7, material1);
CPixel3.position.set(4, -4, 0);

C.add(CPixel1, CPixel2, CPixel3);

const OPixel1 = new THREE.Mesh(geometry6, material1);
OPixel1.position.set(0, 0, 0)

const OPixel2 = new THREE.Mesh(geometry7, material1);
OPixel2.position.set(4, 4, 0);

const OPixel3 = new THREE.Mesh(geometry7, material1);
OPixel3.position.set(4, -4, 0);

const OPixel4 = new THREE.Mesh(geometry6, material1);
OPixel4.position.set(8, 0, 0)

O.add(OPixel1, OPixel2, OPixel3, OPixel4);
O.position.set(11.5, 0, 0)

const DPixel1 = new THREE.Mesh(geometry8, material1);
DPixel1.position.set(0, 0, 0)

const DPixel2 = new THREE.Mesh(geometry7, material1);
DPixel2.position.set(4, 4, 0);

const DPixel3 = new THREE.Mesh(geometry7, material1);
DPixel3.position.set(4, -4, 0);

const DPixel4 = new THREE.Mesh(geometry6, material1);
DPixel4.position.set(8, 0, 0);

D.add(DPixel1, DPixel2, DPixel3, DPixel4);
D.position.set(25.5, 0, 0);

const EPixel1 = new THREE.Mesh(geometry8, material1);
EPixel1.position.set(0, 0, 0)

const EPixel2 = new THREE.Mesh(geometry7, material1);
EPixel2.position.set(4, 4, 0);

const EPixel3 = new THREE.Mesh(geometry7, material1);
EPixel3.position.set(4, -4, 0);

const EPixel4 = new THREE.Mesh(geometry7, material1);
EPixel4.position.set(4, 0, 0)

E.add(EPixel1, EPixel2, EPixel3, EPixel4);
E.position.set(39.5, 0, 0);

const PPixel1 = new THREE.Mesh(geometry8, material2);
PPixel1.position.set(0, 0, 0)

const PPixel2 = new THREE.Mesh(geometry7, material2);
PPixel2.position.set(4, 4, 0);

const PPixel3 = new THREE.Mesh(geometry9, material2);
PPixel3.position.set(7, 2, 0);

const PPixel4 = new THREE.Mesh(geometry7, material2);
PPixel4.position.set(4, 0, 0)

P.add(PPixel1, PPixel2, PPixel3, PPixel4);
P.position.set(51, 0, 0);

const LPixel1 = new THREE.Mesh(geometry8, material2);
LPixel1.position.set(0, 0, 0)

const LPixel2 = new THREE.Mesh(geometry7, material2);
LPixel2.position.set(4, -4, 0);

L.add(LPixel1, LPixel2);
L.position.set(64, 0, 0);

const APixel1 = new THREE.Mesh(geometry10, material2);
APixel1.position.set(0, -1, 0)

const APixel2 = new THREE.Mesh(geometry7, material2);
APixel2.position.set(4, 4, 0);

const APixel3 = new THREE.Mesh(geometry7, material2);
APixel3.position.set(4, -1, 0);

const APixel4 = new THREE.Mesh(geometry10, material2);
APixel4.position.set(8, -1, 0)

A.add(APixel1, APixel2, APixel3, APixel4);
A.position.set(75.5, 0, 0);

const YPixel1 = new THREE.Mesh(geometry9, material2);
YPixel1.position.set(4, -3, 0)

const YPixel2 = new THREE.Mesh(geometry7, material2);
YPixel2.position.set(4, 1, 0);

const YPixel3 = new THREE.Mesh(geometry11, material2);
YPixel3.position.set(1, 2, 0);

const YPixel4 = new THREE.Mesh(geometry11, material2);
YPixel4.position.set(7, 2, 0)

const YPixel5 = new THREE.Mesh(geometry11, material2);
YPixel5.position.set(0, 4, 0);

const YPixel6 = new THREE.Mesh(geometry11, material2);
YPixel6.position.set(8, 4, 0);

Y.add(YPixel1, YPixel2, YPixel3, YPixel4, YPixel5, YPixel6);
Y.position.set(89.5, 0, 0);

const CodePlay = new THREE.Group();
CodePlay.add(C, O, D, E, P, L, A, Y);
CodePlay.position.set(-3.5, 0, 0);

CodePlay.scale.set(0.05, 0.05, 0.05);

const python = new THREE.Group();
python.add(blue, yellow);
python.position.set(3.15, 0, 0);
scene1.add(python)

const logo = new THREE.Group();
logo.add(CodePlay);
logo.position.set(0, 0, 0);
scene1.add(logo);

const g = new THREE.BoxGeometry(1, 1, 1);
const a = new THREE.Mesh(g, material2);
a.position.set(0, 0, 0);
// scene1.add(a)

//////////////////////////////////////////////////////////////////////////////////////
const textureLoader = new THREE.TextureLoader();
const texture1 = textureLoader.load('../assets/python.png');
const texture2 = textureLoader.load('../assets/oop.png');
const texture3 = textureLoader.load('../assets/ai.jpg');

texture1.minFilter = THREE.LinearMipmapLinearFilter;
texture1.magFilter = THREE.LinearFilter;
texture1.anisotropy = renderer2.capabilities.getMaxAnisotropy();


texture2.minFilter = THREE.LinearMipmapLinearFilter;
texture2.magFilter = THREE.LinearFilter;
texture2.anisotropy = renderer3.capabilities.getMaxAnisotropy();

texture3.minFilter = THREE.LinearMipmapLinearFilter;
texture3.magFilter = THREE.LinearFilter;
texture3.anisotropy = renderer4.capabilities.getMaxAnisotropy();
  
const width = 4.5;
const height = 3;
const segments = 30;
const curveAmount = 1;
const planeGeometry = new THREE.PlaneGeometry(width, height, segments, segments);

const positions = planeGeometry.getAttribute('position');

const halfWidth = width / 2;
const halfHeight = height / 2;

for (let i = 0; i <= segments; i++) {
    for (let j = 0; j <= segments; j++) {
        const vertexIndex = i * (segments + 1) + j;

        const positionIndex = vertexIndex * 3;

        const x = positions.array[positionIndex];
        const y = positions.array[positionIndex + 1];
        const z = positions.array[positionIndex + 2];

        const percentX = j / segments;
        const percentY = i / segments;
        const angle = Math.sin(percentX * Math.PI) * curveAmount;

        positions.array[positionIndex + 2] = z + Math.sin(angle) * curveAmount;
    }
}

positions.needsUpdate = true;

const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  uniform sampler2D uTexture;

  void main() {
    vec4 texColor = texture2D(uTexture, vUv);
    gl_FragColor = texColor;
  }
`;

const material4 = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uTexture: {
            value: texture1
        }
    },
    side: THREE.DoubleSide,
});

const material5 = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uTexture: {
            value: texture2
        }
    },
    side: THREE.DoubleSide,
});

const material6 = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uTexture: {
            value: texture3
        }
    },
    side: THREE.DoubleSide,
});

const plane2 = new THREE.Mesh(planeGeometry, material4);
plane2.rotation.y = Math.PI;
scene2.add(plane2);

const plane3 = new THREE.Mesh(planeGeometry, material5);
plane3.rotation.y = Math.PI;
scene3.add(plane3);

const plane4 = new THREE.Mesh(planeGeometry, material6);
plane4.rotation.y = Math.PI;
scene4.add(plane4);

//////////////////////////////////////////////////////////////////////////////////////

camera1.position.set(0, 0, -2);
camera1.rotation.set(0, 0, 0);

camera2.position.set(0, 0, -4);
camera2.rotation.set(0, 0, 0);
camera2.position.z = 1360 / getViewport2.getBoundingClientRect().width;

camera3.position.set(0, 0, -4);
camera3.rotation.set(0, 0, 0);
camera3.position.z = 1360 / getViewport2.getBoundingClientRect().width;

camera4.position.set(0, 0, -4);
camera4.rotation.set(0, 0, 0);
camera4.position.z = 1360 / getViewport2.getBoundingClientRect().width;

//////////////////////////////////////////////////////////////////////////////////////

function updateCamera() {
    camera1.position.z = 3060 / getViewport1.getBoundingClientRect().width;
    camera2.position.z = 1360 / getViewport2.getBoundingClientRect().width;
    camera3.position.z = 1360 / getViewport3.getBoundingClientRect().width;
    camera4.position.z = 1360 / getViewport4.getBoundingClientRect().width;
}
//////////////////////////////////////////////////////////////////////////////////////

function resizeWindow() {
    var newWidth1 = getViewport1.getBoundingClientRect().width;
    var newHeight1 = getViewport1.getBoundingClientRect().height;
    camera1.aspect = newWidth1 / newHeight1;
    camera1.updateProjectionMatrix();
    renderer1.setSize(newWidth1, newHeight1);

    var newWidth2 = getViewport2.getBoundingClientRect().width;
    var newHeight2 = getViewport2.getBoundingClientRect().height;
    camera2.aspect = newWidth2 / newHeight2;
    camera2.updateProjectionMatrix();
    renderer2.setSize(newWidth2, newHeight2);

    var newWidth3 = getViewport3.getBoundingClientRect().width;
    var newHeight3 = getViewport3.getBoundingClientRect().height;
    camera3.aspect = newWidth3 / newHeight3;
    camera3.updateProjectionMatrix();
    renderer3.setSize(newWidth3, newHeight3);

    var newWidth4 = getViewport4.getBoundingClientRect().width;
    var newHeight4 = getViewport4.getBoundingClientRect().height;
    camera4.aspect = newWidth4 / newHeight4;
    camera4.updateProjectionMatrix();
    renderer4.setSize(newWidth4, newHeight4);
}

const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
scene1.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 20, 100);
pointLight.position.set(0, 0.5, 1);
scene1.add(pointLight);

const targetZ = 3060 / getViewport1.getBoundingClientRect().width;
const speed = 0.05;

var lightAnimation = false;
var lightDirection = 1;
const lightSpeed = 0.01;

var enabled = false;

function onControl() {
    if(enabled) {
        const control1 = new viewportControls(camera1, getViewport1);  
    }
}

window.addEventListener('resize', () => {
    updateCamera();                
    resizeWindow();
});

const control2 = new viewportControls(camera2, getViewport2);
const control3 = new viewportControls(camera3, getViewport3);
const control4 = new viewportControls(camera4, getViewport4);

function animate() {

    if (camera1.position.z < targetZ && lightAnimation === false) {
        camera1.position.z += speed;   
    } else {
        lightAnimation = true;
    }

    if(lightAnimation) {
        pointLight.position.x += lightDirection * lightSpeed;
        if (pointLight.position.x >= 3 || pointLight.position.x <= -3) {
            lightDirection *= -1;
        }
    }

    if(enabled === false && lightAnimation) {
        enabled = true;
        onControl();
    }

    requestAnimationFrame(animate);
    renderer1.render(scene1, camera1);
    renderer2.render(scene2, camera2);
    renderer3.render(scene3, camera3);
    renderer4.render(scene4, camera4);
}

// updateCamera();
resizeWindow();
animate();
