import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("login");
    navigate("/posts");
  };

  return (
    <div>
      <form className ='form'onSubmit={handleLogin}>
        <input className="login" type="text" placeholder="Логин" />
        <input className="password" type="password" placeholder="Пароль" />
        <button className ='submit'type="submit">Войти</button>
      </form>
    </div>
  );
};
export default LoginPage;