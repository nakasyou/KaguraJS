import {
  Sprite,
  Scene,
  Asset,
  type SceneConstructorOptions,
} from "../../../src/index"
import gobo from "../../assets/gobo.svg"

export default class extends Scene{
  gobo: Sprite
  speed?: number
  constructor (sceneConstructorOptions: SceneConstructorOptions) {
    super(sceneConstructorOptions)
    this.gobo = {} as Sprite
  }
  async init(){
    const goboImage = await new Asset().fromURL(gobo)
    this.gobo = await new Sprite().init({
      asset: goboImage
    })
    this.gobo.x = 100
    
    this.addChild(this.gobo)
  }
  async frame(){
    this.gobo.x ++
  }
  *steps(){
    //yield console.log(this)
  }
}
