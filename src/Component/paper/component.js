import React from 'react'
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { deepOrange, green } from '@material-ui/core/colors';

class Papere extends React.Component{
    render(){
        const {classes}=this.props;
        return(
            <div style={{
                marginTop:'95px'}}>
            <Paper  className={classes.navigation}>
                <Grid container spacing={10}>
                    <Grid item>
                    <Avatar>
                        <AssignmentIcon />
                        </Avatar>      
            </Grid>
            <Grid item>nomor <br/>tanggal</Grid>
            <Grid item>status</Grid>

            </Grid>
            </Paper>
            </div>
            );
        }
    }
    export default Papere;