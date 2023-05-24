import margeOptions from "merge-options"
import * as createOptions from "./create-options"

export interface KaguraInitOptions {
  element?: HTMLCanvasElement
  width?: number
  height?: number
}
export interface KaguraInitStrictOptions {
  element: HTMLCanvasElement
  width: number
  height: number
}

export default class Kagura{
  element: HTMLCanvasElement
  size: {
    width: number
    height: number
  }
  constructor(options?: KaguraInitOptions){
    const strictOptions: KaguraInitStrictOptions = margeOptions({
      element: createOptions.createCanvas(),
      width: 480,
      height: 360,
    }, options)

    // Set element
    this.element = strictOptions.element

    // Set size
    this.size = {
      width: strictOptions.width,
      height: strictOptions.height
    }
  }
  set width(width: number){
    this.size.width = width
    this.element.width = width
  } 
  set height(height: number){
    this.size.height = height
    this.element.height = height
  }
  /**
   * Return canvas width
   */
  get width(): number{
    return this.size.width
  }
  /**
   * Return canvas height
   */
  get height(): number{
    return this.size.height
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
}