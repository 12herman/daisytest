import React, { useState } from "react";

function CustomerAddressForm({updatecustomer,downloadImg}) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    district:"",
    state: "",
    pincode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async(e) => {
    try{
    e.preventDefault();
    console.log("Submitted:", formData);
    await updatecustomer(formData);
    await downloadImg();
    }
    catch(e){
      console.log(e);
    }
    
  
  };

  return (
    <div className="mt-5">
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="input input-bordered w-full input-sm md:input-md"
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="input input-bordered w-full input-sm md:input-md"
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="input input-bordered w-full input-sm md:input-md"
        />
        <textarea
          placeholder="Street Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="textarea textarea-bordered w-full input-sm md:input-md"
          required
        />
        <input
          type="text"
          placeholder="City"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="input input-bordered w-full input-sm md:input-md"
          required
        />
        <input
          type="text"
          placeholder="District"
          name="district"
          value={formData.district}
          onChange={handleChange}
          className="input input-bordered w-full input-sm md:input-md"
          required
        />
        <input
          type="text"
          placeholder="State"
          name="state"
          value={formData.state}
          onChange={handleChange}
          className="input input-bordered w-full input-sm md:input-md"
          required
        />
        <input
          type="text"
          placeholder="Pincode"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
          className="input input-bordered w-full input-sm md:input-md"
          required
        />
        <button type="submit" className="btn btn-primary w-full mt-2 mb-10 text-white btn-sm md:btn-md">
          Share to Buy
        </button>
      </form>
    </div>
  );
}

export default CustomerAddressForm;
