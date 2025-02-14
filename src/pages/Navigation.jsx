import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Navigation.module.css";
export default function Navigation() {
  const navigate = useNavigate();
  return (
    <div className={styles.box}>
      <div className={styles.top}>
        <Button Name={"Home"} Click={() => navigate("/React-home-login")} />
        <Button
          Name={"Contact"}
          Click={() => navigate("/React-home-login/contact")}
        />
        <Button
          Name={"About"}
          Click={() => navigate("/React-home-login/About")}
        />
      </div>
    </div>
  );
}
