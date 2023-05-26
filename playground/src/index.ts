import { Kagura, Scene, utils } from "../../src"

const { range } = utils

class MyScene extends Scene{
  data: Record<string,any> = {}
  constructor(){
    super()
    
    this.data.counter = 0
  }
  frame(){
    this.data.counter =0
    //console.log("count",this.data.counter)
  }
  *steps(){
    for(const i of range(100)){
      yield console.log(i)
    }
  }
}

const kagura = new Kagura({
  element: document.getElementById("game") as HTMLCanvasElement,
  startScene: MyScene,
})

kagura.setCanvasSize(100,100)

await kagura.start()
