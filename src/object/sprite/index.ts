import ObjectContainer from '../object-container'
import { Sprite as PixiSprite } from 'pixi.js'

export interface SpriteInitOptions {

}

export class Sprite extends ObjectContainer {
  constructor () {
    super(new PixiSprite())
  }
}
