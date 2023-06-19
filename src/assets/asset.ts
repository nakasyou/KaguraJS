import * as PIXI from 'pixi.js'
import { blob2dataurl } from './blob2dataurl'

/**
 * Kagura asset class.
 * @remarks
 * It is KaguraJS asset class.
 * It does manage game asset.  
 * import:
 * ```ts
 * import { Asset } from "kagurajs"
 * ```
 * @example
 * ```ts
 * // On Vite
 * import { Asset } from "kagurajs"
 * import cat from "./assets/cat.png"
 * 
 * const catAsset = new Asset().fromURL(cat) // Load asset via Vite import.
 * ```
 * @example
 * ```ts
 * // Not use esm
 * const { Asset } = kagura
 * 
 * const catAsset = new Asset().fromURL("/assets/cat.png") // Load asset via raw URL.
 * ```
 */
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
  /**
   * Load asset from URL.
   * @example
   * ```ts
   * const assets = new Asset().fromURL(url)
   * ```
   */
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

  async getDataUrl (): Promise<string> {
    return await blob2dataurl(this.blob)
  }

  async getPixiTexure () : Promise<PIXI.Texture<PIXI.Resource>> {
    const result = PIXI.Texture.from(this.url.toString())
    return result
  }
}
