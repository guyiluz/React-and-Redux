// lib
import React from 'react'
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import Moment from 'moment';
import {connect} from "react-redux";
import { ShowHideManue,deviceData,DataDetails } from "../../actions/items";

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;
    var hours = 0
    var minutes = 0
    var time = Moment(hours + ':' + minutes, 'HH:mm');
time.add(15,'m');




const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
}


// other

class Timepicker extends React.Component {



handleChage=(value)=>{

  var hours =value.map((val)=>{
    var hours = 0
    var minutes = 0
    var time = Moment(hours + ':' + minutes, 'HH:mm');
   time.add(val, 'm').format('hh:mm')
  return Number(time.format("HH"))
   })
 

   var minutes =value.map((val)=>{
    var hours = 0
    var minutes = 0
    var time = Moment(hours + ':' + minutes, 'HH:mm');
   time.add(val, 'm').format('hh:mm')
  return Number(time.format("HH")) 
   })
 
  let {fromDate,toDate,userId} =this.props.DataDetails

   var from= new Date(1000*fromDate)
  from= from.setMinutes(minutes[0])
 from= new Date(from)
  from= from.setHours(hours[0])
 


  var to= new Date(1000*toDate)
  to= to.setMinutes(minutes[1])
  to= new Date(to)
  to= to.setHours(hours[1])
 


 
 
this.props.handelDeviceID(
{...this.props.DataDetails,
 fromDate:  from/1000, toDate: to/1000}

)
value=value.map((val)=>{
  var hours = 0
  var minutes = 0
  var time = Moment(hours + ':' + minutes, 'HH:mm');
 time.add(val, 'm').format('hh:mm')
return time.format("HH:mm")
 })


this.props.timeBtn(value)

}

  render() {


var  handleVal=(val)=>{
  var hours = 0
  var minutes = 0
  var time = Moment(hours + ':' + minutes, 'HH:mm');
  time.add(val, 'm');


  


  return time.format("HH:mm");

}


    const wrapperStyle = { width: "90%", marginLeft: "6%"};
    return (
   
      <div style={wrapperStyle}>
        <p>Custom Range</p>
        <Range defaultValue={[420, 1140]}    onAfterChange={value=>{
          this.handleChage(value)}} min={1} max={1439} tipFormatter={value =>
        
          ` ${handleVal(value)}`} />
      </div>



    )
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
      handelDeviceID:(obj)=>dispatch(DataDetails(obj))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Timepicker);







