import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';

function Edit() {
    const { register, formState: { errors }, handleSubmit } = useForm({defaultValues: async () => fetch('http://localhost:3000/prod/')});
    const onSubmit = data => {
        axios.patch('http://localhost:3000/prod/'+id,data) 
    };

    let {id} = useParams()

    const [info, setinfo] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/prod/'+id)
        .then(res => setinfo(res.data))

    }, [])
    

    return (
        <>

            <section id='add'>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column w-50 p-5 m-5 gap-3'>
                        <label>Name:
                            <input  {...register("name", { required: true })} defaultValue={info.name}
                                aria-invalid={errors.name ? "true" : "false"}
                            />
                            {errors.name?.type === 'required' && <p style={{ color: 'red' }} >Yemeyin adi daxil edilmeyib</p>}
                        </label>
                        <label>About:
                            <input {...register("about", { required: true })} defaultValue={info.about}
                                aria-invalid={errors.about ? "true" : "false"}
                            />
                            {errors.about?.type === 'required' && <p style={{ color: 'red' }} >Reesepti yazin</p>}
                        </label>
                        <label>Price:
                            <input {...register("price", { required: true })} defaultValue={info.price}
                                aria-invalid={errors.price ? "true" : "false"}
                            />
                            {errors.price?.type === 'required' && <p style={{ color: 'red' }} >Qiymet daxil edilmeyib</p>}
                        </label>
                        <input className='w-50' type="submit" />
                    </form>
                </div>
            </section>

        </>
    )
}

export default Edit