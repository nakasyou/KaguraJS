# はじめに
## 概要
Kagura (日本語で、「神楽」。日本の神道の歌舞の一種。`/kagura/`と発音) は、Web技術のもとで、ゲームを作れる JavaScript フレームワークです。一般的な HTML/JS を土台にしている、シーンベースのゲームプログラミングを提供します。

最小限のサンプルを書きます:
```ts
import { Kagura, Sprite, Scene, Asset, type SceneConstructorOptions } from "kagurajs"

class MyScene extends Scene{
  gobo: Sprite
  speed?: number
  constructor (sceneConstructorOptions: SceneConstructorOptions) {
    super(sceneConstructorOptions)
    this.gobo = {} as Sprite
  }
  async init(){
    this.gobo = await new Sprite().init({
      asset: await new Asset().fromURL("./gobo.svg")
    })
    this.gobo.x = 100
    this.addChild(this.gobo)
  }
  async frame(){
    this.gobo.x ++
  }
}

const kagura = new Kagura({
  element: document.getElementById("game") as HTMLCanvasElement,
  startScene: MyScene,
})
await kagura.start()
```
KaguraJSはまだアルファ版であり、まともに使えない場合があります。また、急な仕様変更があったり、このドキュメントが古い場合があります。その点にご注意ください。
## インストール
KaguraJSは、npmに公開されています。そのため、npmからインストールすることができます。

npm:
```bash
npm i kagurajs
```
yarn:
```bash
yarn add kagurajs
```
pnpm:
```bash
pnpm add kagurajs
```

また、CDNを使用することもできます。以下の `<script>` タグは、 [jsDelivr](https://jsdlivr.com) を使用しています。CDNの場合、グローバル変数の `kagura` に KaguraJS のモジュールが格納されます。
```html
<script src="https://cdn.jsdelivr.net/npm/kagurajs"></script>
```

将来は、自分でインストールをせずにプロジェクトを開始できる方法を提供する予定です。
