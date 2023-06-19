import {
  Kagura,
  Scene,
  Asset,
  Sprite
} from "../../src"
import * as PIXI from "pixi.js"

import gobo from "../assets/gobo.svg"


class MyScene extends Scene{
  data: Record<string,any> = {}
  async init(){
    const goboImage = await new Asset().fromURL(gobo)
    const goboSprite = await new Sprite().init({
      asset: goboImage
    })
    this.data.counter = 0

    this.kaguraApp.pixiApp.stage.addChild(goboSprite)
  }
  frame(){
    this.data.counter =0
    //console.log("count",this.data.counter)
  }
  *steps(){
    //yield console.log(this)
  }
}

const kagura = new Kagura({
  element: document.getElementById("game") as HTMLCanvasElement,
  startScene: MyScene,
})

kagura.setCanvasSize(100,100)

await kagura.start()
