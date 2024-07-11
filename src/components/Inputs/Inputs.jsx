import { useState } from 'react';
import './Inputs.css'

export default function Inputs() {

    const [useForm, setUseForm] = useState ({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      })
    
      const [useFormErrors, setUseFormErrors] = useState ({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      })
    
      const inputHandler = (e) => {
        const { value, name } = e.target;
        setUseForm ({
          ...useForm,
          [name]: value,
        })
      }
    
      const submitHandler = (e) => {
        e.preventDefault();
        errorHandler();
      }
    
      const errorHandler = () => {
    
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const errors = {};
    
        if(useForm.firstName.trim() === "") {
          errors.firstName = "First Name cannot be empty";
        }
        if(useForm.lastName.trim() === "") {
          errors.lastName = "Last Name cannot be empty";
        }
        if(!emailRegex.test(useForm.email)) {
          errors.email = "Looks like this is not an email";
        }
        if(useForm.password.trim() === "") {
          errors.password = "Password cannot be empty";
        }
        setUseFormErrors(errors);
        if(Object.keys(errors).length === 0){
          console.log("Logged in successfully")
        }
      }

      return (
        <div className='inputs-box'>
        <form onSubmit={submitHandler}>
            <input 
            onChange={inputHandler} 
            name="firstName" 
            type="text" 
            placeholder="First Name"
            value={useForm.firstName}
            />

            <div className="error-box">
            {useFormErrors.firstName && (
            <span className='error'>{useFormErrors.firstName}</span>
            )}
            </div>

            <input 
            onChange={inputHandler} 
            name="lastName" 
            type="text" 
            placeholder="Last Name"
            value={useForm.lastName}
            />

            <div className="error-box">
            {useFormErrors.lastName && (
            <span className='error'>{useFormErrors.lastName}</span>
            )}
            </div>
            
            <input 
            onChange={inputHandler} 
            name="email" 
            type="text" 
            placeholder="Email Address"
            value={useForm.email}
            />

            <div className="error-box">
            {useFormErrors.email && (
            <span className='error'>{useFormErrors.email}</span>
            )}
            </div>

            <input 
            onChange={inputHandler} 
            name="password" 
            type="password" 
            placeholder="Password"
            value={useForm.password}
            />
            <div className="error-box">
            {useFormErrors.password && (
            <span className='error'>{useFormErrors.password}</span>
            )}
            </div>

            <button type='submit' className='button'>CLAIM YOUR FREE TRIAL</button>

        </form>

        <p className='inputs-box-paragraph'>By clicking the button, you are agreeing to our <span className='inputs-box-span'>Terms and Services</span> </p>

    </div>
      )
}