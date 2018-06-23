import React, { Component } from 'react';
import Existed from "./Existed"
import Edit from "./Edit"
import { Loader } from 'semantic-ui-react'



class GeoFenceing extends Component {


    componentDidMount(){
             
        this.props.Handelbtn({
date:false,
edit:true,
save:this.props.buttonDisplay.save

        })
    }
componentWillUnmount(){

      
this.props.Handelbtn({
    
      date:true,
      edit:false,
      save:false
    
    })
}


    render() {
        
let {date,edit,save} =this.props.buttonDisplay
 if(edit){
    return (
        <div>
        <Existed  {...this.props} buttonDisplay={this.props.buttonDisplay}  Handelbtn={this.props.Handelbtn}  userId = {this.props.DataDetails.userId} geoFence= {this.props.geoFence}/>    
        </div>
    );

 }

 if(save){

    return (
        <div>
        <Edit  {...this.props}/>    
        </div>
    );  
 }



 return (
<div className="dev-main">
<div Header-sec>

<Loader active inline='centered' /></div> 
</div>
);  
       
    }
}

export default GeoFenceing;