
import React from 'react'
import { Table,Icon } from 'semantic-ui-react'
import Aside from './Aside'
import Device from './Device'
import {connect} from "react-redux";
import {ShowHideManue } from "../actions/items";

import {BrowserRouter as Router ,Link, Route} from 'react-router-dom'

class UnitSpecsTbale extends React.Component {
    
    render() {
     
    var {dataProfiles,dataDev} =this.props.tableLoading
      
    var  data =dataDev.GetCoreDevicesResult
            return (
                <div className="unit-spaces-table">
                    <p>Device Specifications</p>
                  
                <Table singleLine 
>
                <Table.Header>
                   <Table.Row>
                   <Table.HeaderCell>Profile</Table.HeaderCell>
                   <Table.HeaderCell>serial number</Table.HeaderCell>
                   <Table.HeaderCell>User id</Table.HeaderCell>
                   </Table.Row>
                </Table.Header>
                <Table.Body>
                {data.map((data, key) => {
                   return (
              
                   <Table.Row key={key}>
                     <Table.Cell>{data.CoreProfileId}</Table.Cell>
                     <Table.Cell>{data.DeviceSerialNumber}</Table.Cell>
                            <Table.Cell><Link to={{ pathname:'/device', search:`${data.UserId}`}}>{data.UserId}</Link></Table.Cell>
                   </Table.Row>
                 
                   )
                })}
                </Table.Body>
              </Table>
            
             
            
             
           
              </div>
      

            )





                
       



}


}

const mapStateToProps = (state) => {
    return {
        ShowHideManue: state.ShowHideManue,
       

    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        showManu: (bool) => dispatch(ShowHideManue(bool)),
       
    };
};



export default connect(mapStateToProps,mapDispatchToProps)(UnitSpecsTbale);


