# KaguraJS Guide
## インストール
```bash
pnpm add kagurajs
```
## 使用方法
```ts
import {
  Kagura,
  Scene
} from "kagurajs"

class MyScene extends Scene{
  counter: number
  constructor(){
    super() // 親クラス初期化
    
    this.counter = 0
  }
  frame(){
    this.counter ++
    console.log(this.counter)
  }
}
const kagura = new Kagura({
  startScene: MyScene,
})

document.body.append(kagura.element) // Canvasの追加

kagura.start() // Start
```
実行すると、1/60秒ごとに、カウンターが更新され、コンソールに表示されるはずです。
