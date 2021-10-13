import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Shipping.css'


const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    const { user } = useAuth();
    return (
        <div>
            <form className='shipping-form' onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={user.displayName} {...register("Name")} />


                <input defaultValue={user.email} {...register("Email", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}

                <input placeholder='Address' defaultValue="" {...register("Address")} />

                <input placeholder='City' defaultValue="" {...register("City")} />

                <input placeholder='Phone-Number' defaultValue="" {...register("Phone")} />



                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;