import React from 'react'

const MagicButton = ({
    title, icon, position, handleClick, otherClasses
}: {
    title:String; icon?:React.ReactNode; position?: String; handleClick?: () => void; otherClasses?: string;
}) => {
  return (

    <button className="p-[3px] relative" onClick= {handleClick}>
      <div className="absolute inset-0 bg-gradient-to-r bg-purple rounded-lg" />
      <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
        {title}
      </div>
   </button>
  
     
      
  )
}

export default MagicButton