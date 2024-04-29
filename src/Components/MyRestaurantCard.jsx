function MyRestaurantCard(){
    return (
        <div key={index} className="restaurant-box">
            <p>Restaurant Name: Restaurant Name {index + 1}</p>
            <p>Address: {index + 1}23 Main St</p>
            <p>Phone: ({index + 1}23) 456-7890</p>
            <p>Opening Hours: Monday-Saturday: 9am-10pm, Sunday: 10am-8pm</p>
            <p>Cuisine Type: Italian</p>
            <button className="edit-btn" onClick={() => handleEditClick(`Restaurant Name ${index + 1}`)}>Edit</button>
        </div>

    )
}

export default MyRestaurantCard;