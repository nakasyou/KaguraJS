import { Kagura } from "../../src"

import MyScene from "./scenes/MyScene"

const kagura = new Kagura({
  element: document.getElementById("game") as HTMLCanvasElement,
  startScene: MyScene,
})

kagura.setCanvasSize(1000,200)

await kagura.start()
