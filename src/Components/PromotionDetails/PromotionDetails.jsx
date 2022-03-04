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
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Axios from 'axios';
import PromotionOptions from './PromotionOptions';


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

export default function PromotionDetails() {
  const [expanded, setExpanded] = React.useState(false);
  const {codeFormation}= useParams();
  const {anneeUniversitaire}= useParams();
  const [promotion, setPromotion] = useState([]); 

  useEffect(() => {
    Axios.get("https://app-9f355f19-90a4-4e35-ade0-3982076a7ad4.cleverapps.io/promotions/" + codeFormation + "/" + anneeUniversitaire)
    .then(response => setPromotion(response.data))
}, []);
console.log(promotion);
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345, margin:'auto' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[700] }} aria-label="recipe">
            P
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <PromotionOptions />
          </IconButton>
        }
        title={promotion.siglePromotion}
      />
      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Processus de stage: {promotion.processusStage}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          nombre max d'etudiants : {promotion.nbMaxEtudian}
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
            Description de la promotion si necessaire
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
