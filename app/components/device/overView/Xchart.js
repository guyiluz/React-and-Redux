import React from 'react';
import Bars from "./charts/Bars"
import Bars2 from "./charts/Bars2"
import Bars3 from "./charts/Bars3"
const Xchart = (props) => {
    return (
        <div className="xchart">
          
             <div className= "continer">
<div className="name">
Location
    
</div>
<div className="param">
<Bars coreData={props.coreData}/>
</div>
<div className="name" >
    <span>AGPS</span>
    </div>


             </div>
             <div  className= "continer" >
             <div className="name">Network</div>
<div className="param">
<Bars2 coreData={props.coreData}/>

</div>
<div className="name" >
    
    
<span>2G</span></div>


             </div>
             <div className= "continer">
             <div className="name">Events</div>
<div className="param"><Bars3  coreData={props.coreData}/></div>
<div className="name" >
    
    <span>Events</span>
    </div>
             </div>

            </div>
       
    );
};

export default Xchart;