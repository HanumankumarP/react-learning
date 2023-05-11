// import {useState} from 'react';
import {useForm} from 'react-hook-form';

const Child=()=>{
    

    const {
        register,
        handleSubmit,
        formState:{errors}
    } = useForm();

    const submitData=(e)=>{
        // e.preventDefault();
        
        console.log(e)
    }

    // const data1=false;
    // const data2=true;

    // data1===false && data2===true ? console.log('Success') : console.log('Fail')

    return(
        <>
        <h2> Sample Form</h2>
        <form onSubmit={handleSubmit(submitData)}>
            <input type="text" placeholder="Name" {...register('name')} /> <br />
            <input type="email" placeholder="Email" {...register('email',{required:true, pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/ })} /> <br />
            {errors.email && errors.email.type==='required' && <label> Email is required </label>} 
            {errors.email && errors.email.type==='pattern' && <label> Enter valid email </label>}
            <button type="submit"> Submit form</button>
        </form>
        </>
    )
}

export default Child