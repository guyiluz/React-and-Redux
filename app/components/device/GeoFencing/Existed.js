import React, { Component } from 'react';
import Gmap from './Gmap';
import Edit from "./Edit"
import  GeoMain from "./GeoMain"
import { withScriptjs, withGoogleMap, GoogleMap, Marker,Polyline, icon, Google} from "react-google-maps"
import markerImg from "../../../assets/img/map_imarker(1).png"



class Existed extends Component {
componentDidMount(){
  const userId = this.props.DataDetails.userId
  fetch('http://builder.hereofamily.com/core.svc/GetSafezones',{
   method:'post',
   headers:{
     'Content-Type': 'application/json'

   },
   body:JSON.stringify({userId:userId})  


  }).then(res => res.json())
  .then((data)=>{
        
     this.props.GetGeoFences({
         ...this.props.geoFence,
data:data.GetSafezonesResult,
isAddress:true
     })
   
  })  



}
  hendelDel=(e)=>{
    
const safezoneId = e.target.value,
userId= this.props.userId
fetch('http://builder.hereofamily.com/core.svc/UpdateSafezone',{
 method:'post',
 headers:{
   'Content-Type': 'application/json'

 },
 body:JSON.stringify({safezoneId,isDelete:true,userId})  


}).then(res => res.json())
.then((data)=>{
  fetch('http://builder.hereofamily.com/core.svc/GetSafezones',{
    method:'post',
    headers:{
      'Content-Type': 'application/json'
 
    },
    body:JSON.stringify({userId:userId})  
 
 
   }).then(res => res.json())
   .then((data)=>{
         
      this.props.GetGeoFences({
          ...this.props.geoFence,
 data:data.GetSafezonesResult,
 isAddress:true
      })
    
   })  


})
}

  
    
  
      render() {
      
     const markers =[<Marker position={{ lat: 32.159974, lng:34.806715}}
      options={{icon: markerImg}} 
       />,
          
          <Marker position={{ lat: 32.163464, lng:34.796340}}
          options={{icon: markerImg}} 
          
           />,
               
     <Marker position={{ lat: 32.163999, lng:34.817202}}
     options={{icon: markerImg}} 
     
      />
     
     ]
  

     
     
      
 
  
        return (
        <div>
            
     <Gmap
     isMarkerShown
     withGoogleMap
     center={ {lat: 32.163464, lng:34.796340}}
     markers ={markers}
     drawingControl={false} 
     googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD9mbOueI353Xh6Aear6wNQ_Mt-DHpmZkc&libraries=geometry,places,drawing"
     loadingElement={<div style={{ height: `100%` }} />}
     containerElement={<div className ="mapc" style={{ height: `30vh` }} />}
     mapElement={<div style={{ height: `100%` }}/>}   />

<GeoMain   geoFence={this.props.geoFence} hendelDel={this.hendelDel}/>
         
</div> 
        );
      }
    }
    
    export default Existed;
    