import './style.css'
import * as THREE from 'three'
import { frontWall, sideWall, blackFrontWall, blackSideWall, pillar, signVert, signHor, ground, entryGround } from './addMeshes'
import { addLight, ambientLight } from './addLights'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Model from './Model'
import { danceFloor, stageSide, stageSide2, bowlingAlley, drummer, guitar, keyboard, trumpet } from './concertHall'


const renderer = new THREE.WebGLRenderer({ antialias: true })
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  .01,
  100
)

const clock = new THREE.Clock()
const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.dampingFactor = 0.09
controls.target.set (-100,-40,-4)
// controls.enablePan = false
// controls.enableZoom = false
const scene = new THREE.Scene()
const meshes = {}
const lights = {}
const mixers = []

init()
function init() {
  // set up our render default settings, add scene/canvas to webpage
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

    // //bowling Alley Model
    // bowlingAlley().then(({ scene: bowlingScene, mixer: bowlingMixer })=>{
    //   bowlingScene.position.set(-100,-3,-20)
    //   bowlingScene.scale.set(20,20,2)
    //   scene.add(bowlingScene)
    //   mixers.push(bowlingMixer)
    // }).catch((error)=>{
    //   console.log('failed to load model', error)
    // })

  meshes.frontWall = frontWall()
  meshes.sideWall = sideWall()
  meshes.blackFrontWall = blackFrontWall()
  meshes.blackSideWall = blackSideWall()
  meshes.pillar = pillar()
  meshes.signVert = signVert()
  meshes.signHor = signHor()
  meshes.ground = ground()
  meshes.entryGround = entryGround()

  meshes.danceFloor = danceFloor()
  meshes.drummer = drummer()
  meshes.guitar = guitar()
  meshes.keyboard = keyboard()
  meshes.trumpet = trumpet()
  meshes.stageSide = stageSide()
  meshes.stageSide2 = stageSide2()


  lights.default = addLight()
  lights.ambientLight = ambientLight()

  scene.add(lights.default)
  scene.add(lights.ambientLight)
  scene.add(meshes.pillar)
  scene.add(meshes.frontWall)
  scene.add(meshes.blackFrontWall)
  scene.add(meshes.blackSideWall)
  scene.add(meshes.signHor)
  scene.add(meshes.sideWall)
  scene.add(meshes.signVert)
  scene.add(meshes.ground)
  scene.add(meshes.entryGround)


  scene.add(meshes.danceFloor)
  scene.add(meshes.stageSide)
  // scene.add(meshes.stageSide2)
  scene.add(meshes.drummer)
  scene.add(meshes.guitar)
  scene.add(meshes.keyboard)
  scene.add(meshes.trumpet)

  // camera.position.set(0, 0, 15)
  camera.position.set(-100, -50, 35)
 // instances()
  resize()
  animate()
}

// function instances() {
//   const heart = new Model({
//     // four mandatory requirements
//     url: '/heart.glb',
//     animationState: true,
//     scene: scene,
//     mixers: mixers,
//     meshes: meshes,
//     name: 'heart',
//   })
//   heart.init()
//   const heart2 = new Model({
//     //4 mandatories
//     url: '/heart.glb',
//     scene: scene,
//     meshes: meshes,
//     name: 'heart2',
//     position: new THREE.Vector3(2, 1, 0),
//     scale: new THREE.Vector3(0.5,0.5,0.5),
//   })
//   heart2.init()
//   const bicycle = new Model({
//     //4 mandatories
//     url: '/old_bicycle.glb',
//     scene: scene,
//     meshes: meshes,
//     name: 'bicycle',
//     position: new THREE.Vector3(1, 1, -2),
//     // scale: new THREE.Vector3(0.5,0.5,0.5),
//   })
//   bicycle.init()
// }


function resize() {
  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
  })
}

function animate() {
  requestAnimationFrame(animate)
    const delta = clock.getDelta()
    for (const mixer of mixers){
      mixer.update(delta)
    }
    controls.update()
  // meshes.frontWall.rotation.x += 0.01
  // // meshes.frontWall.rotation.z += 0.01
  // meshes.pillar.rotation.y += 0.04
  // meshes.pillar.rotation.z += 0.04
  renderer.render(scene, camera)
}

