import React, { useState } from 'react';
import Layout from '../components/Layout';
import SearchBar from '../components/SearchBar';
import Heading from '../components/Heading';
import { FaArrowDownLong } from "react-icons/fa6";
import { RiInfoI } from "react-icons/ri";
import { MdOutlineShoppingBag } from "react-icons/md";
import {  HandMadeProductData } from '../staticData';
import { useAddCartContext } from '../context/AddCartContext';
import { useNavigate } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";

export default function HandProducts() {
  const { cartstate, buycart } = useAddCartContext();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = HandMadeProductData.filter((item) =>
    item.heading.toLowerCase().includes(searchTerm.toLowerCase())
  );


  

  const addToBasketMt = (data) => {
    cartstate({
      id: data.id,
      heading: data.heading,
      img: data.img,
      mrp: data.mrp,
      sellingprice: data.sellingprice,
      description: data.description,
      weight: data.weight,
      isweightproduct: data.isweightproduct
    });
  };

  const buyToCart = (data) => {
    buycart({
      id: data.id,
      heading: data.heading,
      img: data.img,
      mrp: data.mrp,
      sellingprice: data.sellingprice,
      weight: data.weight,
      description: data.description,
      isweightproduct: data.isweightproduct
    });
    navigate('/addtocart');
  };

  return (
    <Layout>
      <section className="mt-18">
        <Heading />
        <div className='w-full mt-3'>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
      </section>

      <section className="mt-5 mb-10 lg:mb-20 flex flex-wrap gap-1 sm:gap-3 justify-center sm:justify-start items-center">
        {filteredProducts.length > 0 ? filteredProducts.map((fdata, i) => (
          <div key={i} className="card bg-base-100 border border-base-300 w-44 md:w-64 rounded-xl">
            
            <figure className='relative'>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
             
              <button className='absolute btn btn-xs top-2 left-2 btn-primary text-white btn-circle'>
                <RiInfoI size={13} />
              </button>
              <span className={`${(fdata.isweightproduct === false) ? 'hidden' : 'block'} absolute bottom-2 right-2 bg-primary text-white font-semibold px-2 py-1 rounded-lg text-xs`}>
                {fdata.weight}kg
              </span>
            </figure>
            <div className="card-body p-2">
              <h2 className="card-title text-xs md:text-sm">{fdata.heading}</h2>
              <div className="card-actions justify-start">
                <span className='text-xs md:text-sm flex justify-center items-center text-green-700'>
                  <FaArrowDownLong size={10} />{((fdata.mrp - fdata.sellingprice) / fdata.mrp * 100).toFixed(0)}%
                </span>
                <span className='text-xs md:text-sm opacity-70 line-through'>₹ {fdata.mrp}</span>
                <span className='text-xs md:text-sm font-bold'>₹ {fdata.sellingprice}</span>
                <span className='grid grid-cols-2 w-full gap-x-1'>
                  <button onClick={() => addToBasketMt(fdata)} disabled={!fdata.isavailable} className={`btn btn-sm bg-yellow-800 text-white w-auto`}>
                    {!fdata.isavailable ? "StackOut" : "Cart"} <MdOutlineShoppingBag size={18} />
                  </button>
                  <button onClick={() => buyToCart(fdata)} disabled={!fdata.isavailable} className={`btn btn-sm bg-primary text-white w-full`}>
                    Buy Now
                  </button>
                </span>
              </div>
            </div>
          </div>
        )) :  <section className='flex flex-col gap-y-2 items-center justify-center w-full h-[60vh] opacity-50'>
          <FiShoppingCart size={25}/>
            <span className='w-full text-center'>No Product Found</span>
            </section>
          }
      </section>
    </Layout>
  );
}



// import React, { useState } from 'react'
// import Layout from '../components/Layout'
// import SearchBar from '../components/SearchBar'
// import Heading from '../components/Heading'
// import { FaArrowDownLong } from "react-icons/fa6";
// import { RiInfoI } from "react-icons/ri";
// import { MdOutlineShoppingBag } from "react-icons/md";
// import { HandMadeProductData } from '../staticData';
// import { useAddCartContext } from '../context/AddCartContext';
// import { useNavigate } from 'react-router-dom';

// export default function Food() {
   
//   const {cartdata,cartstate,buycart} = useAddCartContext();
 
   
//    const addToBasketMt = (data) =>{
//     let filterData = {
//       id:data.id,
//       heading:data.heading,
//       img:data.img,
//       mrp:data.mrp,
//       sellingprice:data.sellingprice,
//       description:data.description,
//       weight:data.weight,
//       isweightproduct:data.isweightproduct
//     }
//     cartstate(filterData);
//    };

//    const navigate = useNavigate();

//    const buyToCart =(data)=> {
//     let filterData = {
//       id:data.id,
//       heading:data.heading,
//       img:data.img,
//       mrp:data.mrp,
//       sellingprice:data.sellingprice,
//       weight:data.weight,
//       description:data.description,
//       isweightproduct:data.isweightproduct
//     }
//     buycart(filterData);
//     navigate('/addtocart')
//    }

//    const [show, setShow] = useState(true);

//   return (
//     <Layout>
      
//       <section className=" mt-18">
//         <Heading/>
//           <div className='w-full mt-3'>
//           <SearchBar/>   
//           </div>
//       </section>

//       <section className=" mt-5 mb-10 lg:mb-20 flex flex-wrap gap-1 sm:gap-3 justify-center sm:justify-start items-center">
//       {
//         HandMadeProductData.map((fdata,i)=>(
//           <div key={i} className="card bg-base-100 border border-base-300 w-44 md:w-64 rounded-xl ">
//           <figure className='relative'>
//             <img
//               src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//               alt="Shoes" />
//               <button className='absolute btn btn-xs top-2 left-2 btn-primary text-white btn-circle'><RiInfoI size={13}/></button>
//               <span className={`${!fdata.isweightproduct ? 'hidden' : 'block'} absolute bottom-2 right-2 bg-primary text-white font-semibold px-2 py-1 rounded-lg text-xs`}>{fdata.weight}kg</span>
//           </figure>
//           <div className="card-body p-2">
//             <h2 className="card-title text-xs md:text-sm">{fdata.heading}</h2>
        
//             <div className="card-actions justify-start">
//               <span className='text-xs md:text-sm flex justify-center items-center text-green-700'><FaArrowDownLong size={10}/>{((fdata.mrp - fdata.sellingprice) / fdata.mrp) * 100}%</span>
//               <span className='text-xs md:text-sm opacity-70 line-through'>₹ {fdata.mrp}</span>
//               <span className='text-xs md:text-sm font-bold'>₹ {fdata.sellingprice}</span>
//               <span className='grid grid-cols-2 w-full gap-x-1'>
//               <button onClick={()=>addToBasketMt(fdata)} disabled={!fdata.isavailable} className={`btn btn-sm bg-yellow-800 text-white w-auto`}>{!fdata.isavailable ? "StackOut" : "Cart"}  <MdOutlineShoppingBag size={18}/></button>
//               <button onClick={()=>buyToCart(fdata)} disabled={!fdata.isavailable} className={`btn btn-sm bg-primary text-white w-full`}>Buy Now </button>
//               </span>
//             </div>
//           </div>
//         </div>
//         ))
//       }
//       </section>
      
//     </Layout>
//   )
// }

