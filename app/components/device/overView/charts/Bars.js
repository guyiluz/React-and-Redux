import React,{Component} from 'react';
import PropTypes from 'prop-types';
import   {ResponsiveContainer,BarChart,Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from  "recharts";
import  _  from 'lodash';
       

class Bars extends Component {
    constructor(props) {
        super(props);
    }




    render(){
    
    var  data = this.props.coreData

    return (
<ResponsiveContainer width="100.5%" height={49}>
<BarChart data={data}  syncId="anyId">



<Tooltip active={true} />
<Bar dataKey="Weight" fill="#8884d8" />

</BarChart>
   </ResponsiveContainer>  


    )

};}
    
export default Bars;