import React,{Component} from 'react';
import PropTypes from 'prop-types';
import   {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from  "recharts";
import  _  from 'lodash';

       

class Barometric extends Component {
    constructor(props) {
        super(props);
    }


    componentWillMount() {
        this.setState({
            coreData:this.props.coreData,
            Barometricval:0,
            HumidityVal:0,
            TempratureVal:0,
            receptionVal:0
        })

      }

//       componentDidMount(){
// this.props.deviceData({
// data:this.props.deviceData.data,
// isLoading:true

// })


    //   }

      handelleave=()=>{
        this.props.changeOffset(0)
this.setState({
        Barometricval:0,
        HumidityVal:0,
        TempratureVal:0,
        receptionVal:0
})

      }

    handleEnter = ({ isTooltipActive, activePayload, activeTooltipIndex, activeLabel}) => {
         
      
        if(activePayload==undefined){
            
                        return false
                     }
            
                   var data=  activePayload["0"].payload
            
            
            if (this.state.Barometricval!==data.Barometric) {
                this.setState({
                    Barometricval:data.Barometric,
                   })
            }
            
            if (this.state.HumidityVal!==data.Barometric) {
                this.setState({
                    HumidityVal:data.Humidity
                   })
            }
            
            if (this.state.TempratureVal!==data.Temprature.toFixed(2)) {
                this.setState({
                    TempratureVal:data.Temprature.toFixed(2)
                   })
            }
            
            if (this.state.receptionVal!==(data.Barometric+Math.random()/2).toFixed(1)) {
                this.setState({
                    receptionVal:(data.Barometric+Math.random()/2).toFixed(1)
                   })
            }
            
            
                       this.props.changeOffset(activeLabel)
     
      };

      handleMove = ({ isTooltipActive, activePayload, activeTooltipIndex, activeLabel}) => {
  
      
         if(activePayload==undefined){

            return false
         }

       var data=  activePayload["0"].payload


if (this.state.Barometricval!==data.Barometric) {
    this.setState({
        Barometricval:data.Barometric,
       })
}

if (this.state.HumidityVal!==data.Barometric) {
    this.setState({
        HumidityVal:data.Humidity
       })
}

if (this.state.TempratureVal!==data.Temprature.toFixed(2)) {
    this.setState({
        TempratureVal:data.Temprature.toFixed(2)
       })
}

if (this.state.receptionVal!==(data.Barometric+Math.random()/2).toFixed(1)) {
    this.setState({
        receptionVal:(data.Barometric+Math.random()/2).toFixed(1)
       })
}


           this.props.changeOffset(activeLabel)
      };


    render(){
        const option ={
            strokeWidth:2,
            type:"monotone",
            dot:false}
    
            
    
    var  {coreData}=this.props
    
    var {Barometricval,HumidityVal,TempratureVal,receptionVal}=this.state

    return (
        <div>

        <div className="chartCountiner">   
  <div className="side">
      <div className="title">Barometric</div>
      <div className="data">max</div>
      <div className="data"></div>
  </div>
  <div className="chart">
    <ResponsiveContainer  width="100.5%" height={49}>
   	<LineChart  onMouseMove={this.handleMove}  handleMove={this.handleMove}  onMouseLeave={this.handelleave} data={coreData} syncId="anyId"
            >
    
            <Tooltip active={true} />
       <Line  dataKey="Barometric" stroke="#0093ee"  {...option}/>
      </LineChart>

 </ResponsiveContainer>
 
 </div>
  <div className="sideb">{Barometricval}</div>
  </div>
  <div className="chartCountiner">   
  <div className="side">
      <div className="title">Humidity</div>
      <div className="data">max</div>
      <div className="data"></div>
  </div>
  <div className="chart">
    <ResponsiveContainer width="100.5%" height={49}>
   	<LineChart onMouseEnter={this.handleEnter} onMouseMove={this.handleMove} data={coreData} syncId="anyId"
            >
    
            <Tooltip active={true} />
       <Line  dataKey="Humidity" stroke="#4ece3d" {...option} />
      </LineChart>

  
 
 </ResponsiveContainer>

 
 </div>
  <div className="sideb">{HumidityVal}</div>
  </div>



  <div className="chartCountiner">   
  <div className="side">
      <div className="title">Temprature</div>
      <div className="data">max</div>
      <div className="data"></div>
  </div>
  <div className="chart">
    <ResponsiveContainer width="100.5%" height={49}>
   	<LineChart data={coreData} syncId="anyId" onMouseEnter={this.handleEnter} onMouseMove={this.handleMove}  >
          
    
       <Tooltip active={true} />
       <Line  dataKey="Temprature" stroke="#26c1c9" {...option} />
      </LineChart>

  
 
 </ResponsiveContainer>
 
 </div>
  <div className="sideb">{TempratureVal}</div>
  </div>



  <div className="chartCountiner">   
  <div className="side">
      <div className="title">Reception</div>
      <div className="data">max</div>
      <div className="data"></div>
  </div>
  <div className="chart">
    <ResponsiveContainer  nMouseEnter={this.handleEnter} onMouseMove={this.handleMove} width="100.5%" height={49}>
   	<LineChart data={coreData} syncId="anyId" onMouseEnter={this.handleEnter} onMouseMove={this.handleMove}  >
          
    
       <Tooltip active={true} />
       <Line dataKey="Temprature" stroke="#26c1c9" {...option}/>
      </LineChart>

  
 
 </ResponsiveContainer>
 </div>
  <div className="sideb">{receptionVal}</div>
  </div>







  </div>
    )

};}
    
export default Barometric;