import {
    BoxGeometry,
    MeshBasicMaterial,
    MeshStandardMaterial,
    Mesh,
    TextureLoader,
    MeshPhysicalMaterial,
    MeshPhongMaterial,
    AnimationMixer,
    MeshMatcapMaterial,
    SphereGeometry,
} from 'three'
import * as THREE from 'three'
// import { TextGeometry } from 'three/addons/geometries/TextGeometry.js'
// import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const loader = new TextureLoader()
const modelLoader = new GLTFLoader()
// const fontLoader = new FontLoader()

export const sky = () => {
    // const color = loader.load('Brick_Wall_019_basecolor.jpg')
    // const normal = loader.load('Brick_Wall_019_normal.jpg')
    // const roughness = loader.load('Brick_Wall_019_roughness.jpg')
    // const occ = loader.load('Brick_Wall_019_ambientOcclusion.jpg')

    const skyTexture = loader.load('./photos/sky.jpg')

    const wall = new SphereGeometry(40,32,16,0,6.283185307179586,0,3.141592653589793)
    const wallMaterial = new MeshPhysicalMaterial({
        map: skyTexture,
        // normalMap: normal,
        // roughnessMap: roughness,
        // aoMap: occ,
        side: THREE.BackSide
    })
    const wallMesh = new Mesh(wall, wallMaterial)
    wallMesh.position.set(-1, -1, -10)
    return wallMesh
}

export const frontWall = () => {
    const color = loader.load('Brick_Wall_019_basecolor.jpg')
    const normal = loader.load('Brick_Wall_019_normal.jpg')
    const roughness = loader.load('Brick_Wall_019_roughness.jpg')
    const occ = loader.load('Brick_Wall_019_ambientOcclusion.jpg')

    // const color = loader.load('Brick_Wall_011_COLOR.jpg')
    // const displace = loader.load('Brick_Wall_011_DISP.png')
    // const normal = loader.load('Brick_Wall_011_NORM.jpg')
    // const roughness = loader.load('Brick_Wall_011_ROUGH.jpg')
    // const occ = loader.load('Brick_Wall_011_OCC.jpg')

    const wall = new BoxGeometry(10, 4, 2)
    const wallMaterial = new MeshPhysicalMaterial({
        map: color,
        normalMap: normal,
        roughnessMap: roughness,
        aoMap: occ,
    })
    const wallMesh = new Mesh(wall, wallMaterial)
    wallMesh.position.set(-5, -1, 0)
    return wallMesh
}

export const sideWall = () => {
    const color = loader.load('Brick_Wall_019_basecolor.jpg')
    const normal = loader.load('Brick_Wall_019_normal.jpg')
    const roughness = loader.load('Brick_Wall_019_roughness.jpg')
    const occ = loader.load('Brick_Wall_019_ambientOcclusion.jpg')

    // const color = loader.load('Brick_Wall_011_COLOR.jpg')
    // const displace = loader.load('Brick_Wall_011_DISP.png')
    // const normal = loader.load('Brick_Wall_011_NORM.jpg')
    // const roughness = loader.load('Brick_Wall_011_ROUGH.jpg')
    // const occ = loader.load('Brick_Wall_011_OCC.jpg')

    const wall = new BoxGeometry(2, 4, 18)
    const wallMaterial = new MeshPhysicalMaterial({
        map: color,
        normalMap: normal,
        roughnessMap: roughness,
        aoMap: occ,
    })
    const wallMesh = new Mesh(wall, wallMaterial)
    wallMesh.position.set(-1, -1, -10)
    return wallMesh
}

export const blackFrontWall = () => {
    const logo = loader.load('/photos/BkBowlLogo.png')


    // const color = loader.load('Brick_Wall_011_COLOR.jpg')
    // const displace = loader.load('Brick_Wall_011_DISP.png')
    // const normal = loader.load('Brick_Wall_011_NORM.jpg')
    // const roughness = loader.load('Brick_Wall_011_ROUGH.jpg')
    // const occ = loader.load('Brick_Wall_011_OCC.jpg')

    const wall = new BoxGeometry(5, 4, .5)
    const wallMaterial = new MeshBasicMaterial({
        map: logo
        // map: color,
        // displacementMap: displace,
        // normalMap: normal,
        // roughnessMap: roughness,
        // aoMap: occ,
    })
    const wallMesh = new Mesh(wall, wallMaterial)
    wallMesh.position.set(6, -1, .5)
    return wallMesh
}

