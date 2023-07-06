import Kagura from '../core'
import {
  Container
} from 'pixi.js'
import { ObjectContainer } from '../object'
export interface SceneConstructorOptions {
  kaguraApp: Kagura
  callback: ()=>void
}

/**
 * Scene class
 */
export default class Scene {
  kaguraApp: Kagura
  #pixiContainer: Container
  constructor (sceneConstructorOptions: SceneConstructorOptions) {
    this.kaguraApp = sceneConstructorOptions.kaguraApp

    this.#pixiContainer = new Container()

    this.kaguraApp.pixiApp.stage.addChild(this.#pixiContainer)

    const initReturn = this.init()
    if (initReturn instanceof Promise) {
      initReturn.then(sceneConstructorOptions.callback)
    } else {
      sceneConstructorOptions.callback()
    }
  }

  init (): void | Promise<void> {

  }

  frame (): void | Promise<void> {

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

  async nextScene (NewScene: typeof Scene) {
    await this.kaguraApp.setScene(NewScene)
  }

  /**
   * Crean this Scene.
   */
  cleanScene () {
    this.kaguraApp.pixiApp.stage.removeChildren(0)
  }
}
