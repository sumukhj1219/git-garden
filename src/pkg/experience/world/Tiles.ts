import Experience from "../Experience";
import * as THREE from "three"

const TILE_POSITIONS = [
  { x: 0,  y: 0.01, z: 8 },
  { x: -3,  y: 0.01, z: 7 },
  { x: -4,  y: 0.01, z: 6 },
  { x: -6,  y: 0.01, z: 5 },
  { x: -8,  y: 0.01, z: 4 },
  { x: 4, y: 0.01, z: 3 },
  { x: 3, y: 0.01, z: 2 },
  { x: 2, y: 0.01, z: 1 },
  { x: 1, y: 0.01, z: 0 },
]


export default class Tiles {
    private experience!: Experience;
    private scene!: THREE.Scene;

    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.createTiles()
    }

    private createTiles() {
        const tilesGeo = new THREE.PlaneGeometry(1.5, 1.5)
        const tilesMat = new THREE.MeshStandardMaterial({
            color: new THREE.Color("orange"),
            side: THREE.DoubleSide,
            metalness:0.5
        })

        TILE_POSITIONS.map((pos)=>{

            const mesh = new THREE.Mesh(tilesGeo, tilesMat)
            mesh.rotation.x = -Math.PI / 2
    
            mesh.position.set(pos.x, pos.y, pos.z)
            this.scene.add(mesh)
        })
    }
}