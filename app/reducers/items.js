import Moment from 'moment'

var date = Moment()
const toDate = date.unix().toString() 
 
const fromDate = date.subtract(24, 'hours').unix().toString()




export function ShowHideManue(state = false, action) {
    switch (action.type) {
        case "SHOW/HIDE":
            return action.payload;

        default:
            return state;
    }
}





export function tableLoading(state = {
    dataProfiles:{},
    dataDev:{},
    isLoading:true

}, action) {
    
    switch (action.type) {
        case "ISLOADING":
            return {
                ...state,
                dataProfiles:action.payload.dataProfiles,
                dataDev:action.payload.dataDev,
           isLoading:action.payload.isLoading
     
         
            };

        default:
            return state;
    }
}




export function DataDetails(state = {
    userId:"",
    fromDate:fromDate,
    toDate:toDate,
}, action) {
    
    switch (action.type) {
        case "DEVICEDETILS":
            return {...state,
                userId:action.payload.userId,
                fromDate:action.payload.fromDate,
                toDate:action.payload.toDate
            }

        default:
            return state;
    }
}


export function deviceData(state = {
    data:{},
    isLoading:false
}, action) {
    switch (action.type) {
        case "DEVICEDATA":
            return {...state,
                data:action.payload.data,
                isLoading:action.payload.isLoading
            }

        default:
            return state;
    }
}




export function mapData(state ={
    offset:0
}, action) {
    switch (action.type) {
        case "MAPOVER":
            return {...state,
                offset:action.payload.offset,
            }

        default:
            return state;
    }
}




export function buttonDisplay(state ={
    date:true,
    save:false,
    edit:false
}, action) {
    switch (action.type) {
        case "BTN":
            return {...state,
                date:action.payload.date,
                save:action.payload.save,
                edit:action.payload.edit
            }

        default:
            return state;
    }
}


export function geoFence(state ={
   isAddress:false,
   latLng:[],
   data:[]
}, action) {
    switch (action.type) {
        case "GEOF":
            return {...state,
                isAddress:action.payload.isAddress,
                latLng:action.payload.latLng,
                data:action.payload.data
            }
        default:
            return state;
    }
}



export function newGeoFence(state ={
    address: "",
    latPos: 0,
    longPos: 0,
    radius: 150,
    szName:undefined,
    userId:""
 }, action) {
     switch (action.type) {
         case "NEWGEOF":
             return {...state,
                address:action.payload.address,
                latPos:action.payload.latPos,
                longPos:action.payload.longPos,
                radius: 150,
                szName:action.payload.szName,
                userId:action.payload.userId

             }
         default:
             return state;
     }

     
 }





export function notifction(state ={
   data:[],
   isLoading:false
 }, action) {
     switch (action.type) {
         case "GETNOTIF":
             return {...state,
                data:action.payload.data,
                isLoading:action.payload.isLoading,
             }
         default:
             return state;
     }
 }
 
 
