// lib
import React from 'react'
import {connect} from "react-redux";
import {deviceData,DataDetails,buttonDisplay,geoFence,newGeoFence,notifction, } from "../../actions/items";
import { Tab,Button } from 'semantic-ui-react'

import Dateicker from './Dateicker'
import Notifiction from './notification/Notification'
import SmartNotifiction from "./notification/SmartNotifiction"
import Log from "./Log"
import GeoFenceing from "./GeoFencing/GeoFenceing"
import Overview from './overView/Overview'
import Map from "./Map/Map"
import Settings from "./Settings/Settings"

// components

 
// other

class HeaderSec extends React.Component {
  

    handelBtnClick=()=>{
        const {Handelbtn,buttonDisplay}=this.props  
if(buttonDisplay.save){

   Handelbtn({
        date:false,
        edit:true,
        save:false 
    })}
 

if(buttonDisplay.edit){
    Handelbtn({
        date:false,
        edit:false,
        save:true
    
    })}

    }

render(){
    const {deviceData,buttonDisplay}=this.props  
let btn =""
if(this.props.buttonDisplay.date){

    btn=    <Dateicker {...this.props}/>
}else if(buttonDisplay.edit){
    
        btn=    <div className="btn" ><Button primary onClick={this.handelBtnClick}>New</Button></div> 
    }



    if(buttonDisplay.save){
        
            btn=    <div className="btn" ><Button  onClick={this.handelBtnClick} primary >Back</Button></div> 
        }

    

const data= deviceData.data.GetCoreHistoryResult
    const mapPath=[]
    var mapLl=data.map((item)=>{

     if(item.LatPosition!==null&&item.LongPosition!==null&&item.LatPosition>10&&item.LongPosition>10)
    {



        mapPath.push({lat:item.LatPosition,lng:item.LongPosition })
     }

    })

    const panes = [
        { menuItem: 'Overview', render: () => <Tab.Pane><Overview mapPath={mapPath}  coreData={data}/>  </Tab.Pane> },
        { menuItem: 'Notifications', render: () => <Tab.Pane>< SmartNotifiction {...this.props} /></Tab.Pane> },
        { menuItem: 'Log', render: () => <Tab.Pane><Log /></Tab.Pane> },
        { menuItem: 'Map', render: () => <Tab.Pane>  <Map mapPath={mapPath} />   </Tab.Pane> },
        { menuItem: 'Geo-Fence', render: () => <Tab.Pane> <GeoFenceing {...this.props} /></Tab.Pane> },
        { menuItem: 'Settings', render: () => <Tab.Pane> <Settings/>  </Tab.Pane> },
      ]
      
    return(

        <div className="Header-sec">
            <div className="Header-sec-left">

            <div className="device-text">Device: {this.props.DataDetails.userId}</div>
    
        <div className="time-date-box">
     
     {btn}
        </div>
        </div>
 

 <Tab panes={panes} /> 
        </div>
     )    
    }
}


const mapStateToProps = (state) => {
    return {
    
        DataDetails:state.DataDetails,
        deviceData:state.deviceData,
        buttonDisplay:state.buttonDisplay,
        newGeoFence:state.newGeoFence,
        geoFence:state.geoFence,
        notifction:state.notifction
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
    
        deviceIsOn:(obj)=>dispatch(deviceData(obj)),
        chageDate:(obj)=>dispatch(DataDetails(DataDetails)),
        Handelbtn:(obj)=>dispatch(buttonDisplay(obj)),
        HandelAddress:(obj)=>dispatch(geoFence(obj)),
        HandelnewGeoFence:(obj)=>dispatch(newGeoFence(obj)),
        HandelNotifiction:(obj)=>dispatch(notifction(obj)),
        GetGeoFences:(obj)=>dispatch(geoFence(obj))  

    };
};

export default connect(mapStateToProps,mapDispatchToProps)(HeaderSec);

