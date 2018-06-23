/*global google*/
import React, { Component, } from 'react';
import MapStyle from "../../mapStyle"
import { withScriptjs, withGoogleMap, GoogleMap, Marker,Polyline, icon, Google,} from "react-google-maps"


const  Gmap = withScriptjs(withGoogleMap((props) =>

      <GoogleMap
    defaultZoom={14}
    defaultCenter={new google.maps.LatLng( 32.163464,34.796340)}
    center = {props.center}
    path = {props.mapPath}
   
    defaultOptions={{  disableDefaultUI:true,styles:MapStyle

 }}>
 

<Polyline   path={props.mapPath}
geodesic={true} 


                    options={{ 
                              strokeColor: '#ee377b',
                              strokeWeight: 3,
                              icons: [{
                              icon:{
path: google.maps.SymbolPath.CIRCLE,
scale: 7,
strokeColor: 'white'
} ,
                                 offset:props.offset
  }],
                        
                            }}
/>

    
  </GoogleMap>

))


export default (Gmap);