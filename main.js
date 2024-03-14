import './style.css'
import * as THREE from 'three'
import { sky, bkBrewery, frontWall, sideWall, blackFrontWall, blackSideWall, sideDoor, sideDoorTop, blackMiniWall, pillar, signVert, signHor, ground, entryGround, curtainModel, curtainModel2 } from './entrance'
import { addLight, ambientLight } from './addLights'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Model from './Model'
import { danceFloor, stageFloor, stageLip, stageSide, stageSide2, ceiling, backStage, backWall, farWall, discoBall, drummer, guitar, oteil, trumpet, beatsAntique, rebirth, bigFreeda, bigBoi  } from './concertHall'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import { WheelAdaptor } from 'three-story-controls'
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
// controls.target.set (-100,-240,-4)
// controls.target.set(0, 0, 4)
// controls.enabled = false
// controls.enablePan = false
// controls.enableZoom = false
const scene = new THREE.Scene()
const meshes = {}
const lights = {}
const mixers = []
const raycaster = new THREE.Raycaster()
const pointer = new THREE.Vector2()
let soundPlaying = null ;


//audio
const listener = new THREE.AudioListener()
camera.add(listener)
const hartswickMusic = new THREE.PositionalAudio(listener)
const oteilMusic = new THREE.PositionalAudio(listener)
const beatsAntiqueMusic = new THREE.PositionalAudio(listener)
const rebirthMusic = new THREE.PositionalAudio(listener)
const bigFreedaMusic = new THREE.PositionalAudio(listener)
const bigBoiMusic = new THREE.PositionalAudio(listener)
const gratefulDeadMusic = new THREE.PositionalAudio(listener)
const audioLoader = new THREE.AudioLoader()


