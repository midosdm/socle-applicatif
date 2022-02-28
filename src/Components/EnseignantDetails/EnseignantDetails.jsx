import React,{useState, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Axios from 'axios';
import EnseignantOptions from './EnseignantOptions';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function EnseignantDetails() {
  const [expanded, setExpanded] = React.useState(false);
  const {id}= useParams();
  const [enseignant, setEnseignant] = useState([]); 

  useEffect(() => {
    Axios.get("https://app-9f355f19-90a4-4e35-ade0-3982076a7ad4.cleverapps.io/enseignants/" + id)
    .then(response => setEnseignant(response.data))
}, []);

console.log(enseignant);
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345, margin:'auto' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[700] }} aria-label="recipe">
            <PersonIcon />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <EnseignantOptions />
          </IconButton>
        }
        title={enseignant.nom + " " +enseignant.prenom}
        subheader={"née le: " + enseignant.dateNaissance}
      />
      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          adresse: {enseignant.adresse}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          email : {enseignant.email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          mobile : {enseignant.mobile}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>More info:</Typography>
          <Typography paragraph>
          </Typography>
          <Typography paragraph>
            Description de l'enseignant si necessaire
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
