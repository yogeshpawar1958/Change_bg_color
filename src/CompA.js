import React ,{useState} from 'react'
import './index.css'
import CompB from './CompB.js';
const CompA = () => {

    const [color,setColor]=useState();
    const [bgcolor,setBgColor]=useState();


const Submit=(event)=>
{ 
    event.preventDefault();
    if(color){

    
    var hex=color
   
const regex = new RegExp('^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$');
     if (regex.test(hex))
     {
        
        setBgColor(hex)
     }
   else
     {
       alert("enter the correct hex color")
     }
    }else{
        alert("Field should no be empty")
    }
    
}

    return (
        <>
        <div style={{position:"absolute"}}>
      
      <div className="inner_div" style={{marginTop:"350px",width:"300px",textAlign:"center",marginLeft:"220px"}}>
     <form>
     <input type="text" name="color" value={color} onChange={(event)=>setColor(event.target.value)} placeholder="enter hex color" required />

<br/><button onClick={Submit} style={{borderRadius:"30px",width:"120px",marginTop:"20px",height:"50px",backgroundColor:"aqua"}}>setColor</button>
        
     </form>
       
        
        </div>
           
   
       </div>
     <div style={{marginTop:"80px",backgrounColor:"red"}}>
<CompB   color={bgcolor}/>
</div> 
<CompB/>
        </>
    )
}




export default CompA




