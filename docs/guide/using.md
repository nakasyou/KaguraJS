# 使い方
KaguraJS の使い方を解説します！
## Start to use [`create-kagura`](https://www.npmjs.com/package/create-kagura)
この方法は、テンプレートを使います。現在推奨される方法です。

~~[nakasyou](https://nakasyou.github.io) が眠い時に適当に作ったので、まともに動くかは知りません()~~
バグがあるかもしれません。

```bash
npm create kagura # Using npm
yarn create kagura # Using yarn
pnpm create kagura # Using pnpm
deno run -Ar npm:create-kagura # Using Deno
bun x create-kagura # Using Bun
```
指示に従います。ここでは、名前は`kagura-app`とします。
``` bash
cd kagura-app
pnpm i
pnpm dev
```
で開発を開始できます！

## Manually start
自分でカスタマイズして始める方法を紹介します。
### Using npm
KaguraJSは、npmに公開されています。そのため、npmからインストールすることができます。この方法では、ローカルの環境を使います。Node.jsが必須となります。

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
インストールしたら、使えるようになります！
```ts
import * as kagura from "kagurajs"
```
で、全てのモジュールを`kagura`に集めてインポートをすることができます。

インストールできたら、Vite でも Webpack でもなんでも好きに開発することができます！
### Using IIFE
また、CDNを使用し、IIFEを使うこともできます。
以下の `<script>` タグは、 [jsDelivr](https://jsdlivr.com) を使用しています。CDNの場合、グローバル変数の `kagura` に KaguraJS のモジュールが格納されます。
```html
<script src="https://cdn.jsdelivr.net/npm/kagurajs"></script>
```
できたら、下のような感じで書くことができます。
```js
const {
  Kagura,
  Scene,
  // ... and other modules..
} = kagura
// 処理...
```
この方法では、手軽にプロジェクトを始めることができますが、大規模プロジェクトには不向きです。
### Using [esm.sh](https://esm.sh)
esm.sh を使用して、モジュールベースにローカルで開発することもできます。

```html
<script type="module" src="main.js"></script>
```
`type="module"`をつけないと、`import`構文が使えません。

```js
import { Kagura, Scene, /* And other modules... */ } from "https://esm.sh/kagurajs"

// 処理...
```
こんな感じで書くことができます。

この方法も、IIFEと同じように手軽にプロジェクトを始めることができますが、大規模プロジェクトには不向きです。
