import { CloseIcon } from "../icons/CloseIcon"
import Button from "./Button"
import InputBox from "./InputBox"

interface Controlvar{
  open:boolean;
  onClose:
  ()=>void
}

const ControlModal = ({open,onClose}:Controlvar) => {
  return (
    <div >
      {open && <div className="h-screen w-full bg-slate-300 flex justify-center">
        <div className="flex justify-center flex-col  ">
          
            <div className="bg-slate-200 w-full p-10  rounded border-2">
              <div onClick={onClose} className="flex justify-end">
                  <CloseIcon/>
              </div>
              <div className="">
                <InputBox placeholder="Title"/>
                <InputBox placeholder="Link"/>
              </div>
              <div className="flex justify-center mt-4 w-full">
                <Button fullWidth={true} varient="primary" text="Submit" />
              </div>
            
            </div>
          
        

        </div>
      </div>
        }
    </div>
  )
}

export default ControlModal
