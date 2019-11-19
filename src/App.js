import React from 'react';
import {Switch,Route}from "react-router-dom";
import Home from './Container/Home'
class Component extends React.Component{
    render(){
        return(
            <Switch>
                <Route path="/" exact component ={Home}/>
            </Switch>
        );
}
}
export default Component;