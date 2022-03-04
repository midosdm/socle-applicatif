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
        text: 'Ajouter Candidat',
        icon: <SubjectOutlined color="secondary" />,
        path: '/createCandidat'
      },
      {
        text: 'enseignant',
        icon: <SubjectOutlined color="secondary" />,
        path: '/enseignants'
      },
      {
        text: 'Ajouter Enseignant',
        icon: <SubjectOutlined color="secondary" />,
        path: '/createEnseignant'
      },
      {
        text: 'Formation',
        icon: <SubjectOutlined color="secondary" />,
        path: '/formations'
      },
      {
        text: 'Ajouter Formation',
        icon: <SubjectOutlined color="secondary" />,
        path: '/createFormation'
      },
      {
        text: 'Promotion',
        icon: <SubjectOutlined color="secondary" />,
        path: '/promotions'
      },
      {
        text: 'Ajouter Promotion',
        icon: <SubjectOutlined color="secondary" />,
        path: '/createPromotion'
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