export const bkBrewery = () => {
    const logo = loader.load('/photos/BkBrewery.jpg')


    // const color = loader.load('Brick_Wall_011_COLOR.jpg')
    // const displace = loader.load('Brick_Wall_011_DISP.png')
    // const normal = loader.load('Brick_Wall_011_NORM.jpg')
    // const roughness = loader.load('Brick_Wall_011_ROUGH.jpg')
    // const occ = loader.load('Brick_Wall_011_OCC.jpg')

    const wall = new BoxGeometry(15, 15, .5)
    const wallMaterial = new MeshBasicMaterial({
        map: logo
        // map: color,
        // displacementMap: displace,
        // normalMap: normal,
        // roughnessMap: roughness,
        // aoMap: occ,
    })
    const wallMesh = new Mesh(wall, wallMaterial)
    wallMesh.position.set(16, -1, .5)
    return wallMesh
}

export const blackSideWall = () => {
    const color = loader.load('Brick_Wall_019_basecolor.jpg')
    const displace = loader.load('Brick_Wall_019_height.png')
    const normal = loader.load('Brick_Wall_019_normal.jpg')
    const roughness = loader.load('Brick_Wall_019_roughness.jpg')
    const occ = loader.load('Brick_Wall_019_ambientOcclusion.jpg')

    // const color = loader.load('Brick_Wall_011_COLOR.jpg')
    // const displace = loader.load('Brick_Wall_011_DISP.png')
    // const normal = loader.load('Brick_Wall_011_NORM.jpg')
    // const roughness = loader.load('Brick_Wall_011_ROUGH.jpg')
    // const occ = loader.load('Brick_Wall_011_OCC.jpg')

    const wall = new BoxGeometry(.5, 4, 18)
    const wallMaterial = new MeshPhysicalMaterial({
        color: 0x000322
        // map: color,
        // displacementMap: displace,
        // normalMap: normal,
        // roughnessMap: roughness,
        // aoMap: occ,
    })
    const wallMesh = new Mesh(wall, wallMaterial)
    wallMesh.position.set(3.75, -1, -8.5)
    return wallMesh
}

export const blackMiniWall = () => {
    const color = loader.load('Brick_Wall_019_basecolor.jpg')
    const displace = loader.load('Brick_Wall_019_height.png')
    const normal = loader.load('Brick_Wall_019_normal.jpg')
    const roughness = loader.load('Brick_Wall_019_roughness.jpg')
    const occ = loader.load('Brick_Wall_019_ambientOcclusion.jpg')

    // const color = loader.load('Brick_Wall_011_COLOR.jpg')
    // const displace = loader.load('Brick_Wall_011_DISP.png')
    // const normal = loader.load('Brick_Wall_011_NORM.jpg')
    // const roughness = loader.load('Brick_Wall_011_ROUGH.jpg')
    // const occ = loader.load('Brick_Wall_011_OCC.jpg')

    const wall = new BoxGeometry(.5, 4, 3)
    const wallMaterial = new MeshPhysicalMaterial({
        color: 0x000322
        // map: color,
        // displacementMap: displace,
        // normalMap: normal,
        // roughnessMap: roughness,
        // aoMap: occ,
    })
    const wallMesh = new Mesh(wall, wallMaterial)
    wallMesh.position.set(-9.8, -1, -2.5)
    return wallMesh
}

