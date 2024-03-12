import {
    BoxGeometry,
    SphereGeometry,
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
    const color = loader.load('./wood/Wood_Floor_012_basecolor.jpg')
    const displace = loader.load('./wood/Wood_012_height.png')
    const normal = loader.load('./wood/Wood_Floor_012_normal.jpg')
    const roughness = loader.load('./wood/Wood_Floor_012_roughness.jpg')
    const occ = loader.load('./wood/Wood_Floor_012_ambientOcclusion.jpg')


    const wall = new BoxGeometry(130, .2, 300)
    const wallMaterial = new MeshStandardMaterial({
        map: color,
        displacementMap: displace,
        normalMap: normal,
        roughnessMap: roughness,
        aoMap: occ,
    })
    const wallMesh = new Mesh(wall, wallMaterial)
    wallMesh.position.set(-100, -280, 55)
    return wallMesh
}

export const stageLip = () => {
    // const logo = loader.load('/photos/BkBowlLogo.png')

    const wall = new BoxGeometry(130, 20, 2)
    const wallMaterial = new MeshStandardMaterial({
        color: 0x000000,
        // map:logo,
    })
    const wallMesh = new Mesh(wall, wallMaterial)
    wallMesh.position.set(-100, -270, 0)
    return wallMesh
}

export const stageFloor = () => {
    const color = loader.load('./wood/Wood_Floor_012_basecolor.jpg')
    const displace = loader.load('./wood/Wood_012_height.png')
    const normal = loader.load('./wood/Wood_Floor_012_normal.jpg')
    const roughness = loader.load('./wood/Wood_Floor_012_roughness.jpg')
    const occ = loader.load('./wood/Wood_Floor_012_ambientOcclusion.jpg')


    const wall = new BoxGeometry(130, .2, 100)
    const wallMaterial = new MeshStandardMaterial({
        map: color,
        displacementMap: displace,
        normalMap: normal,
        roughnessMap: roughness,
        aoMap: occ,
    })
    const wallMesh = new Mesh(wall, wallMaterial)
    wallMesh.position.set(-100, -260, -50)
    return wallMesh
}

export const stageSide = () => {
    const color = loader.load('Brick_Wall_019_basecolor.jpg')
    const displace = loader.load('Brick_Wall_019_height.png')
    const normal = loader.load('Brick_Wall_019_normal.jpg')
    const roughness = loader.load('Brick_Wall_019_roughness.jpg')
    const occ = loader.load('Brick_Wall_019_ambientOcclusion.jpg')

    const wall = new BoxGeometry(5, 130, 330)
    const wallMaterial = new MeshStandardMaterial({
        map: color,
        normalMap: normal,
        roughnessMap: roughness,
        aoMap: occ,
    })
    const wallMesh = new Mesh(wall, wallMaterial)
    wallMesh.position.set(-165, -220, 55)
    return wallMesh
}


export const stageSide2 = () => {
    // const color = loader.load('Brick_Wall_019_basecolor.jpg')
    // const displace = loader.load('Brick_Wall_019_height.png')
    // const normal = loader.load('Brick_Wall_019_normal.jpg')
    // const roughness = loader.load('Brick_Wall_019_roughness.jpg')
    // const occ = loader.load('Brick_Wall_019_ambientOcclusion.jpg')

    const color = loader.load('./wood/Wood_Floor_012_basecolor.jpg')
    const displace = loader.load('./wood/Wood_012_height.png')
    const normal = loader.load('./wood/Wood_Floor_012_normal.jpg')
    const roughness = loader.load('./wood/Wood_Floor_012_roughness.jpg')
    const occ = loader.load('./wood/Wood_Floor_012_ambientOcclusion.jpg')

    const wall = new BoxGeometry(2, 33, 330)
    const wallMaterial = new MeshPhysicalMaterial({
        map: color,
        displacementMap: displace,
        normalMap: normal,
        roughnessMap: roughness,
        aoMap: occ,
    })
    const wallMesh = new Mesh(wall, wallMaterial)
    wallMesh.position.set(-35, -265, 55)
    return wallMesh
}

export const ceiling = () => {
    const color = loader.load('./Textures/ceiling/Tiles_011_COLOR.jpg')
    const displace = loader.load('./Textures/ceiling/Tiles_011_DISP.png')
    const normal = loader.load('./Textures/ceiling/Tiles_011_NORM.jpg')
    const roughness = loader.load('./Textures/ceiling/Tiles_011_ROUGH.jpg')
    const occ = loader.load('./Textures/ceiling/Tiles_011_OCC.jpg')


    const wall = new BoxGeometry(400, .2, 400)
    const wallMaterial = new MeshStandardMaterial({
        map: color,
        displacementMap: displace,
        normalMap: normal,
        roughnessMap: roughness,
        aoMap: occ,
        // color: 0x000000
    })
    const wallMesh = new Mesh(wall, wallMaterial)
    wallMesh.position.set(0, -160, 55)
    return wallMesh
}

