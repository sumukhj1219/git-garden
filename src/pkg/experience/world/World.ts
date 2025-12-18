import { Scene } from "three";
import Experience from "../Experience";
import * as THREE from "three"
import Environment from "./Environment";
import Resources from "../utils/Resources";
import Terrain from "./Terrain";
import Tree from "./Tree";
import Grass from "./Grass";
import Sky from "./Sky";
import Leaves from "./Leaves";
import Fog from "./Fog";
import Rocks from "./Rocks";
import Lab from "./Lab";
import Player from "./Player";
import Physics from "../Physics";
import Cycle from "./Cycle";
import LightPole from "./LightPole";
import Tiles from "./Tiles";

export default class World {
    private experience!: Experience
    private scene!: Scene
    public environment!: Environment
    public resources!: Resources

    public terrain!: Terrain
    public tree!: Tree
    public grass!: Grass
    public sky!: Sky
    public leaves!: Leaves
    public fog!: Fog
    public rocks!: Rocks
    public lab!: Lab
    public player!: Player
    public physics!: Physics
    public cycle!: Cycle
    public lightPole!: LightPole
    public tiles!: Tiles

    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.physics = this.experience.physics
        this.resources.startLoading()

        this.resources.on("ready", () => {
            this.cycle = new Cycle()
            this.environment = new Environment()

            this.terrain = new Terrain()
            this.grass = new Grass()
            this.tree = new Tree()
            this.player = new Player()
            this.leaves = new Leaves()
            this.sky = new Sky()
            this.fog = new Fog()
            this.lab = new Lab()
            this.rocks = new Rocks()
            this.lightPole = new LightPole()
            // this.tiles = new Tiles()
        })
    }

    public update(){
        if(this.grass)
        this.grass.update()

        if(this.player)
        this.player.update()

        if(this.physics)
        this.physics.update()

        if(this.leaves)
        this.leaves.update()

        if(this.cycle)
        this.cycle.update()

        if(this.environment)
        this.environment.update()

    }

}