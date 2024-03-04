import { useNavigate } from "react-router-dom"
import React from "react"

function Logout() {
   const navigate =  useNavigate()
   
      const handlelogout = () => {
        // e.preventDefault()
         localStorage.removeItem("token")
         navigate('/signup')
      }

    return (
        <div >
            <div>
                <button className=" text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-4 ml-4" onClick={handlelogout}>Logout</button>
            </div>
        </div>
    )

}

export default Logout