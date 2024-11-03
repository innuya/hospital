import './doclogin.css';
import { Input, Button } from 'antd';
const DocLogin = () => {
  return (
    <div className="doc-login-form">
      <h1>Doctor Login</h1>
      <label>Email</label>
      <Input />
      <label>Password</label>
      <Input />
      <Button>Login</Button>
    </div>
  );
};

export default DocLogin;
