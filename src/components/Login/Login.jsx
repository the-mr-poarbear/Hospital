import { useState } from 'react';
import './Login.css'

function LoginDocFind(username , password){
    console.log("Doc",username , password)
}

function LoginNurseFind(username , password){
    console.log("Nurse",username , password)
}

function LoginRecepFind(username , password){
    console.log("Receptionist",username , password)
}

function LoginAdminFind(username , password){
    console.log("Admin",username , password)
}


function Login({LoginTitle , job}){
    const [username , setUsername] = useState('') 
    const [password , setPassword] = useState('')
    
    function DoLogin(){
        if (job == "doctor"){
            LoginDocFind(username , password)
        } else if(job == "nurse"){
            LoginNurseFind(username , password)
        }else if(job == "receptionist"){
            LoginRecepFind(username , password)
        }else if (job == "admin"){
            LoginAdminFind(username , password)
        }    
    }

    return <div className='d-flex text-white flex-column align-items-center justify-content-between loginBody'>
        <h2 className='fs-3 mb-5'>{LoginTitle}</h2>

        
        <div className='row d-flex mb-4 w-100 justify-content-center'>
            <label htmlFor="user" className='w-25'>Username</label>
            <input className="col-sm-6 col-10 py-2 text-white loginform" id="user" type="text"  name="" placeholder="Username" onChange={(e)=>setUsername(e.target.value)}></input>
        </div>

        <div className='row d-flex mb-4 w-100 justify-content-center'>
            <label htmlFor="user" className='w-25'>Password</label>
            <input className="col-sm-6 col-10 py-2 text-white loginform" id="user" type="text"  name="" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}></input>
        </div>
        <button className='w-75 button mt-3' onClick={(e)=>DoLogin()}>Login</button>
    </div>
}

export default Login;