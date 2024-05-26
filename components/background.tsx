import React from "react"


const Background = ({children} :{children : React.ReactNode}) => {
  return (

    <div className="h-[100v] w-[100vw] dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex justify-center">

    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] h-[100vh]"></div>

    {children}
  </div>
    
  )
}

export default Background