import React from 'react';
import Layout from '../components/Layout';
import Loggin from '../components/Loggin';
import {HashRouter as Router ,Link, Route} from 'react-router-dom';

import {Provider} from "react-redux";
import configureStore from '../store/configureStore';
const store = configureStore();

const token = window.localStorage.getItem("hereoToken")
let log=""
if(token!==null){

  log =
  <Layout/>
  
}else{
  log = <Loggin/>

}


const Root = () => {
  return (
    <Provider store={store}>   
{log}
</Provider> 
  );
};
export default Root;

