import Kagura, { type Fpsdata, type SceneData } from ".."
import Scene from "../../scene"

export interface StartDatas {
  scene: Scene
  fpsData: Fpsdata
  sceneData: SceneData
}

export default async function (this: Kagura, datas: StartDatas){
  const updateMS: number = 1000 / datas.fpsData.fps

  setInterval(()=>{
    datas.scene.frame()
    datas.sceneData.steps.next()
  }, updateMS)
}
