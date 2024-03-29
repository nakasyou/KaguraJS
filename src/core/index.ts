import margeOptions from 'merge-options'
import * as createOptions from './create-options'

import * as PIXI from 'pixi.js'

import start, { StartDatas, StartReturn } from './methods/start'

import Scene from '../scene'

import type { KaguraInitOptions, KaguraInitStrictOptions } from './init-types'

export interface Fpsdata {
  fps: number
}
export interface SceneData {
  steps: AsyncGenerator | Generator
}
/**
 * create kagura instance
 */
export default class Kagura {
  element: HTMLCanvasElement
  #size: {
    width: number
    height: number
  }

  #fpsData: Fpsdata
  #scene?: Scene
  #sceneData: SceneData
  pixiApp: PIXI.Application
  #startWaitPromises: Promise<any>[]
  #startReturn: StartReturn
  #startDatas: StartDatas
  constructor (options?: KaguraInitOptions) {
    const strictOptions: KaguraInitStrictOptions = margeOptions({
      element: createOptions.createCanvas(),
      width: 480,
      height: 360,
      fps: 60,
      startScene: Scene
    }, options)

    this.#startWaitPromises = []

    // Set element
    this.element = strictOptions.element

    // Set size
    this.#size = {
      width: strictOptions.width,
      height: strictOptions.height
    }
    this.setCanvasSize(strictOptions.width, strictOptions.height)

    // Set fps
    this.#fpsData = {
      fps: 0
    }
    this.fps = strictOptions.fps

    // Init pixi.js
    this.pixiApp = new PIXI.Application({
      backgroundColor: 0x1099bb,
      view: this.element
    })

    // Set scene
    this.#scene = {} as Scene
    this.#sceneData = {
      steps: (function * () {})() // Empty genelator
    }
    this.#startWaitPromises.push(this.setScene(strictOptions.startScene))

    // Set start return
    this.#startReturn = {} as StartReturn
    // Set start datas
    this.#startDatas = {} as StartDatas
  }

  set width (width: number) {
    this.#size.width = width
    this.element.width = width
  }

  set height (height: number) {
    this.#size.height = height
    this.element.height = height
  }

  /**
   * Return canvas width
   */
  get width (): number {
    return this.#size.width
  }

  /**
   * Return canvas height
   */
  get height (): number {
    return this.#size.height
  }

  /**
   * Set canvas size
   * @param width New canvas width
   * @param height New canvas height
   */
  setCanvasSize (width: number, height: number): void {
    this.width = width
    this.height = height
  }

  set fps (fps: number) {
    this.#fpsData.fps = fps
  }

  get fps () {
    return this.#fpsData.fps
  }

  /**
   * Start KaguraJS game.
   * @example
   * ```ts
   * const kagura: Kagura = new Kagura()
   * // Start kagura
   * kagura.start()
   * ```
   */
  async start (): Promise<StartReturn> {
    await Promise.all(this.#startWaitPromises)

    this.resetStartDatas() // Reset this.#startDatas

    const startReturn = await start.apply(this, [this.#startDatas])
    this.#startReturn = startReturn
    return startReturn
  }

  setScene (NewScene: typeof Scene): Promise<void> {
    return new Promise((resolve) => {
      if (this.#scene?.cleanScene) {
        this.#scene?.cleanScene() // Crean old scene
      }
      const scene = new NewScene({
        kaguraApp: this,
        callback: () => {
          this.#scene = scene
          this.#sceneData.steps = scene.steps()
          this.resetStartDatas()
          resolve()
        }
      })
    })
  }

  /**
   * Stop KaguraJS instance.
   */
  async stop () {
    if (Object.is(window, this)) {
      throw new TypeError('The "this" object is window object. Try "kagura.stop.bind(kagura)"')
    }
    if (this.#startReturn.stop) {
      this.#startReturn.stop()
    } else {
      throw new TypeError('This Kagura instance is not started.')
    }
    await this.#startReturn.stop()
  }

  /**
   * Restart KaguraJS instance.
   * @remarks
   * It is equivalent to this code👇
   * ```
   * await kagura.stop()
   * await kaguta.start()
   * ```
   */
  async restart (): Promise<StartReturn> {
    await this.stop()
    return await this.start()
  }

  resetStartDatas () {
    this.#startDatas.scene = this.#scene
    this.#startDatas.fpsData = this.#fpsData
    this.#startDatas.sceneData = this.#sceneData
  }
}
