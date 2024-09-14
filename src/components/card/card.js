import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import Checkbox from '@mui/material/Checkbox';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const card = (
  <React.Fragment>
   
    <CardContent>
    <Stack direction="row" spacing={2}></Stack>
    <Avatar src="/broken-image.jpg" /> 
    <Typography variant="h5" component="div">
    Eleanor Pena  <Checkbox {...label} defaultChecked />
      </Typography>
      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
      President of Sales | XYZ Organisation<br /> 
     <EditIcon></EditIcon><Button size="small">Edit Speaker</Button>
      </Typography>
     
    </CardContent>

    <Divider />
    
    <CardContent>
    <Stack direction="row" spacing={2}></Stack>
    <Avatar src="/broken-image.jpg" /> 
    <Typography variant="h5" component="div">
    Esther Howard  <Checkbox {...label} defaultChecked />
      </Typography>
      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
      Marketing Coordinator | XYZ Organisation<br /> 
     <EditIcon></EditIcon><Button size="small">Edit Speaker</Button>
      </Typography>
     
    </CardContent>

    <Divider />
    
    <CardContent>
    <Stack direction="row" spacing={2}></Stack>
    <Avatar src="/broken-image.jpg" /> 
    <Typography variant="h5" component="div">
    Albert Flores <Checkbox {...label} defaultChecked />
      </Typography>
      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
      Nursing Assistant | XYZ Organisation<br /> 
     <EditIcon></EditIcon><Button size="small">Edit Speaker</Button>
      </Typography>
     
    </CardContent>

    <Divider />
    
    <CardContent>
    <Stack direction="row" spacing={2}></Stack>
    <Avatar src="/broken-image.jpg" /> 
    <Typography variant="h5" component="div">
    John Doe  <Checkbox {...label} defaultChecked />
      </Typography>
      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
      Marketing Head | XYZ Organisation<br /> 
     <EditIcon></EditIcon><Button size="small">Edit Speaker</Button>
      </Typography>
     
    </CardContent>
     
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 250 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
