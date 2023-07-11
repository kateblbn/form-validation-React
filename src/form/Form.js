import React from 'react'
import { useForm } from 'react-hook-form';
import { styled } from 'styled-components';
import './css.css'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 50px;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    .margin {
        margin-bottom: 15px;
        border: none;
        border-bottom: 2px solid black;
        width: 100%;
        height: 35px;
        &:focus {
            outline: none;
            border-bottom: 2px solid blue;
            transition: 0.5s all;
        }
    }
    .formData {
        display: flex;
        flex-direction: column;
        .check {
            width: 15px;
            height: 15px;
        }
        .red {
            color: red;
            margin-bottom: 15px;
        }
        .block {
            display: block;
        }
    }
`
const CheckBoxStyle = styled.div`
    display: flex;
    margin-bottom: 15px;
font-size: 14px;
justify-content: space-between;
align-items: center;
`
const Button = styled.button`
width: 100%;
height: 25px;
border-radius: 5px;
border: none;
background-color: rgb(103, 173, 659);
margin-bottom: 15px;
&:hover {
    background-color: rgb(103, 173, 59);
    transition: 0.5s all;
}
`

function Form() {
    const requiredTrue = (!'checkbox')? 'hidden': '';
    const {register, handleSubmit, formState: {errors}, reset} = useForm()
    function submitData(data) {
        console.log(data);
        reset();
    }
  return (
    <Container>
        <div>
            <h1>Creative SignUp Form</h1>
        </div>
        <Wrapper>
            <form onSubmit={handleSubmit(submitData)} className='formData'>
            <input className='margin' type='text' placeholder='Username' {...register('username', {required: 'Please enter username', maxLength: 15})}/>
            {errors.username && <p className='red'>{errors.username.message}</p>}
            <input className='margin' type='email'placeholder='Email' {...register('email', {required: 'Please enter email', maxLength: 15})}/>
            {errors.email && <p className='red'>{errors.email.message}</p>}
            <input className='margin' type='password' placeholder='Password' {...register('password', {required: 'Create strong password', minLength: {value: 8, message: 'Min length 8 symbols'}})}/>
            {errors.password && <p className='red'>{errors.password.message}</p>}
            <input className='margin' type='confPassword' placeholder='Confirm Password' {...register('confPassword', {required: 'Confirm your password', minLength: {value: 8, message: 'Min length 8 symbols'}})}/>
            {errors.confPassword && <p className='red'>{errors.confPassword.message}</p>}
            <CheckBoxStyle>
            <input className='check' type='checkbox' {...register('checkbox', {required: "Please agree with Terms & Conditions"})}/>
            {errors.checkbox && <p className='red block'>{errors.checkbox.message}</p>}
            <p>I Agree to the Terms & Conditions</p>

            </CheckBoxStyle>
            <Button>SIGNUP</Button>
            </form>
            <p> Already have Account? <a href='/'>Login now</a>
            </p>
        </Wrapper>
    </Container>
  )
}

export default Form