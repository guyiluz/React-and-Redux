import React, { Component } from 'react';
import Gmap from './Gmap';
import Dateicker from '../Dateicker.js'
import Xchart from './Xchart'
import Roller from './Roller'
import Smart from './charts/Smart'
import {connect} from "react-redux";
import {mapData,buttonDisplay} from "../../../actions/items";




class Overview extends Component {


componentDidMount(){
  
this.props.Handelbtn({

  date:true,
  edit:false,
  save:false

})

}



changeOffset=(data)=>{
  if (data===0) {
    return false
  }
const dataLength =this.props.coreData.length
const correntData =data

let offset = `${(correntData/dataLength)*100}%`
let offsetTest = (correntData/dataLength)/100

this.props.setOffset({offset})



}



  render() {

if(this.props.coreData.length==0){
return (
<div>
<p className="no-data">No data please try a different date</p>

</div>

)

}


    const{mapPath}=this.props
    const pathCoordinates=mapPath
    const center = mapPath[Math.round(mapPath.length/2)]


    const lineSymbol = {
      path: 'M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0',
      fillColor: '#ee377b',
      fillOpacity: 0.6,
      strokeWeight: 1,
      scale: 1,
     };
    return (
    
    <div>   
 <Gmap
 isMarkerShown
 withGoogleMap
 googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD9mbOueI353Xh6Aear6wNQ_Mt-DHpmZkc&libraries=geometry,places,drawing"
 loadingElement={<div style={{ height: `100%` }} />}
 containerElement={<div className ="mapc" style={{ height: `30vh` }} />}
 mapElement={<div style={{ height: `100%` }} />}
 offset={this.props.mapData.offset}
 pagtline={pathCoordinates}
 lineSymbol={lineSymbol}
 mapPath={mapPath}
 center ={center}
 

 

 />
     <Xchart {...this.props} />
     <Roller/>
     <Smart {...this.props} changeOffset={this.changeOffset}/>
     </div> 
     
    );
  }
}



const mapStateToProps = (state) => {
  return {
    mapData: state.mapData,


  };
};


const mapDispatchToProps = (dispatch) => {
  return {
      setOffset:(obj)=>dispatch(mapData(obj)),
      Handelbtn:(obj)=>dispatch(buttonDisplay(obj)),
      

  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Overview);




