// import React from 'react';
// import { Link } from 'react-router-dom';

// const Button = ({ to, text }) => {
//   if (to) {
//     // connect to link
//     return (
//       <Link to={to}>
//         <button className="rest-button">{text}</button>
//       </Link>
//     );
//   } else {
//     // placeholder
//     return <button className="rest-button">{text}</button>;
//   }
// };

// export default Button;

import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ to, restaurantId, text }) => {
  if (to) {
    // Connect to link using React Router's Link component
    return (
      <Link to={`${to}/${restaurantId}`}>
        <button className="rest-button">{text}</button>
      </Link>
    );
  } else {
    return <button className="rest-button">{text}</button>;
  }
};

export default Button;
