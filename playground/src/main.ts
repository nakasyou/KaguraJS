import {
  Kagura,
  Scene,
  utils,
  ObjectContainer,
  type SceneConstructorOptions,
  Asset,
} from "../../src"
import { Container } from "pixi.js"

import gobo from "../assets/gobo.svg"

const oc = new ObjectContainer(new Container())

const { range } = utils

class MyScene extends Scene{
  data: Record<string,any> = {}
  constructor(options: SceneConstructorOptions){
    super(options)
    
    this.data.counter = 0
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
