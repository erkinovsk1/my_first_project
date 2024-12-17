import React, { useState } from "react";

// Основной компонент
const Purchase = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(selectedOption === option ? null : option);
  };

  return (
    <div style={containerStyle}>
      <button onClick={() => handleOptionClick("rent")} style={mainButtonStyle}>
        Арендовать
      </button>

      {selectedOption && (
        <div style={accordionContainerStyle}>
          <div style={accordionItemStyle}>
            <h3 onClick={() => handleOptionClick("hourly")} style={accordionHeaderStyle}>Почасовая аренда</h3>
            {selectedOption === "hourly" && (
              <div style={accordionContentStyle}>
                <p>Выберите количество часов аренды.</p>
                <input type="number" placeholder="Часы" style={inputStyle} />
              </div>
            )}
          </div>
          <div style={accordionItemStyle}>
            <h3 onClick={() => handleOptionClick("daily")} style={accordionHeaderStyle}>Дневная аренда</h3>
            {selectedOption === "daily" && (
              <div style={accordionContentStyle}>
                <p>Выберите дату аренды.</p>
                <input type="date" style={inputStyle} />
              </div>
            )}
          </div>
          <div style={accordionItemStyle}>
            <h3 onClick={() => handleOptionClick("weekly")} style={accordionHeaderStyle}>Еженедельная аренда</h3>
            {selectedOption === "weekly" && (
              <div style={accordionContentStyle}>
                <p>Выберите неделю аренды.</p>
                <input type="week" style={inputStyle} />
              </div>
            )}
          </div>
          <div style={accordionItemStyle}>
            <h3 onClick={() => handleOptionClick("monthly")} style={accordionHeaderStyle}>Месячная аренда</h3>
            {selectedOption === "monthly" && (
              <div style={accordionContentStyle}>
                <p>Выберите месяц аренды.</p>
                <input type="month" style={inputStyle} />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "50px 20px",
  backgroundColor: "#9cabad",
  minHeight: "100vh",
};

const mainButtonStyle = {
  padding: "15px 40px",
  backgroundColor: "#000000",
  color: "white",
  border: "none",
  borderRadius: "50px",
  fontSize: "18px",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "all 0.3s ease",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
};

const accordionContainerStyle = {
  marginTop: "30px",
  width: "100%",
  maxWidth: "500px",
};

const accordionItemStyle = {
  marginBottom: "15px",
  backgroundColor: "#FFFFFF",
  borderRadius: "8px",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
};

const accordionHeaderStyle = {
  padding: "20px",
  fontSize: "18px",
  fontWeight: "600",
  backgroundColor: "#007bff",
  color: "white",
  cursor: "pointer",
  textTransform: "uppercase",
  letterSpacing: "1px",
  transition: "background-color 0.3s ease",
};

const accordionContentStyle = {
  padding: "15px",
  backgroundColor: "#f9f9f9",
  borderTop: "1px solid #ddd",
  fontSize: "16px",
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "10px",
  borderRadius: "5px",
  border: "1px solid #ddd",
  fontSize: "16px",
  backgroundColor: "#f1f1f1",
  boxSizing: "border-box",
  transition: "border-color 0.3s ease",
};

inputStyle.focus = {
  borderColor: "#007bff",
  outline: "none",
};

export default Purchase;