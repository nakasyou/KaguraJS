import margeOptions from "merge-options"

export interface KaguraInitOptions {

}
export interface KaguraInitStrictOptions {
  
}
export default class Kagura{
  constructor(options: KaguraInitOptions){
    const strictOptions: KaguraInitStrictOptions = margeOptions({
      
    }, options)
  }
}