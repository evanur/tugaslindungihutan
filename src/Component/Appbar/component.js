import React from 'react'
import { AppBar } from '@material-ui/core';


class Appbar extends React.Component{
    render(){
        const {classes}=this.props;
        return(
        
            <AppBar className={classes.AppBar}>App Barr</AppBar>
           
        );
    }
}
export default Appbar;