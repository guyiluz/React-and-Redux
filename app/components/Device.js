// lib
import React from 'react'
import Main from './device/Main'
import { Icon,Loader } from 'semantic-ui-react'
import {dataH} from './dataHandling'
import {connect} from "react-redux";
import { ShowHideManue,deviceData,DataDetails,getDeviceHistory } from "../actions/items";


class Device extends React.Component {

    componentDidMount (){
        const fromDate=this.props.DataDetails.fromDate,
        toDate=this.props.DataDetails.toDate,
        userId=this.props.location.search.replace('?',"")
       
this.props.showManu(false)
this.props.handelDeviceID({ userId:userId,
    fromDate:fromDate,
    toDate:toDate

})    

      
        
   fetch('http://builder.hereofamily.com/core.svc/GetCoreHistory', {
    method: 'post',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body:`{"userId": ${userId},"fromDate":"${fromDate.toString()}","toDate":"${toDate}"}`
}).then(res => res.json())
.then((data)=>{


    this.props.deviceIsOn({
data:data,
isLoading:true

        
    })
    this.props.showManu(false)
});
    




    }

 

    componentWillReceiveProps(nextProps){


if(this.props.DataDetails==undefined){
    
    return false
}

        if(this.props.DataDetails.fromDate!==nextProps.DataDetails.fromDate||this.props.DataDetails.toDate!==nextProps.DataDetails.toDate) {

        this.props.showManu(false)
        const fromDate=nextProps.DataDetails.fromDate,
        toDate=nextProps.DataDetails.toDate,
        userId=this.props.location.search.replace('?',"")
        
    

        fetch('http://builder.hereofamily.com/core.svc/GetCoreHistory', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:`{"userId": ${userId},"fromDate":"${fromDate.toString()}","toDate":"${toDate}"}`
        }).then(res => res.json())
        .then((data)=>{
            console.log(data);
            nextProps.deviceIsOn({
        data:data,
        isLoading:true
        
                
            })});
            

        }

      }
      componentWillUnmount() {
        this.props.showManu(true)
        this.props.deviceIsOn({
            ...this.props.deviceData,
            isLoading:false
            
                    
                })
        
      }
      
    


    


        render() {
            
             let dataRender =  <Icon loading name='asterisk' />

            const {data,isLoading}=this.props.deviceData
            const {toDate,fromDate}=this.props.DataDetails

                if (isLoading) {  
                    dataH(data)       
            
  return (
  <div className="device-page">
   
      <Main {...this.props} />

    </div>
  )
        
    }else{
       
        return <div className="dev-main">
            <div Header-sec>

            <Loader active inline='centered' /></div> 
            </div>
           
    }
    
}
}


const mapStateToProps = (state) => {
    return {
        ShowHideManue: state.ShowHideManue,
        DataDetails:state.DataDetails,
        deviceData:state.deviceData

    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        showManu: (bool) => dispatch(ShowHideManue(bool)),
        deviceIsOn:(obj)=>dispatch(deviceData(obj)),
        handelDeviceID:(obj)=>dispatch(DataDetails(obj)),
        getDeviceHistory:(userId,fromDate,toDate)=>dispatch(getDeviceHistory(userId,fromDate,toDate))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Device);




