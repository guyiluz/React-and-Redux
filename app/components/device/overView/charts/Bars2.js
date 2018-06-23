import React,{Component} from 'react';
import PropTypes from 'prop-types';
import   {ResponsiveContainer,BarChart,Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from  "recharts";
import  _  from 'lodash';
       

class Bars2 extends Component {
    constructor(props) {
        super(props);
    }




    render(){
        var  data = this.props.coreData


    return (
<ResponsiveContainer width="100.5%" height={49}>
<BarChart data={data}  syncId="anyId">



<Tooltip active={true} />
<Bar dataKey="sameple" fill="#0093ee" />

</BarChart>
   </ResponsiveContainer>  


    )

};}
    
export default Bars2;