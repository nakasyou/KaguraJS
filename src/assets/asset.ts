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
  fromBlob (blob: Blob): void {
    this.#blobData = blob
    this.#blobURL = new URL(URL.createObjectURL(blob))
  }

  async fromURL (url: URL | string): Promise<void> {
    if (typeof url === 'string') {
      url = new URL(url, window.location.href)
    }
    const res: Response = await fetch(url)
    this.fromResponse(res)
  }

  async fromResponse (response: Response): Promise<void> {
    this.fromBlob(await response.blob())
  }

  get url () {
    return this.#blobURL
  }
}
