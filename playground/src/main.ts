import { Kagura } from "../../src"

const kagura = new Kagura({
  element: document.getElementById("game") as HTMLCanvasElement
})

kagura.setCanvasSize(100,100)

kagura.start()