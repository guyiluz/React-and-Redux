import React, { Component } from 'react';
import Barometric from "./Barometric"
import{Map} from "immutable"

class Smart extends Component {
    constructor(props){
super(props)


this.state={

    coreData:this.props.coreData
}

    }



    render() {
        const {coreData}=this.state
        
let barometricAvg = coreData.map((item)=>item.Barometric).reduce(function(a, b) { return a + b; })/coreData.map((item)=>item.Barometric).length




        return (
            <div>
                <Barometric coreData={coreData} avg={barometricAvg} {...this.props}/> 
         

            </div>
        );
    }
}

export default Smart;