import React from 'react'
import './index.css'
const CompB = (props) => {
    var a=props.color;
    
    return (
        <div>
           <div className="div-style1" style={{backgroundColor:`${a}`}}>
         
            
        </div>
        </div>
    )
}

export default CompB
