import React, { Component } from 'react';
import { Table,Checkbox,Button } from 'semantic-ui-react'
import Moment from 'react-moment';

class GeoMain extends Component {
      
          render() {
            
        let data  = this.props.geoFence.data
        
            return (
      
              <div className="geo-main" >  
                <div className="unit-spaces-table">
              
                  
                <Table singleLine textAlign="center">
                <Table.Header>
                   <Table.Row textAlign="center">
                   <Table.HeaderCell textAlign="center">NAME</Table.HeaderCell>
                   <Table.HeaderCell textAlign="center" >ADDRESS</Table.HeaderCell>
                   <Table.HeaderCell  textAlign="center">COORDINATES</Table.HeaderCell>
                   <Table.HeaderCell textAlign="center">CREATED DATE</Table.HeaderCell>
                   <Table.HeaderCell textAlign="center" >ENTER | LEAVE
</Table.HeaderCell>
                
                   </Table.Row>
                </Table.Header>
                <Table.Body>
                {data.map((data, key) => {
                  var date =data.CreatedDate
                   return (
              
                   <Table.Row key={key}>
                     <Table.Cell>{data.SafeZoneName}</Table.Cell>
                     <Table.Cell>{data.AhandleDelteddress}</Table.Cell>
                     <Table.Cell>{data.LatPosition},{data.LongPosition}</Table.Cell>
                     <Table.Cell>  <Moment format="YYYY/MM/DD"  unix>{date}</Moment>
                     
</Table.Cell>
                     <Table.Cell> <Checkbox disabled label='' defaultChecked />
  |
<Checkbox disabled label='' defaultChecked  />
  </Table.Cell>

  <Table.Cell>  <Button  value={data.SafeZoneId} ref="check_me" onClick={this.props.hendelDel} primary>Delete </Button></Table.Cell>

                   </Table.Row>
                 
                   )
                })}

           
            
                </Table.Body>
              </Table>
            

              </div>  
    </div> 
            );
          }
        }
        
        export default GeoMain;
        