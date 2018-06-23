// lib
import React from 'react'
import { Breadcrumb } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'
import {BrowserRouter as Router ,Link, Route} from 'react-router-dom'

// components

 
// other

class header extends React.Component {

    
    render() {

        return (
            <div className="dev-header">
       
      <div className="breadcrumb">
    <div>   Dashboard /<span>Data</span></div>
   
      <div >
      <Link to="/Unit-Specs"> <Icon  name='remove' /></Link>
          </div>
       
      </div>

              </div>







            
        )
    }
}

export default header;

