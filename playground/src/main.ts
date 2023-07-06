import {
  Kagura,
  Scene,
  Asset,
  Sprite,
  type SceneConstructorOptions
} from "../../src"
import * as PIXI from "pixi.js"

import gobo from "../assets/gobo.svg"

class MyScene2 extends Scene{
  gobo?: Sprite
  speed?: number
  async init(){
    const goboImage = await new Asset().fromURL(gobo)
    const gobon = await new Sprite().init({
      asset: goboImage
    })
    this.id = 2

    this.gobo = gobon
    this.addChild(gobon)
  }
  async frame(){
    this.gobo.x ++
  }
  *steps(){
    //yield console.log(this)
  }
}
function sleep (time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}
class MyScene extends Scene{
  gobo?: Sprite
  speed?: number
  async init(){
    const goboImage = await new Asset().fromURL(gobo)
    this.gobo = await new Sprite().init({
      asset: goboImage
    })
    this.gobo.x = 100
    
    //this.kaguraApp.pixiApp.stage.addChild(this.gobo)
    this.addChild(this.gobo)
  }
  async frame(){
    this.gobo.x ++
    await this.kaguraApp.setScene(MyScene2)
  }
  *steps(){
    //yield console.log(this)
  }
}

const kagura = new Kagura({
  element: document.getElementById("game") as HTMLCanvasElement,
  startScene: MyScene,
})

kagura.setCanvasSize(1000,200)

await kagura.start()
