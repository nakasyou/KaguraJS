const matchRegex = /\?kagura*$/

/**
 * Plugin kagura(Alpha)
 * @returns 
 * @alpha
 */
export function pluginKagura(){
  return {
    name: "vite-plugin-kagura",
    //enforce: 'pre',
    transform(src: string, id: string){
      if(!matchRegex.test(id)){
        return
      }
      return {
        code: `
          import { loader } from "kagurajs"
          export default "a"
        `
      }
    }
  }
}