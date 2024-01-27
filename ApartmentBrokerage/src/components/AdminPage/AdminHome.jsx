import React from "react";
import { useState} from "react";

function AdminHome() {
  const [details, setDetails] = useState({
    name: 'שם העסק',
    address: 'כתובת העסק',
    contact: 'דרכים ליצירת קשר:',
    phone: '036776391',
    mail: 'm0533156293@gmail.com',
    internet: 'www.myHome.co.il'
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      {!isEditing ? (
        <div>
          <h2>{details.name}</h2>
          <p>כתובת: {details.address}</p>
          <p>טלפון:{details.phone}</p>
          <p>מייל:{details.mail}</p>
          <p>אתר הבית:{details.internet}</p>
          <button onClick={handleEdit}>עריכה</button>
        </div>
      ) : (
        <div>
          <h2>
            <input
              type="text"
              name="name"
              onChange={handleChange}
            /></h2>
          <p>כתובת:
            <input
              type="text"
              name="address"
              onChange={handleChange}
            /></p>
          <p>טלפון:
            <input
              type="text"
              name="phone"
              onChange={handleChange}
            /></p>
          <p>מייל:
            <input
              type="email"
              name="mail"
              onChange={handleChange}
            /></p>
          <p>אתר הבית:
            <input
              type="text"
              name="internet"
              onChange={handleChange}
            /></p>
          <button onClick={handleSave}>שמירה</button>
        </div>
      )}
    </div>
  );
};

export default AdminHome;