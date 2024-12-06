import { useRef } from "react";
import { CloseIcon } from "../icons/CloseIcon";
import Button from "./Button";
import InputBox from "./InputBox";
import axios from "axios";
import { BACKEND_URL } from "./config"
import { useNavigate } from "react-router-dom";


export  function SignUp() {
  const usernameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const navigate= useNavigate();
  async function signup() {
    const userName = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    await axios.post(BACKEND_URL+"/api/v1/signup",{
      userName,
      password
     })
    console.log(userName);
    console.log(password);
    navigate("/signin")
    
    alert("you are loged in");
  }


  return <div className="h-screen w-screen bg-slate-300 flex justify-center items-center ">
    <div className="bg-slate-200 w-1/3 p-10  rounded border-2">
      <div className="flex justify-between text-2xl">
        <div >
        Sign Up
        </div>
       
        <CloseIcon />
      </div>
      <div className="">
        <InputBox reference={usernameRef} placeholder="Username" />
        <InputBox reference={passwordRef} placeholder="Password" />
      </div>
      <div className="flex justify-center mt-4 w-full">
        <Button onClick={signup} fullWidth={true} varient="primary" text="Submit" />
      </div>

    </div>

  </div>
}