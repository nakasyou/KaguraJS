export function blob2dataurl (blob: Blob): Promise<string> {
  return new Promise((resolve) => {
    const fileReader = new FileReader()

    fileReader.onload = function () {
      resolve(fileReader.result as string)
    }

    fileReader.readAsDataURL(blob)
  })
}
