import React, { useRef, useState } from "react";
import Layout from "../components/Layout";
import { useAddCartContext } from "../context/AddCartContext";
import { AiOutlineDelete } from "react-icons/ai";
import { FadeText } from "../components/FadeText";
import { FaArrowDownLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import CustomerAddressForm from "../components/CustomerAddressForm";
import HtmlToImage from "../components/HtmlToImage";

export default function AddtoCart() {
  const { cartdata, updatecartstate, removeallcart, removebycartid, updateweightcartid } = useAddCartContext();

  const [qtyInputChange, setQtyInputChange] = useState("");
  // const [qtySelect, setQtySelect] = useState("");
  const [productId,setProductId] = useState('');


const selectOnchange=(e,id) => {
  const selected = e.target.value;
  if (selected === "more") {
    setProductId(id)
    document.getElementById("my_modal_1").showModal();
  } else {
    // setQtySelect(selected);
    updateweightcartid(id,e.target.value);
  }
}

const quantityApply = () => {
  document.getElementById("my_modal_1").close();
  updateweightcartid(productId,qtyInputChange);
  setQtyInputChange("");
  setProductId("");
};

const totalMrp = cartdata.reduce((acc,item)=> acc + Number(item.mrp),0);
const totalPrice = cartdata.reduce((acc,item)=> acc + Number(item.sellingprice),0);
const totalDiscount = totalMrp - totalPrice;


const [customerAdd,setcustomerAdd] = useState();
const updateCustomerAdd =(data)=> setcustomerAdd(data);

const htmToImgRef = useRef();
const downloadImg = ()=> htmToImgRef.current?.downloadImage();

// console.log(htmToImgRef.current?.downloadImage());

  return (
    <Layout>
      { cartdata.length > 0 ? <>
        <section className="mt-18">
          <ul className="flex items-center justify-between">
            <li>
              <h2 className="font-bold text-lg md:text-2xl">Your Order</h2>
              <p className="opacity-65 text-sm md:text-lg">
                {cartdata.length} Items
              </p>
            </li>
            <li>
              <button
                onClick={removeallcart}
                className={`${
                  cartdata.length > 0 ? "" : "hidden"
                } btn bg-red-100 btn-circle cursor-pointer text-red-500`}
              >
                <AiOutlineDelete size={20} />
              </button>
            </li>
          </ul>
        </section>
  
        <section className=" mt-5">
          <div className="lg:grid lg:grid-cols-6 lg:gap-x-10">
            {/* products grid */}
            <div className=" lg:col-span-4">
              {/* product */}
              {cartdata.map((cdata, i) => (
                <span key={i} className="relative flex gap-x-4 col-span-4 border-b-1 border-base-300 pb-3 mb-3">
                  <span className="absolute text-xs right-0 bottom-2 btn btn-link text-red-500" onClick={()=>removebycartid(cdata.id)}>Remove</span>
                  <figure className="flex justify-center items-center w-28 flex-col gap-2">
                    <img
                      src={cdata.img}
                      alt="Shoes"
                    />
                    <select
                      value={cdata.weight}
                      onChange={(e)=> selectOnchange(e,cdata.id)}
                      className="select select-xs w-full rounded-sm"
                    >
                      <option value="1">{cdata.isweightproduct ? "1 kg" : "1"}</option>
                      <option value="2">{cdata.isweightproduct ? "2 kg" : "2"}</option>
                      <option value="3">{cdata.isweightproduct ? "3 kg" : "3"}</option>
                      <option value="more">More</option>
                      {cdata.weight !== "1" &&
                        cdata.weight !== "2" &&
                        cdata.weight !== "3" &&
                        cdata.weight !== "more" &&
                        cdata.weight !== "" && (
                          <option value={cdata.weight}>{cdata.weight} kg</option>
                        )}
                    </select>
                  </figure>
                  <span>
                    <h2 className="card-title text-sm md:text-lg">{cdata.heading}</h2>
                    {/* <p className='text-xs md:text-sm'>A card component has a figure, a body part, and inside body there are title and actions parts</p> */}
                    <FadeText text={cdata.description}/>
                    <div className="flex gap-x-3">
                      <span className="text-xs md:text-sm flex justify-center items-center text-green-700">
                        <FaArrowDownLong size={10} />
                        {((cdata.mrp - cdata.sellingprice) / cdata.mrp) * 100}%
                      </span>
                      <span className="text-xs md:text-sm opacity-70 line-through">
                        ₹{cdata.mrp}
                      </span>
                      <span className="text-xs md:text-sm font-bold">₹{cdata.sellingprice}</span>
                    </div>
                  </span>
                </span>
              ))}
            </div>
  
            {/* price details grid */}
            <div className="col-span-2">
              <h2 className="font-semibold border-b-1 border-base-300 pb-2 mt-10 lg:mt-0 text-sm md:text-lg opacity-50">
                PRICE DETAILS
              </h2>
              <ul className="flex flex-col gap-y-2">
                <li className="flex justify-between text-xs md:text-sm mt-3">
                  Price ({cartdata.length} items) <span>₹{totalMrp}</span>{" "}
                </li>
                <li className="flex justify-between text-xs md:text-sm">
                  Discount <span className="text-primary">- ₹{totalDiscount}</span>{" "}
                </li>
                {/* <li className="flex justify-between text-xs md:text-sm">
                  Price (8 items) <span>₹500</span>{" "}
                </li> */}
                <li className="flex justify-between text-xs md:text-sm font-semibold py-4 border-y-1 border-base-300">
                  Total Amount <span>₹{totalPrice}</span>{" "}
                </li>
                <li className="flex justify-between text-xs md:text-sm  pt-2 text-primary font-medium">
                  You will save ₹{totalDiscount} on this order
                </li>
              </ul>

              <h2 className="font-semibold border-b-1 border-base-300 pb-2 mt-10 lg:mt-5 text-sm md:text-lg opacity-50">
                ADDRESS
              </h2>
              <CustomerAddressForm updatecustomer ={updateCustomerAdd} downloadImg={downloadImg}/>
            </div>
          </div>
        </section>

       <span className="hidden"> <HtmlToImage ref={htmToImgRef} customerdata={customerAdd} /></span>
  
        <dialog id="my_modal_1" className="modal ">
          <div className="modal-box rounded-lg">
            <h3 className="font-bold text-md md:text-lg">Enter Quantity</h3>
            <input
              value={qtyInputChange}
              onChange={(e) => setQtyInputChange(`${e.target.value}`)}
              type="number"
              placeholder="Quantity"
              className="input input-sm md:input-md rounded-md w-full mt-4"
            />
            <div className="modal-action">
              <form method="dialog">
                <button className="btn btn-sm md:btn-md ">Close</button>
              </form>
            </div>
            <button
              className="absolute bottom-6 right-24 btn btn-primary text-white btn-sm md:btn-md"
              onClick={quantityApply}
            >
              Apply
            </button>
          </div>
        </dialog>
        </> : <div className="w-full h-screen flex flex-col gap-y-3 justify-center items-center">
        <h2 className="text-sm md:text-xl font-medium">Your Cart is empty!</h2>
        <Link to="/"><button className="btn btn-sm md:btn-md bg-primary text-white">Shop Now</button></Link>
        </div>
      }
    </Layout>
  );
}
