import { useRef, useState } from "react";
import { CloseIcon } from "../icons/CloseIcon"
import Button from "./Button"
import InputBox from "./InputBox"
import axios from "axios";
import { BACKEND_URL } from "./config";

interface Controlvar{
  open:boolean;
  onClose:
  ()=>void
}
enum ContentType {
  Youtube="youtube",
  Twitter="twitter"
}

const ControlModal = ({open,onClose}:Controlvar) => {
  const titleRef =useRef<HTMLInputElement>();
  const linkRef=useRef<HTMLInputElement>();
  const [type,setType]=useState(ContentType.Youtube);

 async function add(){
    const title =titleRef.current?.value;
    const link =linkRef.current?.value;

  await  axios.post(`${BACKEND_URL}/api/v1/content`,{
      title,
      type,
      link
    },
  {
    headers:{
      "Authorization": localStorage.getItem("token")
    }
  })
  alert("conent added")
  }
  return (
    <div >
      {open && <div className="h-screen w-full bg-slate-300 flex justify-center">
        <div className="flex justify-center flex-col  ">
          
            <div className="bg-slate-200 w-full p-10  rounded border-2">
              
              <div onClick={onClose} className="flex justify-between">
              <h1 className="text-2xl">Add Content</h1>
                  <CloseIcon/>
              </div>
              <div className="">
                <InputBox reference={titleRef} placeholder="Title"/>
                <InputBox reference={linkRef} placeholder="Link"/>
              </div>
              <div>
                <h1 className="m-5 text-2xl">Types</h1>
                <div>
                <Button fullWidth={false} varient={type===ContentType.Youtube ?"primary":"secondary"} text="Youtube" onClick={
                  ()=>{
                    setType(ContentType.Youtube)
                  }
                } />
                <Button fullWidth={false} varient={type===ContentType.Twitter ?"primary":"secondary"} text="Twitter" onClick={
                  ()=>{
                    setType(ContentType.Twitter)
                  }
                } />

                </div>
              
              </div>
              <div className="flex justify-center mt-4 w-full">
                <Button onClick={add} fullWidth={true} varient="primary" text="Submit" />
              </div>
            
            </div>
          
        

        </div>
      </div>
        }
    </div>
  )
}

export default ControlModal
