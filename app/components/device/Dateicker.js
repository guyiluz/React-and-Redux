// lib
import React from 'react'
import 'react-dates/initialize';
import { isOutsideRange,DateRangePickerWrapper,DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import Moment from 'react-moment';
// import 'moment-timezone'
import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';
import Timepicker from './Timepicker'
import { Icon } from 'semantic-ui-react'
import moment from "moment";
import { debug } from 'util';


const propTypes = {
    // example props for the demo
    autoFocus: PropTypes.bool,
    autoFocusEndDate: PropTypes.bool
 
}
const date = new Date();
console.dir(propTypes.initialStartDate);

// components
 
// other

class Dateicker extends React.Component {
    constructor(props){
super(props)


this.state={
        focusedInput : null,
        startDate: new moment(this.props.DataDetails.fromDate*1000),
        endDate: new moment(this.props.DataDetails.toDate*1000),
        showTime:false,
        timefrom:"07:00",
        timeTo:"19:00"

      

}
    }

    timeBtn=(timeArray)=>{
this.setState({
    timefrom:timeArray[0],
    timeTo:timeArray[1]


})

    }
    
        
    onOff=()=>{
    if(this.state.showTime){
        this.setState({
            showTime:false
        })
    }else{
        this.setState({
            showTime:true
        }) 
    }

    }

    handleDC=(e)=>{
const fromDate =e.startDate.unix()
const toDate =e.endDate.unix()
this.props.handelDeviceID(
    {...this.props.DataDetails,
     fromDate, toDate }
    
    )
    this.props.deviceIsOn({
        data:[],
        isLoading:false
        
                
            })
    }


    getValidDate(day) {  //  startTime or a year ago
        let startDateLimit = this.state.startDateLimit;
        let date = new Date(day).getTime();
        let { saletime={} } = this.props;
     
        let { start_time, end_time } = saletime;
        let inStart = true, inEnd = true;
        if(start_time)
          inStart = date > new Date(start_time).getTime()-60 * 60 * 12 *1000;
        if(end_time)
          inEnd = date < new Date(end_time).getTime()+60 * 60 * 12 *1000
          console.log('inEnd:',inEnd);
        if(startDateLimit){
          return !(inStart&&date > startDateLimit-60 * 60 * 24 *1000 && inEnd&&date <= startDateLimit + 60 * 60 * 24 * 31 * 1000);  // 31 day
        }
        return !(inStart&&date>new Date().getTime()-60*60*24*365*1000 && inEnd);  //  a year
      }

      
        render() {
       
          
      
            return (
                <div className ="time-date-box">
<DateRangePicker
displayFormat="DD/MM/YY"
startDate={this.state.startDate}
endDate={this.state.endDate}
  onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} 
  focusedInput={this.state.focusedInput} 
  onFocusChange={focusedInput => this.setState({ focusedInput })}
  isOutsideRange={(day) => this.getValidDate(day)}
  onClose={this.handleDC}
/>

<div> 
<div className="time-btn" onClick={() => this.onOff()}>
<div>{this.state.timefrom}-{this.state.timeTo}</div>   
<Icon name='clock'/>


</div>

{
    this.state.showTime
      ? <Timepicker timeBtn={this.timeBtn} {...this.props} />
      : null
  }
</div>


</div>     
                
            )
            }
        }




            export default Dateicker;    