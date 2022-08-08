import React, { useEffect, useState } from 'react'

import {useNavigate} from "react-router-dom"

function Formone() {

    const Navigate=useNavigate();

    const[FirstName,SetFirstName]=useState("");
    const[LastName,SetLastName]=useState("");
    const[Email,SetEmail]=useState("");
    const[styleofbar,Setstyleofbar]=useState("10%");
    const[valuenowofbar,Setaluenowofbar]=useState("10");
    

useEffect(()=>
{
if(localStorage.getItem("user"))
{
    let data=localStorage.getItem("user");
    let datas=JSON.parse(data);
    SetFirstName(datas.FirstName);
    SetLastName(datas.LastName);
    SetEmail(datas.Email);
    
}
},[])
    
const getFirstName=(event)=>
{
  SetFirstName(event.target.value);

}

    
const getLastName=(event)=>
{
  SetLastName(event.target.value);

}


const getEmail=(event)=>
{
 SetEmail(event.target.value);
 
}

const CompleteStepone=(event)=>
{
    event.preventDefault();



    if(!FirstName || !LastName || !Email  )
    {
       return alert("please !! fill all details first")
    }

    let count=0;
for (const s of Email)
 {
  if(s=="@")
  {
    count++;
  }
}

if(count==0)
{
    alert("please!! enter valid Email adress");
    return Email;
}
  
    const objectcrea={FirstName,LastName,Email};
    console.log(objectcrea);

Setstyleofbar("50%");
Setaluenowofbar("50");
console.log(Email);

const auth=localStorage.setItem('user',JSON.stringify(objectcrea))



Navigate("/Formtwo");



   

 

}





  return (<>
    <div>
    <div className="progress">
  <div className="progress-bar" role="progressbar" style={{width: `${styleofbar}`}} aria-valuenow= {`${valuenowofbar}`} aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div className="container text-center my-5"><h1>hi! Lets Complete your Profile!!</h1></div>
     <div className="container">
        <form className="container">
          <div className="form-group my-5  ">
            <label for="exampleInputEmail1">First Name</label>
            <input
            value={FirstName}
            onChange={getFirstName}
              type="name"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Your First Name Here..."
            />
            { (!FirstName) && <div><h6 className="text-danger float-left ">please enter First Name here</h6></div>}
          </div>
          <div className="form-group my-5  ">
            <label for="exampleInputEmail1">Last Name</label>
            <input
            value={LastName}
            onChange={getLastName}
              type="name"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Your Last Name Here..."
            /> 
            { (!LastName) && <div><h6 className="text-danger float-left ">please enter Last Name here</h6></div>}
          </div>
          <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
              value={Email}
              onChange={getEmail}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Your Email..."
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
              { (!Email) && <div><h6 className="text-danger float-left ">please enter Your Email here!!!</h6></div> }
              </div>
          
        
          
        
          
          
          {/* <button onClick={CompleteStepone} type="submit" className="btn btn-primary">
          Submit
          </button> */}
        </form>
      
    </div>
    
    </div>
    <div className=" container my-5 my-5 d-flex justify-content-between" style={{position:"relative",top:"100px"}}>
          <button type="button" disabled={true}  onClick={CompleteStepone}  className="btn btn-dark ">
            previous
          </button>
          <button type="button" disabled={false} onClick={CompleteStepone}   className="btn btn-dark">
            Next
          </button>
        </div>
    </>)
}



export default Formone;
