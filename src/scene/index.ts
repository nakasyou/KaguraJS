import Kagura from '../core'

export interface SceneConstructorOptions {
  kaguraApp: Kagura
}

/**
 * Scene class
 */
export default class Scene {
  kaguraApp: Kagura
  constructor (sceneConstructorOptions: SceneConstructorOptions) {
    this.kaguraApp = sceneConstructorOptions.kaguraApp
  }

  frame () {

  }

  * steps (): Generator {

  }
}
