import Scene from "../scene"

export interface KaguraInitOptions {
  element?: HTMLCanvasElement
  width?: number
  height?: number
  fps?: number
  startScene?: typeof Scene
}
export interface KaguraInitStrictOptions {
  element: HTMLCanvasElement
  width: number
  height: number
  fps: number
  startScene: typeof Scene
}