init()
function init() {
  // set up our render default settings, add scene/canvas to webpage
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  curtainModel().then(({ scene: curtainScene, mixer: curtainMixer }) => {
    curtainScene.position.set(2, -2, -15)
    curtainScene.scale.set(5, 1, 1.8)
    curtainScene.rotation.set(0, 30, 0)
    scene.add(curtainScene)
    mixers.push(curtainMixer)
  }).catch((error) => {
    console.log('failed to load model', error)
  })

  curtainModel2().then(({ scene: curtainScene2, mixer: curtainMixer2 }) => {
    curtainScene2.position.set(2, -2, -11.5)
    curtainScene2.scale.set(5, 1, 1.8)
    curtainScene2.rotation.set(0, 30, 0)
    scene.add(curtainScene2)
    mixers.push(curtainMixer2)
  }).catch((error) => {
    console.log('failed to load model', error)
  })

  const arm = new Model({
    scene: scene, meshes: meshes, name: 'arm', url: './models/arm/scene.gltf',
    map: './models/arm/textures/material_0_baseColor.png',
    roughnessMap: './models/arm/textures/material_0_metallicRoughness.png',
    normalMap: './models/arm/textures/defaultMat_metallicRoughness.png',
    scale: new THREE.Vector3(.005, .005, .005),
    rotation: new THREE.Vector3(.4, 4, 0)
  })
  arm.init()
  arm.position.set(1.5, -1, -14)


  const stamp = new Model({
    scene: scene, meshes: meshes, name: 'stamp', url: './models/stamp/scene.gltf',
    map: './models/stamp/textures/defaultMat_baseColor.png',
    roughnessMap: 'defaultMat_metallicRoughness.png',
    scale: new THREE.Vector3(.009, .009, .009),
    rotation: new THREE.Vector3(0, .4, 0)
  })
  stamp.init()
  stamp.position.set(1.55, -0.3, -14)
  // stamp.position.set(1.55, -.74, -14)


  const stageCurtain = new Model({
    scene: scene, meshes: meshes, name: 'stageCurtain', url: './models/curtains.glb',
    // map: './models/StageCurtain/textures/Material.001_baseColor.png',
    // roughnessMap: './models/arm/textures/material_0_metallicRoughness.png',
    scale: new THREE.Vector3(25, 30, 70),
    rotation: new THREE.Vector3(0, Math.PI*.5 , 0)
  })
  stageCurtain.init()
  stageCurtain.position.set(-85, -255, -90)


  // const bowling = new Model({
  //   scene: scene, meshes: meshes, name: 'bowling', url: './models/bowling/scene.gltf',
  //   // map: './models/arm/textures/material_0_baseColor.png',
  //   // roughnessMap: './models/arm/textures/material_0_metallicRoughness.png',
  //   // normalMap: './models/arm/textures/defaultMat_metallicRoughness.png',
  //   scale: new THREE.Vector3(10, 3, 10),
  // })
  // bowling.init()
  // bowling.position.set(-50, -20, -65)

  const bowling2 = new Model({
    scene: scene, meshes: meshes, name: 'bowling2', url: './models/bowling2/scene.gltf',
    // map: './models/arm/textures/material_0_baseColor.png',
    // roughnessMap: './models/arm/textures/material_0_metallicRoughness.png',
    // normalMap: './models/arm/textures/defaultMat_metallicRoughness.png',
    scale: new THREE.Vector3(10, 3, 15),
    rotation: new THREE.Vector3(0, Math.PI, 0)
  })
  bowling2.init()
  bowling2.position.set(90, -250, -70)

  const bar = new Model({
    scene: scene, meshes: meshes, name: 'bar', url: './models/bar/scene.gltf',
    map: './models/bar/textures/Metal035_2K_Color_baseColor.jpeg',
    roughnessMap: './models/bar/textures/Metal035_2K_Color_metallicRoughness.png',
    normalMap: './models/bar/textures/Metal035_2K_Color_normal.png',
    scale: new THREE.Vector3(.5, .4, .5),
    rotation: new THREE.Vector3(0, Math.PI, 0),
  })
  bar.init()
  bar.position.set(-100, -280, 170)

  const jager = new Model({
    scene: scene, meshes: meshes, name: 'jager', url: './models/Jager/scene.gltf',
    map: '.\models\Jager\textures\jager_label_baseColor.png',
    // roughnessMap: '.\models\Jager\textures\jager_label_baseColor.png',
    normalMap: '.\models\Jager\textures\jager_label_normal.png',
    scale: new THREE.Vector3(1, 1, 1),
    rotation: new THREE.Vector3(0, Math.PI, 0),
  })
  jager.init()
  jager.position.set(-100, -264, 170)

  const whiskey = new Model({
    scene: scene, meshes: meshes, name: 'whiskey', url: './models/whiskey/scene.gltf',
    map: '.\models\whiskey\textures\whiskey_baseColor.png',
    // roughnessMap: '.\models\Jager\textures\jager_label_baseColor.png',
    normalMap: '.\models\Jager\textures\jager_label_normal.png',
    scale: new THREE.Vector3(3, 3, 3),
    rotation: new THREE.Vector3(0, Math.PI, 0),
  })
  whiskey.init()
  whiskey.position.set(-103, -264, 170)

  const jager2 = new Model({
    scene: scene, meshes: meshes, name: 'jager2', url: './models/Jager/scene.gltf',
    map: '.\models\Jager\textures\jager_label_baseColor.png',
    // roughnessMap: '.\models\Jager\textures\jager_label_baseColor.png',
    normalMap: '.\models\Jager\textures\jager_label_normal.png',
    scale: new THREE.Vector3(1, 1, 1),
    rotation: new THREE.Vector3(0, Math.PI, 0),
  })
  jager2.init()
  jager2.position.set(-94, -264, 170)

  const whiskey2 = new Model({
    scene: scene, meshes: meshes, name: 'whiskey2', url: './models/whiskey/scene.gltf',
    map: '.\models\whiskey\textures\whiskey_baseColor.png',
    // roughnessMap: '.\models\Jager\textures\jager_label_baseColor.png',
    normalMap: '.\models\whiskey\textures\viko_normal.png',
    scale: new THREE.Vector3(3, 3, 3),
    rotation: new THREE.Vector3(0, Math.PI, 0),
  })
  whiskey2.init()
  whiskey2.position.set(-88, -264, 170)

  const dancers = new Model({
    scene: scene, meshes: meshes, name: 'dancers', url: './models/salsa_dancers/scene.gltf',
    map: '.\models\salsa_dancers\textures\peopleColors_baseColor.png',
    // roughnessMap: './models/bar/textures/Metal035_2K_Color_metallicRoughness.png',
    // normalMap: './models/bar/textures/Metal035_2K_Color_normal.png',
    scale: new THREE.Vector3(.2, .2, .2),
    rotation: new THREE.Vector3(0, Math.PI, 0),
  })
  dancers.init()
  dancers.position.set(-60, -280, 20)
  
  const speaker = new Model({
    scene: scene, meshes: meshes, name: 'speaker', url: './models/speaker/scene.gltf',
    map: '.\models\speaker\textures\Rubber_baseColor.png',
    // roughnessMap: './models/bar/textures/Metal035_2K_Color_metallicRoughness.png',
    // normalMap: './models/bar/textures/Metal035_2K_Color_normal.png',
    scale: new THREE.Vector3(5, 5, 5),
    rotation: new THREE.Vector3(0, Math.PI * -.3, 0),
  })
  speaker.init()
  speaker.position.set(-145, -255, -15)

  const speaker2 = new Model({
    scene: scene, meshes: meshes, name: 'speaker', url: './models/speaker/scene.gltf',
    map: '.\models\speaker\textures\Rubber_baseColor.png',
    // roughnessMap: './models/bar/textures/Metal035_2K_Color_metallicRoughness.png',
    // normalMap: './models/bar/textures/Metal035_2K_Color_normal.png',
    scale: new THREE.Vector3(5, 5, 5),
    rotation: new THREE.Vector3(0, Math.PI * -.6, 0),
  })
  speaker2.init()
  speaker2.position.set(-45, -255, -45)

  meshes.sky = sky()
  meshes.frontWall = frontWall()
  meshes.bkBrewery = bkBrewery()
  meshes.sideWall = sideWall()
  meshes.blackMiniWall = blackMiniWall()
  meshes.sideDoor = sideDoor()
  meshes.sideDoorTop = sideDoorTop()
  meshes.blackFrontWall = blackFrontWall()
  meshes.blackSideWall = blackSideWall()
  meshes.pillar = pillar()
  meshes.signVert = signVert()
  meshes.signHor = signHor()
  meshes.ground = ground()
  meshes.entryGround = entryGround()

  meshes.danceFloor = danceFloor()
  meshes.stageFloor = stageFloor()
  meshes.stageLip = stageLip()
  meshes.drummer = drummer()
  meshes.guitar = guitar()
  meshes.oteil = oteil()
  meshes.beatsAntique = beatsAntique()
  meshes.rebirth = rebirth()
  meshes.bigFreeda = bigFreeda()
  meshes.bigBoi= bigBoi()

  meshes.trumpet = trumpet()
  meshes.stageSide = stageSide()
  meshes.stageSide2 = stageSide2()
  meshes.ceiling = ceiling()
  meshes.farWall = farWall()
  meshes.backWall = backWall()
  meshes.backStage = backStage()
  meshes.discoBall = discoBall()


  // lights.default = addLight()
  lights.ambientLight = ambientLight()


  meshes.trumpet.add(hartswickMusic)
  meshes.oteil.add(oteilMusic)
  meshes.beatsAntique.add(beatsAntiqueMusic)
  meshes.rebirth.add(rebirthMusic)
  meshes.bigFreeda.add(bigFreedaMusic)
  meshes.bigBoi.add(bigBoiMusic)
  meshes.entryGround.add(gratefulDeadMusic)
  

  scene.add(lights.default)
  scene.add(lights.ambientLight)
  scene.add(meshes.pillar)
  scene.add(meshes.sky)
  scene.add(meshes.bkBrewery)
  scene.add(meshes.frontWall)
  scene.add(meshes.sideDoor)
  scene.add(meshes.sideDoorTop)
  scene.add(meshes.blackMiniWall)
  scene.add(meshes.blackFrontWall)
  scene.add(meshes.blackSideWall)
  scene.add(meshes.signHor)
  scene.add(meshes.sideWall)
  scene.add(meshes.signVert)
  scene.add(meshes.ground)
  scene.add(meshes.entryGround)


  scene.add(meshes.danceFloor)
  scene.add(meshes.stageFloor)
  scene.add(meshes.stageSide)
  scene.add(meshes.stageLip)
  scene.add(meshes.stageSide2)
  scene.add(meshes.ceiling)
  scene.add(meshes.farWall)
  scene.add(meshes.backWall)
  scene.add(meshes.backStage)
  scene.add(meshes.discoBall)

  scene.add(meshes.bigFreeda)
  scene.add(meshes.bigBoi)
  scene.add(meshes.rebirth)
  // scene.add(meshes.drummer)
  // scene.add(meshes.guitar)
  scene.add(meshes.oteil)
  scene.add(meshes.beatsAntique)
  scene.add(meshes.trumpet)

  window.addEventListener('click', () => {
    gratefulDeadMusic.play()
  })

  // camera.position.set(2.5, .3, -13)
  // controls.target.set(1.5, 0, -14)
  // camera.position.set(1.5, 0, 15)
  // camera.position.set(-100, -250, 60)
  // controls.target.set(-100, -250, 0)
  // instances()


  camera.position.set(1.5, 0, 10)
  controls.target.set(5, 0, -1)
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
        gsap.to(target, {
          x: 0, y: 0, z: -10,
          duration: 1.2,
          ease: 'power1.inOut',
          onComplete: () => {
            camera.lookAt(target)
            controls.target.copy(target)
          },
        })

    } else if (counter == 2) {
      gsap.to(camera.position, {
        x: 1.9, y:0, z: -12,
        duration: 3,
        ease: 'power1.inOut',
      })
      gsap.to(target, {
        x: 1.5, y: 0, z: -15,
        duration: 1.2,
        ease: 'power1.inOut',
        onComplete: () => {
          camera.lookAt(target)
          controls.target.copy(target)
        },
      })
  } else if (counter == 3) {
      gsap.to(camera.position, {
        x:2.5, y:.3, z: -13,
        duration: 3,
        ease: 'power1.inOut',
      }),
        gsap.to(target, {
          x: 1.5, y: 0, z: -14,
          duration: 1.2,
          ease: 'power1.inOut',
          onComplete: () => {
            camera.lookAt(target)
            controls.target.copy(target)
          },
        })
        gsap.to(meshes.stamp.position, {
          x: 1.55, y: -0.74, z: -14,
          duration: 3,
          ease: 'power1.inOut',
          delay: 2,
          onComplete: () => {
            gsap.to(meshes.stamp.position, {
              x: 1.55, y: -0.3, z: -14,
              duration: 3,
              ease: 'power1.inOut',
            })    },
        })  
      
    }
    else if (counter == 4) {
      const cover = document.querySelector('.cover')
      const otherShows = document.querySelector('#otherShows')
      gsap.to(cover, {
        opacity: 1,
        duration: 1,
        ease: 'power1.in',
      })
      gsap.to(camera.position, {
        x: -100,
        y: -250,
        z: 125,
        delay: 2,
      })
      gsap.to(target, {
        x: -100, y: -250, z: 15,
        duration: 1.2,
        ease: 'power1.inOut',
        onComplete: () => {
          camera.lookAt(target)
          controls.target.copy(target)
        },
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
      gsap.to(otherShows, {
        display: 'block',
        opacity: 1,
        delay: 10,
        ease: 'power1.inOut'
      })
    }

    console.log(counter)
  })
  createVerticalText()
  fonts()
  initAudio()
  resize()
  raycast()
  animate()
}

