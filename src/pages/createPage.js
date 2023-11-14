import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BACK_END } from '../App';



const CreatePage = () => {


    const [name,setName] = useState('');
    const [quant,setQuant] = useState(0);
    const [price,setPrice] = useState(0);
    const [url,setUrl] = useState('');
    const [isLoading,setIsLoading] = useState(false);

    const navigate = useNavigate();

    //toastify
    const notifyFill = () => toast.warn("It's empty you Fucking Idiot 💩");
    const notifySuccess = (name) => toast.success(`${name} added successfully 👌`);

    //common styles
    const input = {"styles":"w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-200"}
 
    const addProduct = async(e) =>{

      e.preventDefault();

      if(name === "" || quant === "" || price === "" || url === ""){
        notifyFill();
        return;
      }

      try {

        setIsLoading(true);
        const response = await axios.post(`${BACK_END}/api/products/` , {name: name, quantity: quant, price: price, image: url});
        notifySuccess(response.data.name);
        navigate('/');
        isLoading(false);

        
      } catch (error) {
        
        console.log(error);
        setIsLoading(false);
      }

    }


  return (
    <div className='max-w-lg bg-white shadow-lg mx-auto p-7 rounded mt-6 '>

      <h2 className='font-semibold text-2xl mb-4 block text-center'>Add Product</h2>

      <form className='space-y-2' onSubmit={addProduct}>
        <div>

          <label>Name : </label>
          <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Name' className={input.styles} ></input>

        </div>
        <div>

          <label>Quantity : </label>
          <input type='number' value={quant} onChange={(e)=>setQuant(e.target.value)} placeholder='Enter quantity' className={input.styles} >
          </input>

        </div>
        <div>

          <label>Price : </label>
          <input type='number' value={price} onChange={(e)=>setPrice(e.target.value)} placeholder='Enter Price' className={input.styles} >
          </input>

        </div>
        <div>

          <label>Image URL : </label>
          <input type='text' value={url} onChange={(e)=>setUrl(e.target.value)} placeholder='Enter Image URL' className={input.styles} >
          </input>

        </div>
        <div>
          {!isLoading && <button className='block w-full mt-6 bg-blue-700 text-white rounded px-4 py-2 font-bold hover:bg-blue-600'>Add</button>}
        </div>
      </form>
    </div>
  )
}

export default CreatePage;