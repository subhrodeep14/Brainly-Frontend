import { useRef } from "react";
import { CloseIcon } from "../icons/CloseIcon";
import Button from "./Button";
import InputBox from "./InputBox";

import axios from "axios";
import { BACKEND_URL } from "./config"
import { useNavigate } from "react-router-dom";


export function SignIn() {
  const usernameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const navigate =useNavigate();
  async function Signin() {
    const userName = usernameRef.current?.value;
    const password = passwordRef.current?.value;
   const response= await axios.post(BACKEND_URL + "/api/v1/signin", {
      userName,
      password
    }
   )
  
console.log(response);

   const jwt =response.data;
   console.log(jwt);
   
    localStorage.setItem("token",jwt)
    navigate("/");
}
    return <div className="h-screen w-screen bg-slate-300 flex justify-center items-center ">
      <div className="bg-slate-200 w-1/3 p-10  rounded border-2">
        <div className="flex justify-between text-2xl">
          Sign In
          <CloseIcon />
        </div>
        <div className="">
          <InputBox reference={usernameRef}
           placeholder="Title" />
          <InputBox reference={passwordRef} placeholder="Link" />
        </div>
        <div className="flex justify-center mt-4 w-full">
          <Button fullWidth={true} onClick={Signin} varient="primary" text="Submit" />
        </div>

      </div>

    </div>
  }