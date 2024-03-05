import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import {BottomWarning } from '../components/BottomWarning'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useState } from "react"


export const Signin = () => {

    const navigate = useNavigate()

    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
              <Heading label={"Sign in"}/>
              <SubHeading label={"Enter your credentials to access your account"} />
              <InputBox onChange={(e) => {
                setEmail(e.target.value)
              }} placeholder={"abc@gmail.com"} label={"Email"}/>
              <InputBox onChange={(e) => {
                setPassword(e.target.value)
              }} placeholder={"123456"} label={"Password"}/>
           <div className="pt-4">
               <Button onClick={async () => {
                const token = localStorage.getItem("token");
                if (token) {
                  headers.Authorization = "Bearer " + token;
                }
                
              try {
                
                const response = await axios.post("http://localhost:3000/api/v1/user/sigin", {
                  email,
                  password
                }, {
                  headers: {
                    Authorization: "Bearer" + localStorage.getItem("token")
                   
                  }
                });
                localStorage.setItem("token", response.data.token);
                navigate('/dashboard');
              } catch (error) {
                console.error("Error during signin:", error);
              
              }
              
               }} label={"Sign in"}/>
             </div>
             <BottomWarning label ={"Don't have an account"} buttonText = {"Sign up"} to = {'/signup'}/>
            </div>

        </div>

    </div>
}