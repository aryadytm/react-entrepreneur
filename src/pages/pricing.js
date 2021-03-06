import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, CardActionArea, CardActions, Container} from '@mui/material';


export default function Pricing() {
  return (
    <Container sx={{height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Card sx={{maxWidth: 345}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={process.env.PUBLIC_URL + "/images/pricing.png"}
            alt="coming soon"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Free For Now!
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Currently, you can use the app for free.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}