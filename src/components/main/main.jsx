import React from 'react';
import { Box, Container, Grid, Typography, Card, CardMedia, CardContent, Button } from '@mui/material';
import imgaudi from '../../images/AUDI A4.jpg'
import imgbmw from '../../images/BMW 5 series.jpg'
import imgtesla from '../../images/Tesla.jpg'
import imgford from '../../images/Ford Mustang.jpg'
import imgporsche from '../../images/Porsche 911.jpg'
import imgmercedes from '../../images/Mercedes C class.webp'
import imgm5cs from '../../images/BMW M5 CS.jpg'
import imgcamry from '../../images/Camry 80.webp'
import imgcarrera from '../../images/Carrera.jpg'
import imgcls from '../../images/CLS 218.jpg'
import imglaferrari from '../../images/La Ferrari.jpg'
import imgm4 from '../../images/M4 CSL.webp'

const cars = [
  { id: 1, name: 'Tesla Model S', image: imgtesla },
  { id: 2, name: 'BMW 5 Series', image: imgbmw },
  { id: 3, name: 'Mercedes-Benz C-Class', image: imgmercedes },
  { id: 4, name: 'Audi A4', image: imgaudi },
  { id: 5, name: 'Porsche 911', image: imgporsche },
  { id: 6, name: 'Ford Mustang', image: imgford },
  { id: 7, name: 'La Ferrari', image: imglaferrari },
  { id: 8, name: 'BMW M5 CS', image: imgm5cs },
  { id: 9, name: 'Porsche Carrera GT', image: imgcarrera },
  { id: 10, name: 'BMW M4 CSL', image: imgm4 },
  { id: 11, name: 'Mercedes CLS 63', image: imgcls },
  { id: 12, name: 'Camry 80', image: imgcamry },
];


const Main = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: "#9cabad" }}>
      <Container maxWidth="lg">
        <Typography variant="h3" gutterBottom>
        </Typography>

        <Grid container spacing={4}>
          {cars.map((car) => (
            <Grid item xs={12} sm={6} md={4} key={car.id}>
              <Card>
                <CardMedia
                  component="img"
                  alt={car.name}
                  height="200"
                  image={car.image}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {car.name}
                  </Typography>
                  <Button sx={{backgroundColor: 'black'}} variant="contained" fullWidth
                   onClick={() => window.location.href = '/purschase'}>
                    Арендовать
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>  
  );
};

export default Main;