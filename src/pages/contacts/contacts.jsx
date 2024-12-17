import React from 'react';
import { Box, Container, Typography, TextField, Button, Grid, Paper, Link } from '@mui/material';
import { Instagram } from '@mui/icons-material';

const Contact = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: "#9cabad" }}>
      <Container maxWidth="lg">
        <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', marginBottom: '30px', fontWeight: '700' }}>
          Контакты
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: 3, backgroundColor: '#ffffff', boxShadow: 3, borderRadius: '10px' }}>
              <Typography variant="h6" gutterBottom>
                Мы всегда рады помочь!
              </Typography>

              <Typography variant="body1" color="text.secondary" sx={{ marginBottom: 2 }}>
                Если у вас есть вопросы, предложения или вы хотите забронировать автомобиль, не стесняйтесь связаться с нами. Мы готовы ответить на все ваши запросы.
              </Typography>

              <Typography variant="h6" sx={{ marginBottom: 2 }}>
                Контактная информация:
              </Typography>

              <Typography variant="body1" color="text.secondary">
                📍 Адрес: Бишкек, Кыргызстан. Мкр. Асанбай
              </Typography>
              <Typography variant="body1" color="text.secondary">
                📞 Телефон: +996(702)33-78-88
              </Typography>
              <Typography variant="body1" color="text.secondary">
                📧 Email: <Link href="mailto:yondokg777@gmail.com">info@khanautorent.com</Link>
              </Typography>

              <Typography variant="body1" color="text.secondary" sx={{ marginTop: 2 }}>
                🕒 Часы работы: Пн-Пт: 10:00 - 22:00, Сб-Вс: по записи
              </Typography>

              <Typography variant="h6" sx={{ marginTop: 4, marginBottom: 2 }}>
                Мы в социальных сетях:
              </Typography>
              <Grid container spacing={2}>
                <Grid item>
                  
                </Grid>
                <Grid item>
                  <Link href="https://instagram.com/erk1novski" target="_blank">
                    <Instagram />
                  </Link>
                </Grid>
                <Grid item>
                 </Grid>
                <Grid item>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: 3, backgroundColor: '#ffffff', boxShadow: 3, borderRadius: '10px' }}>
              <Typography variant="h6" gutterBottom>
                Напишите нам
              </Typography>

              <form>
                <TextField
                  fullWidth
                  label="Ваше имя"
                  variant="outlined"
                  sx={{ marginBottom: 2 }}
                />
                <TextField
                  fullWidth
                  label="Ваш email"
                  variant="outlined"
                  type="email"
                  sx={{ marginBottom: 2 }}
                />
                <TextField
                  fullWidth
                  label="Сообщение"
                  variant="outlined"
                  multiline
                  rows={4}
                  sx={{ marginBottom: 2 }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ padding: '12px' }}
                >
                  Отправить сообщение
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;