import React, { useState } from 'react';
import './RegisterPageC.css';

const RegisterPageC = () => {
  const [formData, setFormData] = useState({
    companyname: '',
    product: '',
    domain: '',
    gstNo: '',
    gmail: '',
    phoneNumber: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <><div class="company">
          <h1>Let's get started</h1>
      </div><div className="register-container">
              <h2>Register</h2>
              <form onSubmit={handleSubmit}>
              <div className="form-group">
                      <label htmlFor="companyname">Company Name:</label>
                      <input type="text" id="companyname" name="companyname" value={formData.product} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                      <label htmlFor="product">Product:</label>
                      <input type="text" id="product" name="product" value={formData.product} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                      <label htmlFor="domain">Domain:</label>
                      <input type="text" id="domain" name="domain" value={formData.domain} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                      <label htmlFor="gstNo">GST No.:</label>
                      <input type="text" id="gstNo" name="gstNo" value={formData.gstNo} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                      <label htmlFor="gmail">Gmail:</label>
                      <input type="email" id="gmail" name="gmail" value={formData.gmail} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                      <label htmlFor="phoneNumber">Phone Number:</label>
                      <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                      <label htmlFor="address">Address:</label>
                      <textarea id="address" name="address" value={formData.address} onChange={handleChange}></textarea>
                  </div>
                  <button type="submit">Register</button>
              </form>
          </div></>
  );
};

export default RegisterPageC;