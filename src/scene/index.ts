import Kagura from '../core'

export interface SceneConstructorOptions {
  kaguraApp: Kagura
}

/**
 * Scene class
 */
export default class Scene {
  kaguraApp: Kagura
  constructor (sceneConstructorOptions: SceneConstructorOptions, callback: ()=>void) {
    this.kaguraApp = sceneConstructorOptions.kaguraApp;
    (async () => {
      await this.init()

      callback()
    })()
  }

  init (): void | Promise<void> {

  }

  frame () {

  }

  * steps (): Generator {

  }
}
