import Image from 'next/image'
import React from 'react'



const Logo = ({width,height,handleClick}) => {
  return (
    <div onClick={handleClick}>
       
       <Image
            src="/logo.png"
            alt="logo"
            width={width}
            height={height}
            className="object-contain cursor-pointer"
          />
    </div>
  )
}

export default Logo
