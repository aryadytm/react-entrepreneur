import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import {Button, CardActionArea, CardActions} from '@mui/material';

import {Link} from 'react-router-dom';


export default function Team({team}) {
  // props.team {name, nim, position}

  return (
    <Container sx={{mt: 8, pb: 8, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Card sx={{maxWidth: 345}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={process.env.PUBLIC_URL + "/images/binus-university.jpeg"}
            alt="coming soon"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              BINUS Entrepreneurship Team
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <br />
              {
                team.map(member => (
                  <>
                    <b>{member.name}</b>
                    <br />
                    {member.nim}
                    <br />
                    {member.position}
                    <br />
                    <br />
                  </>
                ))
              }
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}