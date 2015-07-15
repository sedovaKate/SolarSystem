var scene, camera, render;

container = document.createElement('div');
document.body.appendChild(container);

camera = new THREE.PerspectiveCamera(65, window.innerWidth/window.innerHeight,0.1,1000);
camera.position.x=0;
camera.position.y=0;
camera.position.z=600;

scene=new THREE.Scene();

var sphere_geometry = new THREE.SphereGeometry (50,20,20);
var sphere_texture = new THREE.MeshNormalMaterial();
var sphere = new THREE.Mesh(sphere_geometry, sphere_texture);
sphere.position.x = 0;
sphere.position.y = 0;
sphere.position.z = 0;
scene.add(sphere);


render=new THREE.WebGLRenderer();
render.setSize(window.innerWidth, window.innerHeight);
container.appendChild(render.domElement);

animation();

function animation() {
    requestAnimationFrame(animation);


    sphere.rotation.y +=180/Math.PI*0.001;
    sphere.position.x += 0.1;
    sphere.position.y += 0.1;
    sphere.position.z += 0.2;
    //sphere.rotation.x +=180/Math.PI*0.001;
    //sphere.rotation.z +=180/Math.PI*0.001;
    render.render(scene, camera);
}