import {
  Kagura,
  Scene,
  Asset,
  Sprite,
  type SceneConstructorOptions
} from "../../src"
import * as PIXI from "pixi.js"

import gobo from "../assets/gobo.svg"


class MyScene extends Scene{
  gobo?: Sprite
  speed?: number
  async init(){
    const goboImage = await new Asset().fromURL(gobo)
    this.gobo = await new Sprite().init({
      asset: goboImage
    })
    this.gobo.x = 1000
    this.kaguraApp.pixiApp.stage.addChild(this.gobo)
    this.speed = -30
  }
  frame(){

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
