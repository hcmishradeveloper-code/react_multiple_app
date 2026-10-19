import React from 'react';
import ReactStepper from "./ReactStepper";
import {Link} from 'react-router-dom';
import "./stepperStyle.css";

function MainStepper(){

    const steps = [
         {
            label:"Personal Info",
            content:"Personal Information Content",
         },
         {
            label: "Account Info",
            content:"Account Info Content",
         },
         {
            label: "Payment Info",
            content:"Payment Information",
          },
         {
            label: "Confirmation",
            content:"Confirmation Content", 
         },
         {
            label: "Review",
            content:"Review Content"
         }
     ]

    return(
        <div style={{marginLeft:"4rem", width:'700px'}}>
            <h3>Main Components</h3>
            <ReactStepper steps={steps}/>
            <Link to="/">Return to home page</Link>
        </div>
    )
}
export default MainStepper;