export const sideDoor = () => {
    // const color = loader.load('./Textures/ceiling/Tiles_011_COLOR.jpg')
    // const displace = loader.load('./Textures/ceiling/Tiles_011_DISP.png')
    // const normal = loader.load('./Textures/ceiling/Tiles_011_NORM.jpg')
    // const roughness = loader.load('./Textures/ceiling/Tiles_011_ROUGH.jpg')
    // const occ = loader.load('./Textures/ceiling/Tiles_011_OCC.jpg')

    const wall = new BoxGeometry(15, 4, .5)
    const wallMaterial = new MeshBasicMaterial({
        // map: color,
        // displacementMap: displace,
        // normalMap: normal,
        // roughnessMap: roughness,
        // aoMap: occ,
        color: 0x000000
    })
    const wallMesh = new Mesh(wall, wallMaterial)
    wallMesh.position.set(-17, -1, -4.25)
    return wallMesh
}

export const sideDoorTop = () => {
    const color = loader.load('Brick_Wall_019_basecolor.jpg')
    const normal = loader.load('Brick_Wall_019_normal.jpg')
    const roughness = loader.load('Brick_Wall_019_roughness.jpg')
    const occ = loader.load('Brick_Wall_019_ambientOcclusion.jpg')

    const wall = new BoxGeometry(15, 1.5, .5)
    const wallMaterial = new MeshPhysicalMaterial({
        map: color,
        normalMap: normal,
        roughnessMap: roughness,
        aoMap: occ,
    })
    const wallMesh = new Mesh(wall, wallMaterial)
    wallMesh.position.set(-17, 1.8, -4.25)
    return wallMesh
}

export const pillar = () => {
    const color = loader.load('Brick_Wall_019_basecolor.jpg')
    const displace = loader.load('Brick_Wall_019_height.png')
    const normal = loader.load('Brick_Wall_019_normal.jpg')
    const roughness = loader.load('Brick_Wall_019_roughness.jpg')
    const occ = loader.load('Brick_Wall_019_ambientOcclusion.jpg')

    const box = new BoxGeometry(1.5, 6, 2)
    const boxMaterial = new MeshPhysicalMaterial({
        map: color,
        // displacementMap: displace,
        // normalMap: normal,
        // roughnessMap: roughness,
        // aoMap: occ,
    })
    const boxMesh = new Mesh(box, boxMaterial)
    boxMesh.position.set(-.75, 4, 0)
    return boxMesh
}


export const signVert = () => {
    // const color = loader.load('Brick_Wall_019_basecolor.jpg')
    // const displace = loader.load('Brick_Wall_019_height.png')
    // const normal = loader.load('Brick_Wall_019_normal.jpg')
    // const roughness = loader.load('Brick_Wall_019_roughness.jpg')
    // const occ = loader.load('Brick_Wall_019_ambientOcclusion.jpg')

    const box = new BoxGeometry(.75, 4.4, .5)
    const boxMaterial = new MeshBasicMaterial({
        color: 0x6699CC
        //  map: color,
        // displacementMap: displace,
        // normalMap: normal,
        // roughnessMap: roughness,
        // aoMap: occ,
    })
    const boxMesh = new Mesh(box, boxMaterial)
    boxMesh.position.set(.91, 4.2, 0)
    return boxMesh
}

export const signHor = () => {
    // const color = loader.load('Brick_Wall_019_basecolor.jpg')
    // const displace = loader.load('Brick_Wall_019_height.png')
    // const normal = loader.load('Brick_Wall_019_normal.jpg')
    // const roughness = loader.load('Brick_Wall_019_roughness.jpg')
    // const occ = loader.load('Brick_Wall_019_ambientOcclusion.jpg')

    const box = new BoxGeometry(1.25, .5, 1)
    const boxMaterial = new MeshBasicMaterial({
        color: 0x6699CC
        //  map: color,
        // displacementMap: displace,
        // normalMap: normal,
        // roughnessMap: roughness,
        // aoMap: occ,
    })
    const boxMesh = new Mesh(box, boxMaterial)
    boxMesh.position.set(.65, 2.22, 0)
    return boxMesh
}


