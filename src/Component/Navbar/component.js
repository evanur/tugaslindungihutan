import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import ListAltIcon from '@material-ui/icons/ListAlt';
import LocationOnIcon from '@material-ui/icons/LocationOn';

class Navbar extends React.Component{
    render(){
        const {classes}=this.props;
        return(
            // <div>
            <BottomNavigation 
            className={classes.BottomNavigation}
            >
      <BottomNavigationAction label="Recents" icon={<HomeIcon />} />
      <BottomNavigationAction label="Favorites" icon={<ListAltIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
            </BottomNavigation>
            // </div>
        );
    }
}
export default Navbar;