function initAudio() {
  audioLoader.load('./sound/hartswickMP3.mp3', function (buffer) {
    hartswickMusic.setBuffer(buffer)
    hartswickMusic.setRefDistance(30)
    hartswickMusic.setRolloffFactor(5)
    hartswickMusic.setMaxDistance(20)
    hartswickMusic.setDistanceModel('exponential')
  })

  audioLoader.load('./sound/oteilMP3.mp3', function (buffer) {
    oteilMusic.setBuffer(buffer)
    oteilMusic.setRefDistance(300)
    oteilMusic.setRolloffFactor(5)
    oteilMusic.setMaxDistance(20)
    oteilMusic.setDistanceModel('exponential')
  })

  audioLoader.load('./sound/beatsAntiqueMP3.mp3', function (buffer) {
    beatsAntiqueMusic.setBuffer(buffer)
    beatsAntiqueMusic.setRefDistance(300)
    beatsAntiqueMusic.setRolloffFactor(5)
    beatsAntiqueMusic.setMaxDistance(20)
    beatsAntiqueMusic.setDistanceModel('exponential')
  })

  audioLoader.load('./sound/rebirthMP3.mp3', function (buffer) {
    rebirthMusic.setBuffer(buffer)
    rebirthMusic.setRefDistance(300)
    rebirthMusic.setRolloffFactor(5)
    rebirthMusic.setMaxDistance(20)
    rebirthMusic.setDistanceModel('exponential')
  })

  // audioLoader.load('./sound/bigFreedaMP3.mp3', function (buffer) {
  //   bigFreedaMusic.setBuffer(buffer)
  //   bigFreedaMusic.setRefDistance(300)
  //   bigFreedaMusic.setRolloffFactor(5)
  //   bigFreedaMusic.setMaxDistance(20)
  //   bigFreedaMusic.setDistanceModel('exponential')
  // })

  // audioLoader.load('./sound/bigBoiMP3.mp3', function (buffer) {
  //   bigBoiMusic.setBuffer(buffer)
  //   bigBoiMusic.setRefDistance(300)
  //   bigBoiMusic.setRolloffFactor(5)
  //   bigBoiMusic.setMaxDistance(20)
  //   bigBoiMusic.setDistanceModel('exponential')
  // })

  audioLoader.load('./sound/gratefulDeadMP3.mp3', function (buffer) {
    gratefulDeadMusic.setBuffer(buffer)
    gratefulDeadMusic.setRefDistance(15)
    gratefulDeadMusic.setRolloffFactor(15)
    gratefulDeadMusic.setMaxDistance(20)
    gratefulDeadMusic.setDistanceModel('exponential')
    gratefulDeadMusic.setVolume(.05)
  })
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

function raycast(){
  window.addEventListener('click', (event) => {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1
		pointer.y = -(event.clientY / window.innerHeight) * 2 + 1
		raycaster.setFromCamera(pointer, camera)
		const intersects = raycaster.intersectObjects(scene.children)
		for (let i = 0; i < intersects.length; i++) {
			if (intersects[i].object.userData.name == 'target1') {
				gsap.to(intersects[i].object.scale, {
					x: 2,
					y: 2,
					z: 2,
					duration: 2,
					ease: 'power3.inOut',
          onComplete: () => {
            gsap.to(intersects[i].object.scale, {
                x: 1, 
                y: 1,
                z: 1,
                duration: 2, 
                ease: 'power3.inOut',
                delay: 5, 
            });
        } 
        })
        intersects[i].object.traverse((child) => {
          if (child instanceof THREE.PositionalAudio){
            if (soundPlaying && soundPlaying.isPlaying){
              soundPlaying.stop();
            }
          if(!child.isPlaying){
            child.play()
            soundPlaying = child
          }
        }
      })
    }
    if (intersects[i].object.userData.name == 'target2') {
      gsap.to(intersects[i].object.scale, {
        x: 2,
        y: 2,
        z: 2,
        duration: 2,
        ease: 'power3.inOut',
        onComplete: () => {
          gsap.to(intersects[i].object.scale, {
              x: 1, 
              y: 1,
              z: 1,
              duration: 2, 
              ease: 'power3.inOut',
              delay: 5, 
          });
      }
      })
      intersects[i].object.traverse((child) => {
        if (child instanceof THREE.PositionalAudio){
          if (soundPlaying && soundPlaying.isPlaying){
            soundPlaying.stop();
          }
        if(!child.isPlaying){
          child.play()
          soundPlaying = child
        }
      }
    })
    }
    if (intersects[i].object.userData.name == 'target3') {
      gsap.to(intersects[i].object.scale, {
        x: 2,
        y: 2,
        z: 2,
        duration: 2,
        ease: 'power3.inOut',
        onComplete: () => {
          gsap.to(intersects[i].object.scale, {
              x: 1, 
              y: 1,
              z: 1,
              duration: 2, 
              ease: 'power3.inOut',
              delay: 5, 
          });
      }
      })
      intersects[i].object.traverse((child) => {
        if (child instanceof THREE.PositionalAudio){
          if (soundPlaying && soundPlaying.isPlaying){
            soundPlaying.stop();
          }
        if(!child.isPlaying){
          child.play()
          soundPlaying = child
        }
      }
    })
    }
    if (intersects[i].object.userData.name == 'target4') {
      gsap.to(intersects[i].object.scale, {
        x: 2,
        y: 2,
        z: 2,
        duration: 2,
        ease: 'power3.inOut',
        onComplete: () => {
          gsap.to(intersects[i].object.scale, {
              x: 1, 
              y: 1,
              z: 1,
              duration: 2, 
              ease: 'power3.inOut',
              delay: 5, 
          });
      }
      })
      intersects[i].object.traverse((child) => {
        if (child instanceof THREE.PositionalAudio){
          if (soundPlaying && soundPlaying.isPlaying){
            soundPlaying.stop();
          }
        if(!child.isPlaying){
          child.play()
          soundPlaying = child
        }
      }
    })
    }
    if (intersects[i].object.userData.name == 'target5') {
      gsap.to(intersects[i].object.scale, {
        x: 2,
        y: 2,
        z: 2,
        duration: 2,
        ease: 'power3.inOut',
        onComplete: () => {
          gsap.to(intersects[i].object.scale, {
              x: 1, 
              y: 1,
              z: 1,
              duration: 2, 
              ease: 'power3.inOut',
              delay: 5, 
          });
      }
      })
      intersects[i].object.traverse((child) => {
        if (child instanceof THREE.PositionalAudio){
          if (soundPlaying && soundPlaying.isPlaying){
            soundPlaying.stop();
          }
        if(!child.isPlaying){
          child.play()
          soundPlaying = child
        }
      }
    })
    }
    if (intersects[i].object.userData.name == 'target6') {
      gsap.to(intersects[i].object.scale, {
        x: 0.5,
        y: 0.5,
        z: 0.5,
        duration: 2,
        ease: 'power3.inOut',
        onComplete: () => {
          gsap.to(intersects[i].object.scale, {
              x: 1, 
              y: 1,
              z: 1,
              duration: 2, 
              ease: 'power3.inOut',
              delay: 5, 
          });
      }
      })
      intersects[i].object.traverse((child) => {
        if (child instanceof THREE.PositionalAudio){
          if (soundPlaying && soundPlaying.isPlaying){
            soundPlaying.stop();
          }
        if(!child.isPlaying){
          child.play()
          soundPlaying = child
        }
      }
    })
    }
  }
});
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
  meshes.oteil
  meshes.trumpet.rotation.y += 0.009
  meshes.oteil.rotation.y += 0.009
  meshes.rebirth.rotation.y += 0.009
  meshes.beatsAntique.rotation.y += 0.009
  meshes.bigBoi.rotation.y += 0.009
  // meshes.bigFreeda.rotation.x += 0.009

  // meshes.trumpet.rotation.x += 0.009
  meshes.discoBall.rotation.y += 0.009

  renderer.render(scene, camera)
}

