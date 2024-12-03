import { ReactElement } from "react"



const SidebarItems = ({text,icon}:{
    text:String,
    icon:ReactElement
}) => {
  return (
    <div className="flex justify-start items-center hover:bg-gray-300  border rounded-md transition-all p-3">
        <div className="ml-5">
        {icon}
        </div>
       
        <div className=" text-gray-700 font-semibold ml-3 text-xl">
            {text}
        </div>

    </div>
  )
}

export default SidebarItems
