import Kagura from ".."

export default function (this: Kagura){
  setInterval(()=>{
    this.scene.frame()
    console.log(0)
  })
}