import { Kagura, Scene } from "../../src"


class MyScene extends Scene{
  data: Record<string,any> = {}
  constructor(){
    super()
    
    this.data.counter = 0
  }
  frame(){
    this.data.counter =0
    console.log("count",this.data.counter)
  }
}

const kagura = new Kagura({
  element: document.getElementById("game") as HTMLCanvasElement,
  startScene: MyScene,
})

kagura.setCanvasSize(100,100)

await kagura.start()
