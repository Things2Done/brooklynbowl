import {
    BoxGeometry,
    MeshBasicMaterial,
    MeshStandardMaterial,
    Mesh,
    TextureLoader,
    MeshPhysicalMaterial,
    MeshPhongMaterial,
    MeshMatcapMaterial,
    AnimationMixer,
} from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const loader = new TextureLoader()
const modelLoader = new GLTFLoader()

export const danceFloor = () => {
    // const color = loader.load('./wood/Wood_020_basecolor.jpg')
    // const displace = loader.load('./wood/Wood_020_height.png')
    // const normal = loader.load('./wood/Wood_Barrel_Top_001_normal.jpg')
    // const roughness = loader.load('./wood/Wood_020_roughness.jpg')
    // const occ = loader.load('./wood/Wood_020_ambientOcclusion.jpg')


    // const color = loader.load('./wood/Wood_Barrel_Top_001_basecolor.jpg')
    // const displace = loader.load('./wood/Wood_Barrel_Top_001_height.png')
    // const normal = loader.load('./wood/Wood_Barrel_Top_001_normal.jpg')
    // const roughness = loader.load('./wood/Wood_Barrel_Top_001_opacity.jpg')
    // const occ = loader.load('./wood/Wood_Barrel_Top_001_ambientOcclusion.jpg')

    const color = loader.load('./wood/Wood_Floor_012_basecolor.jpg')
    const displace = loader.load('./wood/Wood_012_height.png')
    const normal = loader.load('./wood/Wood_Floor_012_normal.jpg')
    const roughness = loader.load('./wood/Wood_Floor_012_roughness.jpg')
    const occ = loader.load('./wood/Wood_Floor_012_ambientOcclusion.jpg')

    
    const wall = new BoxGeometry(100, .2, 80)
       const wallMaterial = new MeshBasicMaterial({ 
        map: color,
        displacementMap: displace,
        normalMap: normal,
        roughnessMap: roughness,
        aoMap: occ,
    })
    const wallMesh = new Mesh(wall, wallMaterial)
    wallMesh.position.set(-100, -60, -40)
    return wallMesh
}

export const stageSide = () => {
    const color = loader.load('Brick_Wall_019_basecolor.jpg')
    const displace = loader.load('Brick_Wall_019_height.png')
    const normal = loader.load('Brick_Wall_019_normal.jpg')
    const roughness = loader.load('Brick_Wall_019_roughness.jpg')
    const occ = loader.load('Brick_Wall_019_ambientOcclusion.jpg')

    const wall = new BoxGeometry(2, 80, 130)
       const wallMaterial = new MeshBasicMaterial({ 
        map: color,
        displacementMap: displace,
        normalMap: normal,
        roughnessMap: roughness,
        aoMap: occ,
    })
    const wallMesh = new Mesh(wall, wallMaterial)
    wallMesh.position.set(-150, -20, -65)
    return wallMesh
}


export const stageSide2 = () => {
    const color = loader.load('Brick_Wall_019_basecolor.jpg')
    const displace = loader.load('Brick_Wall_019_height.png')
    const normal = loader.load('Brick_Wall_019_normal.jpg')
    const roughness = loader.load('Brick_Wall_019_roughness.jpg')
    const occ = loader.load('Brick_Wall_019_ambientOcclusion.jpg')

    const wall = new BoxGeometry(2, 80, 130)
       const wallMaterial = new MeshBasicMaterial({ 
        map: color,
        displacementMap: displace,
        normalMap: normal,
        roughnessMap: roughness,
        aoMap: occ,
    })
    const wallMesh = new Mesh(wall, wallMaterial)
    wallMesh.position.set(-50, -20, -65)
    return wallMesh
}

export const bowlingAlley = () => {
    return new Promise((resolve, reject) => {
        //using model loader we're going to async load a 3d model from path
        modelLoader.load(
            //template - replace model link below
            '/Bowling-Alley.glb',
            //this function below is called if our model is loaded correctly
            (gltf) => {
                const modelMixer = new AnimationMixer(gltf.scene)
                const newMaterial = new MeshPhongMaterial({
                    // matcap: tLoader.load('/wood/Wood_020_height.png')
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

export const drummer = () => {
    const texture = loader.load('./photos/drummer.jpg')

    const wall = new BoxGeometry(30, 20, 2)
       const wallMaterial = new MeshBasicMaterial({ 
        map: texture
    })
    const wallMesh = new Mesh(wall, wallMaterial)
    wallMesh.position.set(-100, -50, -60)
    return wallMesh
}

export const guitar = () => {
    const texture = loader.load('./photos/guitar2.jpg')

    const wall = new BoxGeometry(15, 15, 2)
       const wallMaterial = new MeshBasicMaterial({ 
        map: texture
    })
    const wallMesh = new Mesh(wall, wallMaterial)
    wallMesh.position.set(-80, -52, -25)
    return wallMesh
}

export const keyboard = () => {
    const texture = loader.load('./photos/keyboard.jpg')

    const wall = new BoxGeometry(15, 10, 2)
       const wallMaterial = new MeshBasicMaterial({ 
        map: texture
    })
    const wallMesh = new Mesh(wall, wallMaterial)
    wallMesh.position.set(-65, -55, -8)
    wallMesh.rotation.set(0,40,0)
    return wallMesh
}

export const trumpet = () => {
    const texture = loader.load('./photos/trumpet1.jpg')

    const wall = new BoxGeometry(25, 20, 2)
       const wallMaterial = new MeshBasicMaterial({ 
        map: texture
    })
    const wallMesh = new Mesh(wall, wallMaterial)
    wallMesh.position.set(-125, -50, -12)
    wallMesh.rotation.set(0,-40,0)
    return wallMesh
}