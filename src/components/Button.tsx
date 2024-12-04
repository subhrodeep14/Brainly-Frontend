import { ReactElement } from "react"

interface buttonType{
    varient:"primary"|"secondary",
    text:string,
    startIcon?:ReactElement,
    onClick?:()=>void;

}
const varientClasses={
    "primary":" bg-purple-700 text-white ",
    "secondary":"bg-blue-500 text-black"
}
const defaultStyle="py-3 px-4 rounded-md items-center ml-4 w-[170px]  "

const Button = ({varient,text,startIcon,onClick}:buttonType) => {
  return (

    <button onClick={onClick} className={`${varientClasses[varient]} ${defaultStyle}`}>
        <div  className="flex gap-2 justify-center items-center font-semibold ">
        {startIcon}
        {text}

        </div>
        
    </button>
    
  )
}

export default Button
