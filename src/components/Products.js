import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

import Swal from 'sweetalert2'
import { BACK_END } from '../App'




const Product = ({product, getProducts}) => {

  

  const deleteProduct = async (id)=>{


    const result = await Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!"
    })

    if(result.isConfirmed){

      try {
      

        await axios.delete(`${BACK_END}/api/products/${id}`);
  
        toast.success(`${product.name} deleted successfully`);
  
        getProducts();
        
      } catch (error) {
  
        toast.error(error.message)
        
      }
      
    }

 
  }




  return (
    <div className='bg-white rounded shadow-lg overflow-hidden '>
        <img src={product.image} alt='product images' className='w-full h-[170px] object-cover'/>
            <div className='px-4 pt-2 pb-4'>
                <h2 className='text font-semibold'>{product.name}</h2>
                <div className='text-sm'> Quantity : {product.quantity}</div>
                <div className='text-sm'> price : $ {product.price}</div>

                <div className='mt-2 flex gap-4'>
                    <Link to={`/edit/${product._id}`} className='inline-block w-full  text-center shadow-md text-sm bg-gray-700 text-white rounded px-4 py-1 font-bold hover:bg-gray-600 hover:cursor-pointer'>Edit</Link>
                    <button onClick={() => deleteProduct(product._id)} className='inline-block w-full  text-center shadow-md text-sm bg-red-600 text-white rounded px-4 py-1 font-bold hover:bg-red-500 hover:cursor-pointer'>Delete</button>

                </div>
            </div>
            
        
    </div>
  )
}

export default Product