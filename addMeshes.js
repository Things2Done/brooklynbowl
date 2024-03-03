import {
    BoxGeometry,
    MeshBasicMaterial,
    MeshStandardMaterial,
    Mesh,
    TextureLoader,
    MeshPhysicalMaterial,
    MeshPhongMaterial,
} from 'three'
// import { TextGeometry } from 'three/addons/geometries/TextGeometry.js'
// import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'

const loader = new TextureLoader()
// const fontLoader = new FontLoader()

export const frontWall = () => {
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

    const wall = new BoxGeometry(10, 4, 2)
       const wallMaterial = new MeshBasicMaterial({ 
        map: color,
        displacementMap: displace,
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
    const displace = loader.load('Brick_Wall_019_height.png')
    const normal = loader.load('Brick_Wall_019_normal.jpg')
    const roughness = loader.load('Brick_Wall_019_roughness.jpg')
    const occ = loader.load('Brick_Wall_019_ambientOcclusion.jpg')

    // const color = loader.load('Brick_Wall_011_COLOR.jpg')
    // const displace = loader.load('Brick_Wall_011_DISP.png')
    // const normal = loader.load('Brick_Wall_011_NORM.jpg')
    // const roughness = loader.load('Brick_Wall_011_ROUGH.jpg')
    // const occ = loader.load('Brick_Wall_011_OCC.jpg')

    const wall = new BoxGeometry(2, 4, 18)
       const wallMaterial = new MeshBasicMaterial({ 
        map: color,
        displacementMap: displace,
        normalMap: normal,
        roughnessMap: roughness,
        aoMap: occ,
    })
    const wallMesh = new Mesh(wall, wallMaterial)
    wallMesh.position.set(-1, -1, -10)
    return wallMesh
}

export const blackFrontWall = () => {
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

    const wall = new BoxGeometry(5, 4, .5)
       const wallMaterial = new MeshBasicMaterial({ 
        color: 0x000322
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
       const wallMaterial = new MeshBasicMaterial({ 
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

export const pillar = () => {
    const color = loader.load('Brick_Wall_019_basecolor.jpg')
    const displace = loader.load('Brick_Wall_019_height.png')
    const normal = loader.load('Brick_Wall_019_normal.jpg')
    const roughness = loader.load('Brick_Wall_019_roughness.jpg')
    const occ = loader.load('Brick_Wall_019_ambientOcclusion.jpg')

    const box = new BoxGeometry(1.5, 6, 2)
       const boxMaterial = new MeshBasicMaterial({ 
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

    const box = new BoxGeometry(.75, 3, .5)
       const boxMaterial = new MeshBasicMaterial({ 
        color:0x6699CC
        //  map: color,
        // displacementMap: displace,
        // normalMap: normal,
        // roughnessMap: roughness,
        // aoMap: occ,
        })
    const boxMesh = new Mesh(box, boxMaterial)
    boxMesh.position.set(.91, 4, 0)
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
        color:0x6699CC
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


// export const signVertText = () => {
//     return new Promise((resolve, reject) =>{
//         fontLoader.load('fonts/helvetiker_bold.typeface.json', function (font){
//             const textGeometry = new TextGeometry( 'BOWLIING',{
//                 font:font,
//                 // size:40,
//                 // height:5, 
//             })
//             const textMaterial = new MeshBasicMaterial({
//                 color:0x6699CC
//             })
//             const textMesh = new Mesh(textGeometry, textMaterial)
//             // signVertText.position.set()
//     resolve (textMesh)
//     undefined, function (error){reject(error)}    
//         })
//     })
// }

export const ground = () => {
    // const color = loader.load('Brick_Wall_019_basecolor.jpg')
    // const displace = loader.load('Brick_Wall_019_height.png')
    // const normal = loader.load('Brick_Wall_019_normal.jpg')
    // const roughness = loader.load('Brick_Wall_019_roughness.jpg')
    // const occ = loader.load('Brick_Wall_019_ambientOcclusion.jpg')

    const box = new BoxGeometry(50, .2, 10)
       const boxMaterial = new MeshBasicMaterial({ 
        color:0x6699CC
        //  map: color,
        // displacementMap: displace,
        // normalMap: normal,
        // roughnessMap: roughness,
        // aoMap: occ,
        })
    const boxMesh = new Mesh(box, boxMaterial)
    boxMesh.position.set(0, -3, 0)
    return boxMesh
}

export const entryGround = () => {
    // const color = loader.load('Brick_Wall_019_basecolor.jpg')
    // const displace = loader.load('Brick_Wall_019_height.png')
    // const normal = loader.load('Brick_Wall_019_normal.jpg')
    // const roughness = loader.load('Brick_Wall_019_roughness.jpg')
    // const occ = loader.load('Brick_Wall_019_ambientOcclusion.jpg')

    const box = new BoxGeometry(4, .2, 25)
       const boxMaterial = new MeshBasicMaterial({ 
        color:0xff0000
        // 0x6699CC
        //  map: color,
        // displacementMap: displace,
        // normalMap: normal,
        // roughnessMap: roughness,
        // aoMap: occ,
        })
    const boxMesh = new Mesh(box, boxMaterial)
    boxMesh.position.set(2, -3, -17.5)
    return boxMesh
}
