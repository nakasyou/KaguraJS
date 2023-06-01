import { Container } from "pixi.js"

/*
function getAllProps(object: object) {
  const p = [];
  for (; object != null; object = Object.getPrototypeOf(object)) {
    const op = Object.getOwnPropertyNames(object);
    for (let i=0; i<op.length; i++)
      if (p.indexOf(op[i]) == -1)
        p.push(op[i]);
  }
  return p;
}*/

class ObjectContainer extends Container{
  childContainer: Container
  constructor(childContainer: Container){
    super()
    
    this.childContainer = childContainer
    this.addChild(childContainer)
  }
}

export default ObjectContainer