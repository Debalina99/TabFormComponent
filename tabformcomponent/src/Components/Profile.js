import React from 'react';

const Profile = ({ data, setData, errors }) => {
  let { name, age, email } = data;
  const handleDataChange = (e, item) => {
    setData((prevState) => ({
      ...prevState,
      [item]: e.target.value,
    }));
  };
  return (
    <div className="profile">
      <div>
        <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name..."
            value={name}
            onChange={(e) => handleDataChange(e, "name")}
          />
        
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div>
        <label>Age</label>
          <input
            type="number"
            placeholder="Enter your age..."
            value={age}
            onChange={(e) => handleDataChange(e, "age")}
          />
        
        {errors.age && <span className="error">{errors.age}</span>}
      </div>
      <div>
        <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email id..."
            value={email}
            onChange={(e) => handleDataChange(e, "email")}
          />
        
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
    </div>
  );
};

export default Profile;
