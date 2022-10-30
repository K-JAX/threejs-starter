import * as THREE from "three";
import "./css/style.css";

const renderer = new THREE.WebGL1Renderer({ antialias: true, alpha: true });
const stage = document.querySelectorAll(".stage")[0];
const root = document.querySelectorAll("#three-root")[0];
renderer.setSize(root.offsetWidth, root.offsetHeight);
root.appendChild(renderer.domElement);
renderer.setClearColor(0x000000, 0.0);

const camera = new THREE.PerspectiveCamera(
	45,
	root.offsetWidth / root.offsetHeight,
	1,
	500
);
camera.position.set(0, 0, 10);
camera.lookAt(0, 0, 0);

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshPhongMaterial({
	color: 0xaabbff,
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const wireframe = new THREE.WireframeGeometry(geometry);
const line = new THREE.LineSegments(wireframe);
line.material.color.setHex(0x000000);
scene.add(line);

const light = new THREE.AmbientLight(0xf0f0f0); // soft white light
scene.add(light);

// renderer.render(scene, camera);
function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	line.rotation.x += 0.01;
	line.rotation.y += 0.01;
}
animate();
