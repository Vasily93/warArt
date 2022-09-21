import { makeConsoleLogger } from "@notionhq/client/build/src/logging"

export const handleScroll = (e, currentY) => {
  let delta = null
  let direction = false
  const rectArr = e.eventObject.clipRect

  if ( e.wheelDelta ) { 
      delta = e.wheelDelta / 60;
  } else if ( e.detail ) { 
      delta = -e.detail / 2;
  }
  if ( delta !== null ) {
      direction = delta > 0 ? -0.02 : 0.02;
  }

  if(direction<0 && currentY<rectArr[3]) return currentY

  return direction + currentY
}

export const callTenTimes = (func, param) => {
  let counter = 10
  while(counter > 0) {
    func(param)
    counter--
  }
}


