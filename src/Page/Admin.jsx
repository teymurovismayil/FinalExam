import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Admin() {
    const [info, setinfo] = useState([])
    const [inpValue, setInpValue] = useState("");
    const [cngValue, setCngValue] = useState("def");

    useEffect(() => {
        axios.get('http://localhost:3000/prod')
        .then(res => setinfo(res.data))
    }, [])
    

    const filterData = info.filter( (inf) => inf.name.toUpperCase().startsWith(inpValue.toUpperCase()))

    const sortData = ()=> {
        if(cngValue == 'inc'){
            return filterData.toSorted((a,b)=> a.price - b.price)
        }else if(cngValue == 'dec'){
            return filterData.toSorted((a,b)=> b.price - a.price)
        }else{
            return [...filterData]
        }
    }

    let {id} = useParams()

    const deleteItem = (id) => {
        axios.delete('http://localhost:3000/prod/'+id)
    }

    return (
        <>
            <section id='adminpanel' className='mt-5' >
                <input onInput={(e)=>setInpValue(e.target.value)} type="text" placeholder='Search' className='w-50' />
                <select onChange={(e)=>setCngValue(e.target.value)}>
                    <option value="def">Default</option>
                    <option value="inc">Artan sira</option>
                    <option value="dec">Azalan sira</option>
                </select>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>About</th>
                            <th>Price</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        {
                            sortData().map((el) => {
                                return (
                                    <tr>
                                        <td>{el.id}</td>
                                        <td>{el.name}</td>
                                        <td>{el.about}</td>
                                        <td>{el.price}</td>
                                        <td><Link to={'/edit/'+el.id}><button className='btn btn-outline-primary'>Edit</button></Link></td>
                                        <td><button onClick={(e)=>deleteItem(el.id)} className='btn btn-outline-danger'>Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                    </thead>
                </table>
                <Link to='/add'><button  className='btn btn-outline-secondary'>Add</button></Link>
            </section>
        </>
    )
}

export default Admin