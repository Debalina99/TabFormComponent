import React, { useState } from "react";
import "../App.css";
import Profile from "./Profile";
import Interests from "./Interests";
import Settings from "./Settings";
function TabForm() {
  const [data, setData] = useState({
    name:"Debalina",
    age:25,
    email:"debalinalaha@gmail.com",
    interests:["boxing","music"],
    theme:"dark"
  });
  const [errors,setErrors]=useState({});
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate:()=>{
        const err={};
        if(!data.name || data.name.length < 2){
            err.name="Name is not valid";
        }
        if(!data.age || data.age < 18){
            err.age="Age is not valid";
        }
        if(!data.email || data.email.length<2){
            err.email="Email is not valid";
        }
        setErrors(err);
        return err.name || err.age ||err.email ? false :true;
      }
    },
    {
      name: "Interests",
      component: Interests,
      validate: ()=> {
        const err={};
        if(!data.interests || data.interests.length < 1){
            err.interests="Select atleast one interests"
        }
        setErrors(err);
        return err.interests ? false : true;
      }
    },
    {
      name: "Settings",
      component: Settings,
      validate: ()=> {
        return true;
      }
    },
  ];
  const ActivetabComponent = tabs[activeTab].component;
 
  const prevhandler = ()=>{
    if(tabs[activeTab].validate()){
    setActiveTab((prev) => prev - 1);
  }}
  const nexthandler=()=>{
    if(tabs[activeTab].validate()){
    setActiveTab((prev) => prev + 1 );
  }}
  const submithandler=()=>{
    console.log(data);
  }

  return (
    <div >
      <div className="heading">
        {tabs.map((t, ind) => (
          <div key={ind} className="heading-container" onClick={()=>setActiveTab(ind)}>
            {t.name}
          </div>
        ))}
      </div>
      <div className="container">
        <ActivetabComponent data={data} setData={setData} errors={errors}/>
      </div>
      <div>
        {activeTab > 0 && <button onClick={prevhandler}>Prev</button>}
      </div>
      <div>
        {activeTab < tabs.length-1 && <button onClick={nexthandler}>Next</button>}
      </div>
      <div>
        {activeTab===tabs.length-1 && <button onClick={submithandler}>Submit</button>}
      </div>
    </div>
  );
}

export default TabForm;
