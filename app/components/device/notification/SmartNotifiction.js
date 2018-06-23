import React, { Component } from 'react'
import Notifiction from "./Notification"
import { Loader } from 'semantic-ui-react'

class SmartNotifiction extends Component {

componentWillMount() {
    
    const fromDate=this.props.DataDetails.fromDate,
    toDate=this.props.DataDetails.toDate,
    userId=this.props.DataDetails.userId

    fetch('http://builder.hereofamily.com/core.svc/GetCoreNotifications', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:`{"userId": ${userId},"top":5}`
    }).then(res => res.json())
    .then((data)=>{

this.props.HandelNotifiction({
    data:data,
    isLoading:true

})



    })    
}



    render () {
        if(this.props.notifction.isLoading){
return <Notifiction data={this.props.notifction.data} /> 
        }


    return (
        <div>
<Loader active inline='centered' />

        </div>
    )


    }
}

export default SmartNotifiction