// lib
import React from 'react'
// components
import  TopNav  from "./TopNav";
import  BottomNav from "./BottomNav"; 
import  Menu  from "./Menu";
import  UnitSpecs  from "./UnitSpecs";
import  Aside from "./Aside"; 
import  LogData from "./LogData";
import  Loggin from "./Loggin";
import  Device from "./Device";
import {connect} from "react-redux";
import classNames from 'classnames/bind';  
import {HashRouter as Router ,Link, Route} from 'react-router-dom';
import {  ShowHideManue} from "../actions/items";





class Layout extends React.Component {



    componentDidMount(){

this.props.showManu(true)

    }
  

    render() {
       
        let manuClass= "menu"
        if (!this.props.ShowHideManue) {
            
            manuClass += ' hide';
        }
        return (
            <Router>
            <div className="layout">
             
              
               
          <TopNav/>  
          <BottomNav {...this.props}/>
      
          <div className={manuClass}>
       
<p>CORE DEVICES</p>
<Link to="/Unit-Specs">
<div className="core-dev-con">
<div className="manu-icon">
<img src={require('../assets/img/icon1.png')}/>
</div>
<div className="manu-text">
    <label>Unit Specs
</label>
    <p>6 devices
</p>
</div>


</div>
</Link>
<Link to="/Log-Data">
<div className="core-dev-con">
<div className="manu-icon">
<img src={require('../assets/img/section_symbols_blue_48px.png')}/>
</div>
<div className="manu-text">
    <label>Log Data
</label>
    <p>12 new updates
</p>
</div>
</div>
</Link>
<div className="psado-border"></div>


<div className="core-dev-con">
<div className="manu-icon">
<img src={require('../assets/img/icon3.png')}/>
</div>
<div className="manu-text">
    <label>Hardware

</label>
    <p>9 configurations

</p>
</div>
</div>
<div className="core-dev-con">
<div className="manu-icon">
<img src={require('../assets/img/icon4.png')}/>
</div>
<div className="manu-text">
    <label>Profiles

</label>
    <p>12 profiles


</p>
</div>
</div>
<div className="core-dev-con">
<div className="manu-icon">
<img src={require('../assets/img/icon5.png')}/>
</div>
<div className="manu-text">
    <label>Features

</label>
    <p>34 Ready
</p>
</div>
</div>
<div className="psado"></div>




              </div>
              <Route exact path="/"Loggin={Loggin}/>
              <Route exact path="/Unit-Specs" component={UnitSpecs}/>
              <Route exact path="/log-data" component={LogData}/>
              <Route  path="/device" component={Device} />
            
             
              
          </div>  
          </Router>
          
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ShowHideManue: state.ShowHideManue,
        tableLoading: state.tableLoading,
        DataDetails: state.DataDetails,
        deviceData: state.deviceData,

    };
    
};


const mapDispatchToProps = (dispatch) => {
    return {
        showManu: (bool) => dispatch(ShowHideManue(bool))
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(Layout);

