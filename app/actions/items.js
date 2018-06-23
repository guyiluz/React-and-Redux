const postOption = {    method: 'post',
headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}, 
}


export function ShowHideManue(bool) {
    return {
        type: "SHOW/HIDE",
        payload: bool
    };
}



export function tableLoading(obj) {
    return {
        type: "ISLOADING",
        payload: obj
    };
}


export function getDevicesList() {
  return (dispatch)=>{
  dispatch(tableLoading({
    dataProfiles:{},
    dataDev:{},
    isLoading:true}))
    fetch('http://builder.hereofamily.com/core.svc/GetCoreProfiles', {
...postOption,
        body:""

    }).then(res => res.json())
    .then((proData)=>{
           
           fetch('http://builder.hereofamily.com/core.svc/GetCoreDevices', {
            ...postOption, 
               body:""

           }).then(res => res.json())
           .then((DevData)=>{
            dispatch(tableLoading({
                dataProfiles:proData,
                dataDev:DevData,
                isLoading:false}))

             
           });
    

      
    })
    
   


  }
}

export function getDeviceHistory(userId,fromDate,toDate) {
    
    return (dispatch)=>{
        dispatch(deviceData({
            data:{},
            isLoading:false}))
            debugger
       console.log('done :');
    fetch('http://builder.hereofamily.com/core.svc/GetCoreHistory', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:`{"userId": ${userId},"fromDate":"${fromDate.toString()}","toDate":"${toDate}"}`
    }).then(res => res.json())
    .then((data)=>{
        dispatch(deviceData({
            data:data,
            isLoading:true}))



        this.props.showManu(false)
    });
        



    }

 


}




export function DataDetails(obj) {
    return {
        type: "DEVICEDETILS",
        payload: obj
    };
}

export function deviceData(obj) {
    return {
        type: "DEVICEDATA",
        payload: obj
    };
}



export function mapData(obj) {
    return {
        type: "MAPOVER",
        payload: obj
    };
}






export function buttonDisplay(obj) {
    return {
        type: "BTN",
        payload: obj
    };
}


export function geoFence(obj) {
    return {
        type: "GEOF",
        payload: obj
    };
}

export function newGeoFence(obj) {
    return {
        type: "NEWGEOF",
        payload: obj
    };
}


export function notifction(obj) {
    return {
        type: "GETNOTIF",
        payload: obj
    };
}




