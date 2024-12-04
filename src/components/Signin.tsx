import { useRef } from "react";
import { CloseIcon } from "../icons/CloseIcon";
import Button from "./Button";
import InputBox from "./InputBox";

import axios from "axios";
import { BACKEND_URL } from "./config"


export function SignIn() {
  const usernameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  async function Signin() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
   const response= await axios.post(BACKEND_URL + "/api/v1/signin", {
      username,
      password
    }
  
  )
    const jwt =response.data.token;
    localStorage.setItem("token",jwt)
}
    return <div className="h-screen w-screen bg-slate-300 flex justify-center items-center ">
      <div className="bg-slate-200 w-1/3 p-10  rounded border-2">
        <div className="flex justify-end">
          <CloseIcon />
        </div>
        <div className="">
          <InputBox placeholder="Title" />
          <InputBox placeholder="Link" />
        </div>
        <div className="flex justify-center mt-4 w-full">
          <Button fullWidth={true} onClick={Signin} varient="primary" text="Submit" />
        </div>

      </div>

    </div>
  }