export const ground = () => {
    const color = loader.load('/Textures/Concrete/Concrete_Panels_001_COLOR.jpg')
    const normal = loader.load('/Textures/Concrete/Concrete_Panels_001_NORM.jpg')
    const roughness = loader.load('/Textures/Concrete/Concrete_Panels_001_ROUGH.jpg')
    const occ = loader.load('/Textures/Concrete/Concrete_Panels_001_OCC.jpg')

    const box = new BoxGeometry(50, .2, 25)
    const boxMaterial = new MeshPhysicalMaterial({
        // color:0x6699CC
        map: color,
        normalMap: normal,
        roughnessMap: roughness,
        aoMap: occ,
    })
    const boxMesh = new Mesh(box, boxMaterial)
    boxMesh.position.set(0, -3, 0)
    return boxMesh
}

export const entryGround = () => {
    const color = loader.load('/Textures/Concrete/Concrete_Panels_001_COLOR.jpg')
    const normal = loader.load('/Textures/Concrete/Concrete_Panels_001_NORM.jpg')
    const roughness = loader.load('/Textures/Concrete/Concrete_Panels_001_ROUGH.jpg')
    const occ = loader.load('/Textures/Concrete/Concrete_Panels_001_OCC.jpg')

    const box = new BoxGeometry(4, .2, 10)
    const boxMaterial = new MeshPhysicalMaterial({

        map: color,
        normalMap: normal,
        roughnessMap: roughness,
        aoMap: occ,
    })
    const boxMesh = new Mesh(box, boxMaterial)
    boxMesh.position.set(2, -3, -17.5)
    return boxMesh
}

export const curtainModel = () => {
    return new Promise((resolve, reject) => {

        // const texture = , (texture) => {
            //using model loader we're going to async load a 3d model from path
            modelLoader.load(
                //template - replace model link below
                // './models/Curtains/source/curtains-animated-512.glb',
                './models/curtains.glb',
                //this function below is called if our model is loaded correctly
                (gltf) => {
                    const modelMixer = new AnimationMixer(gltf.scene)
                    const newMaterial = new MeshPhongMaterial({
                        map: loader.load('./models/Curtains/textures/A23DTEX_Albedo_1.jpeg'),
                        // roughnessMap: loader.load('./models/Curtains/textures/A23DTEX_Roughness_2@channels=G.png'),
                        // normalMap: loader.load('Metal034_1K_NormalGL_3.jpeg')
                    })
                    gltf.scene.traverse((child) => {
                        if (child.isMesh) {
                            child.material = newMaterial
                        }
                    })

                    gltf.animations.forEach((clip) => {
                        modelMixer.clipAction(clip).play()
                    })
                    resolve({ scene: gltf.scene, mixer: modelMixer })
                },
                undefined,
                (error) => {
                    console.error(error)
                    reject(error)
                }
            )

        })

    }

    export const curtainModel2 = () => {
        return new Promise((resolve, reject) => {
    
            // const texture = , (texture) => {
                //using model loader we're going to async load a 3d model from path
                modelLoader.load(
                    //template - replace model link below
                    // './models/Curtains/source/curtains-animated-512.glb',
                    './models/curtains.glb',
                    //this function below is called if our model is loaded correctly
                    (gltf) => {
                        const modelMixer = new AnimationMixer(gltf.scene)
                        const newMaterial = new MeshPhongMaterial({
                            map: loader.load('./models/Curtains/textures/A23DTEX_Albedo_1.jpeg'),
                            // roughnessMap: loader.load('./models/Curtains/textures/A23DTEX_Roughness_2@channels=G.png'),
                            // normalMap: loader.load('Metal034_1K_NormalGL_3.jpeg')
                        })
                        gltf.scene.traverse((child) => {
                            if (child.isMesh) {
                                child.material = newMaterial
                            }
                        })
    
                        gltf.animations.forEach((clip) => {
                            modelMixer.clipAction(clip).play()
                        })
                        resolve({ scene: gltf.scene, mixer: modelMixer })
                    },
                    undefined,
                    (error) => {
                        console.error(error)
                        reject(error)
                    }
                )
    
            })
    
        }
    
