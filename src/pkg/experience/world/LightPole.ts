import * as THREE from "three";
import Experience from "../Experience";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

const LIGHTPOLE_POSITIONS = [
    {
        x: 5, y: 0, z: 0
    },

    {
        x: 5, y: 0, z: 20
    },
]

export default class LightPole {
    private experience!: Experience;
    private scene!: THREE.Scene;

    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene

        this.createLightPole()
    }

    private createLightPole() {
        const loader = new GLTFLoader()
        loader.load("/models/emitter.glb", (glb) => {
            const model = glb.scene

            LIGHTPOLE_POSITIONS.forEach((pos) => {
                const clone = model.clone()
                clone.position.copy(pos)
                clone.scale.setScalar(1.5)
                clone.traverse((node: any) => {
                   if (node.isMesh && node.name.includes("Pole")) {
                        node.castShadow = true
                        node.material = new THREE.MeshToonMaterial({
                            color: "#2b0703"
                        })
                    }
                })
                this.scene.add(clone)
            })
        })
    }
}