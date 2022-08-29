export const handleScroll = (e, currentY) => {
  let delta = null
  let direction = false
  
  if ( e.wheelDelta ) { 
      delta = e.wheelDelta / 60;
  } else if ( e.detail ) { 
      delta = -e.detail / 2;
  }
  if ( delta !== null ) {
      direction = delta > 0 ? -0.02 : 0.02;
  }

  console.log(direction)
  return direction + currentY
}

export const callTenTimes = (func, param) => {
  let counter = 10
  while(counter > 0) {
    func(param)
    counter--
  }
}


