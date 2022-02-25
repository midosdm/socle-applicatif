import React from 'react';
import {makeStyles} from '@material-ui/styles';
import Dashboard from '../Dashboard/Dashboard';

const useStyles = makeStyles({
    page: {
      background: '#f9f9f9',
      width: "100%"
    },

    root:{
        display: 'flex'
      }
  })
const Layout = ({children}) => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Dashboard/>
            <div className={classes.page}>
                {children}
            </div>
            
        </div>
    )
}

export default Layout;