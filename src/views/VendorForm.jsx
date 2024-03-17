import React, { useState } from 'react';
import '../styling/VendorForm.css';

function VendorFormView() {
    // forms
    const [formdata, setFormData] = useState({
        rest_id: '',
        rest_name: '',
        rest_address: '',
        rest_zipcode: '',
        rest_owner_id: '',
        rest_image: '',
        phone_num:'',
        cuisine:''

    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formdata,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formdata);
        setFormData({
            vendor_id: '',
            vendor_name: '',
            vendor_address: '',
            vendor_zipcode: '',
            vendor_owner_id: '',
            vendor_image: '',
            phone_num: '',
            cuisine: ''
        });
    };

    return (
        <div className="vendor-form-container">
            <h2>Vendor Registration</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Vendor ID:
                    <input type="text" name="vendor_id" value={formdata.vendor_id} onChange={handleInput} />
                </label>
                <label>
                    Vendor Name:
                    <input type="text" name="rest_name" value={formdata.vendor_name} onChange={handleInput} />
                </label>
                <label>
                    Address:
                    <input type="text" name="rest_address" value={formdata.vendor_address} onChange={handleInput} />
                </label>
                <label>
                    Zip Code:
                    <input type="text" name="rest_zipcode" value={formdata.vendor_zipcode} onChange={handleInput} />
                </label>
                <label>
                    Owner ID:
                    <input type="text" name="rest_owner_id" value={formdata.vendor_owner_id} onChange={handleInput} />
                </label>
                <label>
                    Image:
                    <input type="text" name="rest_image" value={formdata.vendor_image} onChange={handleInput} />
                </label>
                <label>
                    Phone Number:
                    <input type="text" name="phone_num" value={formdata.phone_num} onChange={handleInput} />
                </label>
                <label>
                    Cuisine:
                    <input type="text" name="cuisine" value={formdata.cuisine} onChange={handleInput} />
                </label>
                <button type="submit">Vendor Registration</button>
            </form>
        </div>
    );
}

export default VendorFormView;
