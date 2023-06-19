import ObjectContainer from '../object-container'
import { Sprite as PixiSprite } from 'pixi.js'
import { Asset } from '../../assets'

export interface SpriteInitOptions {
  asset: Asset
}

export class Sprite extends ObjectContainer {
  async init (options: SpriteInitOptions) {
    const sprite = new PixiSprite(await options.asset.getPixiTexure())
    super.from(sprite)
    return this
  }
}

export function createSprite () {

}
