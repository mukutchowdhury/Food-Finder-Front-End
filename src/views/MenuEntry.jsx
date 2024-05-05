import { useState } from 'react';
import '../styling/MenuForm.css';


function MenuForm() {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: 0,
        category: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
        ...prevState,
        [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Description:
                <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Price:
                <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Category:
                <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );

}

export default MenuForm;

