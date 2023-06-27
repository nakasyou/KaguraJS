import Kagura from '../core'
import {
  Container
} from 'pixi.js'
import { ObjectContainer } from '../object'
export interface SceneConstructorOptions {
  kaguraApp: Kagura
}

/**
 * Scene class
 */
export default class Scene {
  kaguraApp: Kagura
  #pixiContainer: Container
  constructor (sceneConstructorOptions: SceneConstructorOptions, callback: ()=>void) {
    this.kaguraApp = sceneConstructorOptions.kaguraApp

    this.#pixiContainer = new Container()

    this.kaguraApp.pixiApp.stage.addChild(this.#pixiContainer)

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

  /**
   * Child appends this scene.
   * @param object ObjectContainer Object.
   */
  addChild (object: ObjectContainer): void {
    this.#pixiContainer.addChild(object)
  }
}
