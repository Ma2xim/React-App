import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css"

const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin(); // Викликаємо функцію для авторизації
    navigate('/'); // Переходимо на головну сторінку
  };

  return (
    <div className="login">
      <h2>Авторизація</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Логін:</label>
          <input type="text" required />
        </div>
        <div>
          <label>Пароль:</label>
          <input type="password" required />
        </div>
        <button type="submit">Ввійти</button>
      </form>
    </div>
  );
};

export default Login;
