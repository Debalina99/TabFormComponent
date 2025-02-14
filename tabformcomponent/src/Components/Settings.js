import React from 'react';

const Settings= ({ data, setData }) => {
  const {theme}=data;
  const handleDataChage=(e)=>{
    setData((prevState)=>({
        ...prevState, theme: e.target.name
      }))
  }
    return (
      <div className="settings">
       <label>
        <input type="radio" name="dark" checked={theme==="dark"} onChange={handleDataChage}/>
        Dark
       </label>
       <label>
        <input type="radio" name="light" checked={theme==="light"} onChange={handleDataChage}/>
        Light
       </label>
      </div>
    );
  }
  
  export default Settings;