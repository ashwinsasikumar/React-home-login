import styles from "../styles/Login.module.css";
import login from "../store/store";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const { username, password, setUsername, setPassword } = login();
  const navigate = useNavigate();
  const handleLogin = () => {
    if (username && password) {
      navigate("/welcome");
    } else {
      alert("please input the username and password");
    }
  };
  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />
        <button onClick={handleLogin} className={styles.button}>
          Login
        </button>
      </div>
    </div>
  );
}
