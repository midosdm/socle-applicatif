import React from 'react';
import {Link, useHistory, useLocation} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Drawer from "@material-ui/core/Drawer";
import {makeStyles} from '@material-ui/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {SubjectOutlined} from '@material-ui/icons'

const drawerWidth = 240

const useStyles = makeStyles({
  drawer: {
    width: drawerWidth
  },

  drawerPaper: {
    width: drawerWidth
  },

  active:{
    background:'#f4f4f4'
  }
})
const Dashboard = () => {

    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    const menuItems = [
      {
        text: 'candidat',
        icon: <SubjectOutlined color="secondary" />,
        path: '/candidats'
      },
      {
        text: 'enseignant',
        icon: <SubjectOutlined color="secondary" />,
        path: '/enseignants'
      },
      {
        text: 'formation',
        icon: <SubjectOutlined color="secondary" />,
        path: '/formations'
      },
      {
        text: 'promotion',
        icon: <SubjectOutlined color="secondary" />,
        path: '/promotions'
      }
    ]

    return (
      <div>
        {/*
        
        */}

        <Drawer
          className={classes.drawer}
          variant="permanent"
          anchor="left"
          classes={{ paper: classes.drawerPaper}}
          >
          <div>
            <Typography variant="h5">
                
            </Typography>
          </div>

          <List>
            {menuItems.map(item => (
              <div className={location.pathname == item.path ? classes.active : null}>
                <ListItem
              button
              key={item.text}
              onClick={()=> history.push(item.path)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text}>{item.text}</ListItemText>
              </ListItem>
              </div>
              
            ) )}
          </List>
        </Drawer>
      </div>
    )
}

export default Dashboard; 