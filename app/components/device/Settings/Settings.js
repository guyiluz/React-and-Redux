import React, { Component } from 'react';
import markerImg from "../../../assets/img/map_imarker(1).png"
import { Input ,Checkbox,Button} from 'semantic-ui-react'
import Select from "../../Fix_element/Select"




class Settings extends Component {
 
  
        
        
           


    render() {


            
                    
        return (
       
            <div className="map-filter-main">
             <div><p className="title-page" >Filters</p>
              <div><span>x</span>clear filter</div>
             </div> 
          
<div  className= "map-main-first">
<div className="filter-box-first" >
 
<div className="title">HARDWARE CONFIGURATION
</div>
<Select />

</div>


<div className="filter-box-first" >
    
<div className="title">PRODUCT PROFILE
</div>
<Select />


</div>


<div className="filter-box-first" >
<div className="title">EXTENSIONS
</div>

<div className="main-first">
<div><Select /></div>



</div>
</div>


</div>

<div  className= "map-main-sec"> 
<div className="check-box">
<div className="check-header">
DATA USAGE
</div>
<div className="check-main">
<Checkbox label='On Demand' />
<Checkbox label='Trigger Only' />
<Checkbox label='Low' />
<Checkbox label='Standard' />
<Checkbox label='HIgh' />

</div>


</div>
<div className="check-box">
<div className="check-header">
POWER PROFILE
</div>
<div className="check-main">
<Checkbox label='Very Low ' />
<Checkbox label='Low ' />
<Checkbox label='Standard' />
<Checkbox label=' High' />
<Checkbox label='Very High' />


</div>


</div>
<div className="check-box">
<div className="check-header">RECEPTION QUALITY

</div>
<div className="check-main">
<Checkbox label='Beahvour' />
<Checkbox label='Sensors' />
<Checkbox label='Activity' />
<Checkbox label='Status' />

</div>


</div>






</div>

           
            </div>
        
        )
    }
}


    export default Settings
