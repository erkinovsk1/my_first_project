import React from 'react';

const ServicePage = () => {
  const containerStyle = {
    backgroundColor: '#9cabad',
    color: '#000000',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    minHeight: '100vh',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '30px',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    marginBottom: '10px',
    textTransform: 'uppercase',
  };

  const subtitleStyle = {
    fontSize: '1.2rem',
    lineHeight: '1.5',
  };

  const sectionStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '20px',
  };

  const cardStyle = {
    backgroundColor: '#ffffff',
    color: '#333333',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    width: '300px',
    textAlign: 'center',
    transition: 'transform 0.3s ease-in-out',
  };


  const cardTitleStyle = {
    fontSize: '1.5rem',
    marginBottom: '10px',
  };

  const cardTextStyle = {
    fontSize: '1rem',
    lineHeight: '1.4',
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>Обслуживание автомобилей</h1>
        <p style={subtitleStyle}>Мы гарантируем идеальное состояние и надежность каждой машины из автопарка Khan AutoRent.</p>
      </header>

      <section style={sectionStyle}>
        <div
          style={cardStyle}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-10px)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
        >
          <h2 style={cardTitleStyle}>Техническое обслуживание</h2>
          <p style={cardTextStyle}>Регулярные проверки двигателя, ходовой части и электроники, чтобы автомобили всегда были в идеальном состоянии.</p>
        </div>

        <div
          style={cardStyle}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-10px)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
        >
          <h2 style={cardTitleStyle}>Чистка и уход</h2>
          <p style={cardTextStyle}>Полная внутренняя и внешняя мойка, полировка кузова и химчистка салона перед каждой арендой.</p>
        </div>

        <div
          style={cardStyle}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-10px)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
        >
          <h2 style={cardTitleStyle}>Безопасность</h2>
          <p style={cardTextStyle}>Все машины проходят тщательную диагностику на безопасность и соответствие стандартам качества.</p>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;