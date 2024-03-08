import './style.css'
import * as THREE from 'three'
import { frontWall, sideWall, blackFrontWall, blackSideWall, pillar, signVert, signHor, ground, entryGround, curtainModel, } from './entrance'
import { addLight, ambientLight } from './addLights'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Model from './Model'
import { danceFloor, stageSide, stageSide2, bowlingAlley, drummer, guitar, keyboard, trumpet } from './concertHall'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import {WheelAdaptor} from 'three-story-controls'
import gsap from 'gsap'

const renderer = new THREE.WebGLRenderer({ antialias: true })
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  .01,
  1000
)

const clock = new THREE.Clock()
const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.dampingFactor = 0.09
// controls.target.set (-100,-40,-4)
// controls.target.set(0, 0, 4)
controls.enabled = false
controls.enablePan = false
controls.enableZoom = false
const scene = new THREE.Scene()
const meshes = {}
const lights = {}
const mixers = []


init()
function init() {
  // set up our render default settings, add scene/canvas to webpage
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  //bowling Alley Model
  bowlingAlley().then(({ scene: bowlingScene, mixer: bowlingMixer }) => {
    bowlingScene.position.set(-100, -3, -20)
    bowlingScene.scale.set(20, 20, 2)
    scene.add(bowlingScene)
    mixers.push(bowlingMixer)
  }).catch((error) => {
    console.log('failed to load model', error)
  })

  curtainModel().then(({ scene: curtainScene, mixer: curtainMixer }) => {
    curtainScene.position.set(2, -2, -15)
    curtainScene.scale.set(5, 1, 1.8)
    curtainScene.rotation.set(0, 30, 0)
    scene.add(curtainScene)
    mixers.push(curtainMixer)
  }).catch((error) => {
    console.log('failed to load model', error)
  })

  const arm = new Model({
    scene: scene, meshes: meshes, name: 'arm', url: './models/arm/scene.gltf',
    map: './models/arm/textures/material_0_baseColor.png',
    roughnessMap: './models/arm/textures/material_0_metallicRoughness.png',
    normalMap: './models/arm/textures/defaultMat_metallicRoughness.png',
    scale: new THREE.Vector3(.005, .005, .005),
  })
  arm.init()
  arm.position.set(3, 3, 3)

  const stamp = new Model({
    scene: scene, meshes: meshes, name: 'arm', url: './models/stamp/scene.gltf',
    map: './models/stamp/textures/defaultMat_baseColor.png',
    roughnessMap: './models/arm/textures/material_0_metallicRoughness.png',
    scale: new THREE.Vector3(.05, .05, .05),
  })
  stamp.init()
  stamp.position.set(3, 3, 3)

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

  camera.position.set(1.5, 0, 15)
  // camera.position.set(-100, -50, 35)
  // instances()

  let counter = 0
  let target = new THREE.Vector3()
  const wheelAdaptor = new WheelAdaptor({ type: 'discrete' })
  wheelAdaptor.connect()
  wheelAdaptor.addEventListener('trigger', (event) => {
      counter++
      if (counter == 1) {
          gsap.to(camera.position, {
              z: -5,
              duration: 3,
              ease: 'power1.inOut',
              }),
            gsap.to(target, {x: 2,y: 0,z: -18,
              onComplete:camera.lookAt(target)
            })
          
      } else if (counter == 4) {
          const cover = document.querySelector('.cover')
          gsap.to(cover, {
              opacity: 1,
              duration: 1,
              ease: 'power1.in',
          })
          gsap.to(camera.position, {
              x: -100,
              y: -50,
              z: 35,
              delay: 2,
          })
          gsap.to(cover, {
              opacity: 0,
              duration: 1,
              ease: 'power1.in',
              delay: 3,
              onComplete: () => {
                  controls.enabled = true
              },
          })
      }

      console.log(counter)
  })
  createVerticalText()
  fonts()
  resize()
  animate()
}

function fonts() {
  const fontLoader = new FontLoader()
  const tLoader = new THREE.TextureLoader()
  const mat = tLoader.load('./font/sample/mat.png')

  fontLoader.load('./font/sample/KenPixel_Regular.json', (font) => {
    const textGeometry = new TextGeometry('BAR', {
      font: font,
      size: .3,
      height: 0.2,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 0.03,
      bevelSize: 0.02,
      bevelOffset: 0,
      bevelSegments: 5,
    })
    const textMaterial = new THREE.MeshMatcapMaterial({
      matcap: mat,
    })
    const text = new THREE.Mesh(textGeometry, textMaterial)
    text.position.set(.2, 2, .5)
    scene.add(text)
  })
}

async function createVerticalText() {
  const fontLoader = new FontLoader()
  const tLoader = new THREE.TextureLoader()
  const mat = tLoader.load('./font/sample/mat.png')

  fontLoader.load('./font/sample/KenPixel_Regular.json', (font) => {
    const word = 'BOWLING';
    let yOffset = 6.5;

    for (let i = 0; i < word.length; i++) {
      const letter = word[i]
      const textGeometry = new TextGeometry(letter, {
        font: font,
        size: .35,
        height: 0.2,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.02,
        bevelOffset: 0,
        bevelSegments: 5,
      })

      textGeometry.computeBoundingBox()
      textGeometry.center()

      const textMaterial = new THREE.MeshMatcapMaterial({ matcap: mat })
      const text = new THREE.Mesh(textGeometry, textMaterial);
      scene.add(text)
      text.position.y = yOffset -= 0.55
      text.position.x = 0.9
      text.position.z = 0.5
    }
  })
}

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
  for (const mixer of mixers) {
    mixer.update(delta)
  }
  controls.update()
  // meshes.frontWall.rotation.x += 0.01
  // // meshes.frontWall.rotation.z += 0.01
  // meshes.pillar.rotation.y += 0.04
  // meshes.pillar.rotation.z += 0.04
  meshes.drummer
  meshes.guitar
  meshes.keyboard
  meshes.trumpet.rotation.y += 0.009
  // meshes.trumpet.rotation.x += 0.009
  renderer.render(scene, camera)
}

