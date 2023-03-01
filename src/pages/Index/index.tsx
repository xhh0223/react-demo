import { useEffect, useMemo, useRef, useState } from "react";



let obj: any[] = []
let key =-1
let indexStack = []

function memo(val: number){
  indexStack.push(key++)
  obj.push(()=>{
    let init = val
    obj[key]
    function setInit(v:any){
      init =v 
    }
  })
}
memo(1)
memo(2)

const context=(v:any)=>{
  
}

export const index = ()=>{
  memo(1)
  memo(2)
  return <div></div>
}
export default index;
