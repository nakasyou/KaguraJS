import margeOptions from "merge-options"
import * as createOptions from "./create-options"

import * as PIXI from 'pixi.js'

import start from "./methods/start"

import Scene from "../scene"

import type { KaguraInitOptions, KaguraInitStrictOptions } from "./init-types"

export interface Fpsdata {
  fps: number
}
export interface SceneData {
  steps: AsyncGenerator | Generator
}
/**
 * create kagura instance
 */
export default class Kagura{
  element: HTMLCanvasElement
  #size: {
    width: number
    height: number
  }
  #fpsData: Fpsdata
  #scene: Scene
  #sceneData: SceneData
  pixiApp: PIXI.Application
  constructor(options?: KaguraInitOptions){
    const strictOptions: KaguraInitStrictOptions = margeOptions({
      element: createOptions.createCanvas(),
      width: 480,
      height: 360,
      fps: 60,
      startScene: Scene,
    }, options)

    // Set scene
    this.#scene = {} as Scene
    this.#sceneData = {
      steps: (function*(){})(), // Empty genelator
    }
    this.setScene(strictOptions.startScene)


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
      fps: 0,
    }
    this.fps = strictOptions.fps

    // Init pixi.js
    this.pixiApp = new PIXI.Application({
      backgroundColor: 0x1099bb,
      view: this.element,
    })
    
  }
  set width(width: number){
    this.#size.width = width
    this.element.width = width
  } 
  set height(height: number){
    this.#size.height = height
    this.element.height = height
  }
  /**
   * Return canvas width
   */
  get width(): number{
    return this.#size.width
  }
  /**
   * Return canvas height
   */
  get height(): number{
    return this.#size.height
  }
  /**
   * Set canvas size
   * @param width New canvas width
   * @param height New canvas height
   */
  setCanvasSize(width: number, height: number): void{
    this.width = width
    this.height = height
  }
  set fps(fps: number){
    this.#fpsData.fps = fps
  }
  get fps(){
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
  async start(){
    await start.apply(this, [{
      scene: this.#scene,
      fpsData: this.#fpsData,
      sceneData: this.#sceneData
    }])
  }
  setScene(NewScene: typeof Scene){
    const scene = new NewScene({
      kaguraApp: this,
    })
    this.#scene = scene
    this.#sceneData.steps = scene.steps()
  }
}
