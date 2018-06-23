// lib
import React from 'react'
// components

 
// other

class TopNav extends React.Component {


    render() {

        return (
            <nav className="top-nav" role="navigation ">
    
            <div className="navbar-header ">

                <div><img src={require('../assets/img/hereo-icon.png')} /></div>
                <div className="name ">IOT Product Generator </div>

            </div>
          
        </nav>


            
        )
    }
}

export default TopNav;

