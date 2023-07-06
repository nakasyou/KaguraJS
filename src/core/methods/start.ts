import Kagura, { type Fpsdata, type SceneData } from '..'
import Scene from '../../scene'

export interface StartDatas {
  scene?: Scene
  fpsData: Fpsdata
  sceneData: SceneData
}

export interface StartReturn {
  stop(): Promise<void>
}

export default async function (this: Kagura, datas: StartDatas): Promise<StartReturn> {
  const updateMs: number = 1000 / datas.fpsData.fps // update Milli Seconds

  let isStop: boolean = false
  let stopResolve = (_value: void) => {}
  stopResolve = (_value: void) => undefined

  async function update () {
    await datas.scene?.frame()
    await datas.sceneData.steps.next()
    if (!isStop) {
      setTimeout(update, updateMs)
    } else {
      stopResolve()
    }
  }
  update()

  return {
    stop (): Promise<void> {
      return new Promise((resolve) => {
        stopResolve = resolve
        isStop = true
      })
    }
  }
}
