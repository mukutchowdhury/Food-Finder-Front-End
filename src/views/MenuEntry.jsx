import { useState } from 'react';
import '../styling/MenuEntry.css';


function MenuForm({ onCreateMenuItem }) {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        category: ''
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
        ...prevState,
        [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.description || !formData.price || !formData.category) {
            setMessage('All fields must be filled.');
            return;
        }

        try {
            await onCreateMenuItem(formData); // Call the onCreateMenuItem function, passing the formData
            setMessage('Menu item created successfully!');
            setFormData({ name: '', description: '', price: '', category: '' }); // Reset form after successful submission
        } catch (error) {
            console.error('Error creating menu item:', error);
            setMessage('Error creating menu item. Please try again.');
        }
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
            <div>{message}</div>
        </form>
    );

}

export default MenuForm;

