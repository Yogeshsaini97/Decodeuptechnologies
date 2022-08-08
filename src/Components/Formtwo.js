import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useNavigate} from "react-router-dom"


function Formtwo() {

    const[Occupation,SetOccupation]=useState("");
    const [startDate, setStartDate] = useState(new Date());
    const[styleofbar,Setstyleofbar]=useState("50%");
    const[valuenowofbar,Setaluenowofbar]=useState("50");
    

    const Navigate=useNavigate();

    
const getOccupation=(event)=>
{
    SetOccupation(event.target.value);

}

    

const CompleteSteptwo=(event)=>
{
    event.preventDefault();
    if(!Occupation)
    {
        alert("please !! fill all details first")
    }

    console.log(Occupation);

    Setstyleofbar("50%");
    Setaluenowofbar("50");


   

   


    

}


const CompleteStepbeftwo=(event)=>
{
    event.preventDefault();
    Navigate("/");
   

   


    

}




   
  

  return (<>
    <div className="progress">
  <div className="progress-bar" role="progressbar" style={{width: `${styleofbar}`}} aria-valuenow= {`${valuenowofbar}`} aria-valuemin="0" aria-valuemax="100"></div>
</div>
    <div className="container my-5">

    <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} />
   
    {/* <div className="progress">
  <div className="progress-bar" role="progressbar" style={{width: `${styleofbar}`}} aria-valuenow= {`${valuenowofbar}`} aria-valuemin="0" aria-valuemax="100"></div>
</div> */}
{/* <div className="progress">
  <div className="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div> */}
     <div className="container">
        <form className="container">
       
 <div className="form-check my-5">
 <div for="exampleInputEmail1 my-5">Please Choose Gender</div>   
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" for="flexCheckDefault">
    Male
  </label>
</div>
<div className="form-check ">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked/>
  <label className="form-check-label" for="flexCheckDefault">
    Female
  </label>
</div>
          
          <div className="form-group my-5 ">
            <label for="exampleInputEmail1">Occupation</label>
            <input
            value={Occupation}
            onChange={getOccupation}
              type="name"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Your Occupation Here..."
            /> 
            { (!Occupation) && <div><h6 className="text-danger float-left ">please enter Occupation here</h6></div>}
          </div>
    
        </form>
      
    </div>
    <div>sorry. within this time limit i was able to make upto this only, however i cam complete this project if i could get more time, hope you find my functionalities meaning full!!
        
        thanks
        yogesh saini</div>
    
    </div>
    <div className=" container my-5 my-5 d-flex justify-content-between" style={{position:"relative",top:"100px"}}>
          <button type="button" disabled={false}  onClick={CompleteStepbeftwo}  className="btn btn-dark ">
            previous
          </button>
          <button type="button" disabled={false} onClick={CompleteSteptwo}   className="btn btn-dark">
            Next
          </button>
        </div>

        
    </>)
}



export default Formtwo;
