import React from 'react'
import { useForm } from 'react-hook-form';
import { styled } from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    .formData {
        display: flex;
        flex-direction: column;
    
    }
`
function Form() {
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
            <input type='text' placeholder='Username' {...register('username', {required: 'Please enter username', maxLength: 15})}/>
            {errors.username && <p>{errors.username.message}</p>}
            <input type='email'placeholder='Email' {...register('email', {required: 'Please enter email', maxLength: 15})}/>
            {errors.email && <p>{errors.email.message}</p>}
            <input type='password' placeholder='Password' {...register('password', {required: 'Create strong password', minLength: {value: 8, message: 'Min length 8 symbols'}})}/>
            {errors.password && <p>{errors.password.message}</p>}
            <input type='confPassword' placeholder='Confirm Password' {...register('confPassword', {required: 'Confirm your password', minLength: {value: 8, message: 'Min length 8 symbols'}})}/>
            {errors.confPassword && <p>{errors.confPassword.message}</p>}
            <div>
            <input type='checkbox' {...register('check', {required: "Please agree with Terms & Conditions"})}/>
            {errors.check && <p>{errors.check.message }</p>}
            <p>I Agree to the Terms & Conditions</p>

            </div>
            <button type='submit'>SIGNUP</button>
            </form>
            <p> Already have Account? <a href='/'>Login now</a>
            </p>
        </Wrapper>
    </Container>
  )
}

export default Form