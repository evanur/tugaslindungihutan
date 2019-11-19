import React from 'react'
import Appbar from '../../Component/Appbar'
import Papere from '../../Component/paper'
import Navbar from '../../Component/Navbar'
import { Container } from '@material-ui/core';
// import AppBar from '../../Component/Appbar'

class Component extends React.Component{
render(){
        return(
            <div>
            <Appbar/>
            <Container>
            <Papere/>
            <Papere/>
            <Papere/>
            </Container>
            <Navbar/>
           
        </div>
        );
    }
}
export default Component;