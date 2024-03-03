import { AmbientLight, DirectionalLight } from 'three';

export const addLight = () => {
    let light = new DirectionalLight(0xffffff, 1)
    light.position.set(1, 1, 1)
    return light
}

export const ambientLight = () => {
    let light = new AmbientLight(0xffffff, 1)
    light.position.set(-5, 3, 0)
    return light
}