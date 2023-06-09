import * as PIXI from 'pixi.js'
import { blob2dataurl } from './blob2dataurl'

export class Asset {
  #blobData: Blob
  #blobURL: URL
  constructor () {
    // Init blob
    this.#blobData = new Blob()
    this.#blobURL = new URL(URL.createObjectURL(this.#blobData))
    this.fromBlob(new Blob())
  }

  /**
   * Load asset from Blob.
   * @param blob Load blob Object
   */
  fromBlob (blob: Blob): Asset {
    this.#blobData = blob
    this.#blobURL = new URL(URL.createObjectURL(blob))

    return this
  }

  async fromURL (url: URL | string): Promise<Asset> {
    if (url instanceof URL) {
      url = url.toString()
    }
    const res: Response = await fetch(url)
    await this.fromResponse(res)
    return this
  }

  async fromResponse (response: Response): Promise<Asset> {
    this.fromBlob(await response.blob())

    return this
  }

  /**
   * Returns asset's URL.
   * @returns A asset's URL
   */
  get url (): URL {
    return this.#blobURL
  }

  get blob (): Blob {
    return this.#blobData
  }

  /**
   * Get PixiJS AssetsClass
   * @returns PIXI.AssetsClas
   */
  async getPixiAssets (): Promise<PIXI.AssetsClass> {
    const dataurl = await blob2dataurl(this.blob)
    return await PIXI.Assets.load(dataurl)
  }
}
