import React, { Component } from 'react';
import Gmap from "../GeoFencing/Gmap"
import { withScriptjs, withGoogleMap, GoogleMap, Marker,Polyline, icon, Google} from "react-google-maps"
import { Input ,Checkbox,Button } from 'semantic-ui-react'
import Slider from 'rc-slider';
import { mapData } from '../../../actions/items';




class Map extends Component {
 
  
        
        
           


    render() {

let marker ="",
center="",
mapPath = this.props.mapPath


        if(mapPath.length!==0){
            center = mapPath[Math.round(mapPath.length/2)]
            marker = mapPath.map((loc)=> {

                return <Marker position={loc} />
                
            }) 
            
            
                

        }


        const marks ={
0:"0km",
10:"10km",
20:"20km"

        }
       
        
        const resp ={
            0:"low",
            1:"17RSSI",
            2:"High"
            
                    }
        return (
            <div>
            <Gmap
            isMarkerShown
            withGoogleMap
            center={center}
            markers ={marker}
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD9mbOueI353Xh6Aear6wNQ_Mt-DHpmZkc&libraries=geometry,places,drawing"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div className ="mapc" style={{ height: `30vh` }} />}
            mapElement={<div style={{ height: `100%` }}/>}    
            drawingControl={true}       
              />
            <div className="map-filter-main">
             <div><p className="title-page" >Filters</p>
             </div> 
          
<div  className= "map-main-first">
<div className="filter-box-first" >
 
<div className="title">AREA</div>
<div><Input icon="marker" /></div>
<div>
    <p>From center</p>

<Slider min={0} max={20} marks={marks} defaultValue={10} />
</div>

</div>


<div className="filter-box-first" >
    
<div className="title">GEO-FENCE</div>

<div className="main-first" >
<Checkbox label='Saved Areas ' />
<Checkbox label='Most visited' />
<Checkbox label=' Boundriers' />
</div>

</div>


<div className="filter-box-first" >
<div className="title">RECEPTION QUALITY</div>

<div className="main-first">
<div><Input icon="chevron right" value="Low Reception"/></div>

<Slider min={0} max={2} marks={resp} defaultValue={0} />

</div>
</div>


</div>

<div  className= "map-main-sec"> 
<div className="check-box">
<div className="check-header">
NETWORK TYPE
</div>
<div className="check-main">
<Checkbox label='BLE DATA' />
<Checkbox label='BEACON DATA' />
<Checkbox label='WIFI' />
<Checkbox label='GSM' />
<Checkbox label='SMS' />



</div>


</div>
<div className="check-box">
<div className="check-header">
LOCATION TECH
</div>
<div className="check-main">
<Checkbox label='WIFI' />
<Checkbox label='GSM' />
<Checkbox label='GPS' />
<Checkbox label='BLE' />
<Checkbox label='Mobile' />


</div>


</div>
<div className="check-box">
<div className="check-header">Event
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
            </div>
        );
    }
}


    export default Map
