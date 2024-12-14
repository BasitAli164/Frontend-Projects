import React, { useState } from 'react'
import './Form.css'
import Input from '../../components/InputField/Input'

const Form = () => {
    const[formData,setFormData]=useState({
        username:''
    })
    const handleChange=(e)=>{
        const {name,type,value}=e.target;
        const valueType=type==="text"||"email"||"password"?value:null;
        setFormData({
            ...formData,
            [name]:valueType,
        })
    }
  return (
    <>
    <div className="container">
        <div className="header">
            <h1>Login and SignUp Form</h1>
        </div>
        <div className="underline"></div>
        <div className="form">
            <form >
                <Input
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
                />
                
                


            </form>
        </div>
    </div>
      
    </>
  )
}

export default Form
