
import React from 'react'
import Search  from 'react-icons/lib/fa/search'


import {connect} from "react-redux";
import { tableLoading,getDevicesList } from "../actions/items";

import Aside from './Aside'
import UnitSpecsTbale from './UnitSpecsTbale'

// other
const proxyUrl = 'http://localhost:8080/'
class UnitSpecs extends React.Component {

    
componentWillMount(){
   this.props.getDevicesList()                  

}


componentWillUnmount(){

    this.props.getData({
        ...this.props.tableLoading,
        isLoading:true

    })

}



    render() {
   const {dataProfiles, dataDev,isLoading} = this.props.tableLoading;
   if(!isLoading){

    return (
        <div className="main">
            <UnitSpecsTbale {...this.props}/>
                      <Aside/>
          </div>
)
   }


   return (
    <div className="main">
      <Aside/>
      </div>
   )
       


            
        
    
}
}



const mapStateToProps = (state) => {
    return {
        tableLoading: state.tableLoading
        

    };
};


const mapDispatchToProps = (dispatch) => {
    return {
       
        getData:(obj)=>dispatch(tableLoading(obj)),
        getDevicesList:()=>dispatch(getDevicesList())
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(UnitSpecs);



