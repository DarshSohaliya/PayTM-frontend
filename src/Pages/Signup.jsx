import {SubHeading} from '../components/SubHeading'
import {Heading} from '../components/Heading'
import { InputBox } from '../components/InputBox'
import { Button } from '../components/Button'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { BottomWarning } from '../components/BottimWarning'
import { useState } from 'react'

export const Signup = () => {
    
 const navigate= useNavigate()
 const [firstName ,setFirstName] = useState("")
 const [lastName ,setLastName] = useState("")
 const [email ,setEmail] = useState("")
 const [password ,setPassword] = useState("")


    return <div className="bg-slate-300 h-screen flex justify-center">
             <div className="flex flex-col justify-center" >
                <div className='rounded-lg bg-white w-80 text-center p-2 h-max px-4'>
               <Heading label={"Sign up"}  />
               <SubHeading label={"Enter your information to create an account"}/>
               <InputBox onChange={(e) => {
                setFirstName(e.target.value)
               }} placeholder={"Enter Your FirstName"} label={"First Name"}/>
               <InputBox onChange={(e) => {
                setFirstName(e.target.value)
               }} placeholder={"Enter Your LastName"} label={"Last Name"}/>
               <InputBox onChange={(e) => {
                setEmail(e.target.value)
               }} placeholder={"Enter Yourr Email"} label={"Email"}/>
               <InputBox onChange={(e) => {
                setPassword(e.target.value)
               }} placeholder={"Enter Your Password"} label={"Password"}/>
               <div className='pt-4'>
               <Button onClick={async () => {
                const response = await axios.post("https://localhost:3000/api/v1/user/signup",{
                    username,
                    firstName,
                    lastName,
                    password
                })
                localStorage.setItem("token",response.data.token)
           navigate('/dashboard')
               }} label={"Sign up"}/>
               
               </div>
            <BottomWarning label={"Already have account?"} buttonText={"Sign in"} to={"/signin"}/>
             </div>
             </div>
    </div>
}