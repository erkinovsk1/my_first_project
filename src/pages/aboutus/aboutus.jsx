import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';

const About = () => {
  const cars = [
    { id: 1, name: 'Tesla Model S', description: 'Электрический седан с потрясающей динамикой и высоким уровнем комфорта. Разгон 0-100 км/ч за 2.5 секунды.' },
    { id: 2, name: 'BMW 5 Series', description: 'Люксовый седан с отличной управляемостью и современным дизайном, идеально подходящий для длительных поездок.' },
    { id: 3, name: 'Mercedes-Benz C-Class', description: 'Элегантный седан с высокой мощностью и уникальным комфортом для водителя и пассажиров.' },
    { id: 4, name: 'Audi A4', description: 'Комфортабельный и стильный седан с отличными техническими характеристиками и современными технологиями.' },
    { id: 5, name: 'Porsche 911', description: 'Легендарный спорткар, известный своей выдающейся динамикой и легендарным дизайном.' },
    { id: 6, name: 'Ford Mustang', description: 'Классический американский мускулкар с мощным двигателем и агрессивным дизайном.' },
    { id: 7, name: 'La Ferrari', description: 'Гиперкар с 950 л.с., сочетающий в себе инновационные технологии и выдающуюся скорость.' },
    { id: 8, name: 'BMW M5 CS', description: 'Спортивный седан с экстремальной мощностью и лучшей в своем классе управляемостью.' },
    { id: 9, name: 'Porsche Carrera GT', description: 'Гоночный автомобиль с двигателем V10 и максимальной скоростью более 300 км/ч.' },
    { id: 10, name: 'BMW M4 CSL', description: 'Спортивный автомобиль с улучшенной аэродинамикой и мощностью, подходящий для настоящих поклонников скорости.' },
    { id: 11, name: 'Mercedes CLS 63', description: 'Гоночный седан с высокими показателями мощности и прекрасными ездовыми характеристиками.' },
    { id: 12, name: 'Camry 80', description: 'Практичный и комфортабельный автомобиль для ежедневных поездок с хорошей динамикой и надежностью.' },
  ];

  return (
    <Box sx={{ padding: 4, backgroundColor: "#9cabad", fontFamily: '"Playfair Display", serif' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', marginBottom: '30px', fontWeight: '700' }}>
          О компании Khan AutoRent
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ fontStyle: 'italic', marginBottom: '20px' }}>
          Khan AutoRent — это компания, специализирующаяся на аренде роскошных и гоночных автомобилей. Мы предоставляем нашим клиентам уникальную возможность арендовать автомобили мирового класса для различных целей.
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ fontWeight: '600' }}>
          Наш автопарк включает 12 уникальных автомобилей:
        </Typography>

        <Grid container spacing={4}>
          {cars.map((car) => (
            <Grid item xs={12} sm={6} md={4} key={car.id}>
              <Paper sx={{ padding: 3, backgroundColor: '#ffffff', boxShadow: 3, borderRadius: '10px' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1, fontSize: '1.2rem' }}>
                  {car.name}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1rem' }}>
                  {car.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h6" sx={{ marginTop: 4, fontStyle: 'italic' }}>
          Мы гордимся тем, что предоставляем нашим клиентам самые современные и мощные автомобили. Наши машины идеально подходят для тех, кто хочет испытать непередаваемые эмоции от вождения.
        </Typography>
      </Container>
    </Box>
  );
};

export default About;