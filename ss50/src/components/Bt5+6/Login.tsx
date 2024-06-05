import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // State lưu trữ thông tin user giả định
  const user = {
    email: 'admin@gmail.com',
    password: 'admin123',
    role: 'Admin'
  };

  const handleLogin = () => {
    if (email === user.email && password === user.password && role === user.role) {
      localStorage.setItem('auth', 'true');
      localStorage.setItem('role', role);
      navigate('/account');
    } else {
      setError('Thông tin đăng nhập không chính xác');
    }
  };

  return (
    <div>
      <h1>Đăng nhập</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Nhập email"
      /><br/>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Nhập mật khẩu"
      /><br/>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="">-- Chọn quyền --</option>
        <option value="Admin">Admin</option>
        <option value="User">User</option>
      </select><br/>
      <button onClick={handleLogin}>Đăng nhập</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;
