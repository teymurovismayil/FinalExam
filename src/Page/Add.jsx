import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form";

function Add() {
  const { register,  formState: { errors }, handleSubmit } = useForm();
  const onSubmit = data => {
    axios.post('http://localhost:3000/prod',data)
  };
  return (
    <>

      <section id='add'>
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column w-50 p-5 m-5 gap-3'>
            <label>Name:
              <input {...register("name",{ required: true })}
               aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name?.type === 'required' && <p style={{color:'red'}} >Yemeyin adi daxil edilmeyib</p>}
            </label>
            <label>About:
              <input {...register("about",{ required: true })}
               aria-invalid={errors.about ? "true" : "false"}
              />
              {errors.about?.type === 'required' && <p style={{color:'red'}} >Reesepti yazin</p>}
            </label>
            <label>Price:
              <input {...register("price",{ required: true })}
               aria-invalid={errors.price ? "true" : "false"}
              />
              {errors.price?.type === 'required' && <p style={{color:'red'}} >Qiymet daxil edilmeyib</p>}
            </label>
            <input className='w-50' type="submit" />
          </form>
        </div>
      </section>

    </>
  )
}

export default Add