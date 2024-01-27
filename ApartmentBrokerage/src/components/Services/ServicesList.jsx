import React, { useEffect } from "react";
import { useState } from 'react'


var services=[]; 
var service;
function ServicesList() {
const [service, setServices] = useState("service")


services = [...services,service];
    return (
        <>
           
        <button onClick={() => setServices((service)=>services=[...services,service])}>
            {services}
        </button>
    
    


        </>
    )
}
export default ServicesList;