export const backStage = () => {
    const color = loader.load('Brick_Wall_019_basecolor.jpg')
    const displace = loader.load('Brick_Wall_019_height.png')
    const normal = loader.load('Brick_Wall_019_normal.jpg')
    const roughness = loader.load('Brick_Wall_019_roughness.jpg')
    const occ = loader.load('Brick_Wall_019_ambientOcclusion.jpg')

    const wall = new BoxGeometry(500, 130, 5)
    const wallMaterial = new MeshStandardMaterial({
        map: color,
        normalMap: normal,
        roughnessMap: roughness,
        aoMap: occ,
    })
    const wallMesh = new Mesh(wall, wallMaterial)
    wallMesh.position.set(-55, -220, -97)
    return wallMesh
}

export const backWall = () => {
    const color = loader.load('./Textures/metal/Metal_006_basecolor.jpg')
    const displace = loader.load('./Textures/metal/Metal_006_height.png')
    const normal = loader.load('./Textures/metal/Metal_006_normal.jpg')
    const roughness = loader.load('./Textures/metal/Metal_006_roughness.jpg')
    const occ = loader.load('./Textures/metal/Metal_006_ambientOcclusion.jpg')

    // const color = loader.load('Brick_Wall_019_basecolor.jpg')
    // const displace = loader.load('Brick_Wall_019_height.png')
    // const normal = loader.load('Brick_Wall_019_normal.jpg')
    // const roughness = loader.load('Brick_Wall_019_roughness.jpg')
    // const occ = loader.load('Brick_Wall_019_ambientOcclusion.jpg')

    const wall = new BoxGeometry(500, 150, 5)
    const wallMaterial = new MeshStandardMaterial({
        map: color,
        normalMap: normal,
        roughnessMap: roughness,
        aoMap: occ,
    })
    const wallMesh = new Mesh(wall, wallMaterial)
    wallMesh.position.set(0,-230,210)
    return wallMesh
}


export const farWall = () => {
    const color = loader.load('Brick_Wall_019_basecolor.jpg')
    const displace = loader.load('Brick_Wall_019_height.png')
    const normal = loader.load('Brick_Wall_019_normal.jpg')
    const roughness = loader.load('Brick_Wall_019_roughness.jpg')
    const occ = loader.load('Brick_Wall_019_ambientOcclusion.jpg')

    const wall = new BoxGeometry(5, 130, 340)
    const wallMaterial = new MeshStandardMaterial({
        map: color,
        normalMap: normal,
        roughnessMap: roughness,
        aoMap: occ,
    })
    const wallMesh = new Mesh(wall, wallMaterial)
    wallMesh.position.set(194, -220, 55)
    return wallMesh
}

export const discoBall = () => {
    const color = loader.load('./Textures/discoBall/Disco_Ball_001_basecolor.jpg')
    const displace = loader.load('./Textures/discoBall/Disco_Ball_001_height.png')
    const normal = loader.load('./Textures/discoBall/Disco_Ball_001_normal.jpg')
    const roughness = loader.load('./Textures/discoBall/Disco_Ball_001_roughness.jpg')
    const occ = loader.load('./Textures/discoBall/Disco_Ball_001_ambientOcclusion.jpg')

    const wall = new SphereGeometry(10, 32, 16, 0, Math.PI * 2, 0, Math.PI)
    const wallMaterial = new MeshBasicMaterial({
        map: color,
        normalMap: normal,
        roughnessMap: roughness,
        aoMap: occ,
    })
    const wallMesh = new Mesh(wall, wallMaterial)
    wallMesh.position.set(-100, -170, 50)
    return wallMesh
}



export const drummer = () => {
    const texture = loader.load('./photos/drummer.jpg')

    const wall = new BoxGeometry(30, 20, 2)
    const wallMaterial = new MeshBasicMaterial({
        map: texture
    })
    const wallMesh = new Mesh(wall, wallMaterial)
    wallMesh.position.set(-100, -250, -60)
    return wallMesh
}

export const guitar = () => {
    const texture = loader.load('./photos/guitar2.jpg')

    const wall = new BoxGeometry(15, 15, 2)
    const wallMaterial = new MeshBasicMaterial({
        map: texture
    })
    const wallMesh = new Mesh(wall, wallMaterial)
    wallMesh.position.set(-80, -252, -25)
    return wallMesh
}

export const keyboard = () => {
    const texture = loader.load('./photos/keyboard.jpg')

    const wall = new BoxGeometry(15, 10, 2)
    const wallMaterial = new MeshBasicMaterial({
        map: texture
    })
    const wallMesh = new Mesh(wall, wallMaterial)
    wallMesh.position.set(-65, -255, -8)
    wallMesh.rotation.set(0, 40, 0)
    return wallMesh
}

export const trumpet = () => {
    const texture = loader.load('./photos/trumpet1.jpg')

    const wall = new BoxGeometry(25, 20, 20)
    const wallMaterial = new MeshBasicMaterial({
        map: texture
    })
    const wallMesh = new Mesh(wall, wallMaterial)
    wallMesh.position.set(-125, -250, -12)
    wallMesh.rotation.set(0, -40, 0)
    return wallMesh
}