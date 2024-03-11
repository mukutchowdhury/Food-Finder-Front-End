import React from "react";

function Testimonial({name, text, rating }) {
    return (
        <div className="testimonial">
            <p>{`"${name}"`}</p>
            <p>{text}</p>
            <p>{rating}</p>
        </div>
    );
}

export default Testimonial;
