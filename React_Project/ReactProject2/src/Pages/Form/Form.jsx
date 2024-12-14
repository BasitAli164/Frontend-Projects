import React, { useState } from 'react'
import './Form.css'
import Input from '../../components/InputField/Input'
import Button from '../../components/Button/Button'

const Form = () => {
    const [status,setStatus]=useState(true)
    const[formData,setFormData]=useState({
        username:'',
        email:'',
        password:''
    })
    const handleChange=(e)=>{
        const {name,type,value}=e.target;
        const valueType=type==="text"||"email"||"password"?value:null;
        setFormData({
            ...formData,
            [name]:valueType,
        })
    }
    const hnadleStatus=()=>{
        setStatus(!status)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Form Data :",formData)
    }
  return (
    <>
    <div className="container">
        <div className="header">
            <h1>{status===true?"SignUp Form":"Login Form"}</h1>
        </div>
        <div className="underline"></div>
        <div className="form">
            <form className='formdata' onSubmit={handleSubmit}> 
                {
                    status===true? <Input
                    labelText="Username: "
                    inputType="text"
                    inputName="username"
                    inputId="username"
                    inputTitle="Username have at least 3 character"
                    inputPlaceholder="Enter the username"
                    inputMinLenght={3}
                    inputMaxLength={100}
                    inputValue={formData.username}
                    inputFunction={handleChange}
                    />  :
                    null
                }             
                                   
                 <Input
                labelText="Email: "
                inputType="email"
                inputName="email"
                inputId="email"
                inputTitle="Email must in email format"
                inputPlaceholder="Enter the email"
                inputValue={formData.email}
                inputFunction={handleChange}
                />    
                <Input
                labelText="Password: "
                inputType="password"
                inputName="password"
                inputId="password"
                inputTitle="Password have at least 3 character"
                inputPlaceholder="Enter the password"
                inputMin={3}
                inputMax={100}
                inputValue={formData.password}
                inputFunction={handleChange}
                />       
                <div className="buttons">
                    {
                        status===true?
                        <Button
                    buttonText="SignUp"
                    buttonfunction={handleSubmit}

                    />:
                    <Button
                    buttonText="Login"
                    buttonfunction={handleSubmit}
                    
                    />
                    }
                    
                    
                    <div className="text">
                       {
                        status===true?(
                            <>
                             <h6 className='message'>Already have an account?</h6>
                             <p id='btn' className='message' onClick={hnadleStatus}>{!status===true?"SignUp":"Login"}</p>
                            </>
                        ):
                        (
                            <>
                             <h6 className='message'>Create an Account.</h6>
                             <p id='btn' className='message' onClick={hnadleStatus}>{!status===true?"SignUp":"Login"}</p>
                            </>
                        )
                       }
                    </div>
                    </div>            
            </form>
        </div>
    </div>
      
    </>
  )
}

export default Form
