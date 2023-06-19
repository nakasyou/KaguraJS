import Kagura from '../core'
import { DisplayObject } from 'pixi.js'
export interface SceneConstructorOptions {
  kaguraApp: Kagura
}

/**
 * Scene class
 */
export default class Scene {
  kaguraApp: Kagura
  children: DisplayObject[]
  constructor (sceneConstructorOptions: SceneConstructorOptions, callback: ()=>void) {
    this.kaguraApp = sceneConstructorOptions.kaguraApp
    this.children = []

    this.kaguraApp.pixiApp.stage.children = this.children

    const initReturn = this.init()
    if (initReturn instanceof Promise) {
      initReturn.then(callback)
    } else {
      callback()
    }
  }

  init (): void | Promise<void> {

  }

  frame () {

  }

  * steps (): Generator {

  }
}
