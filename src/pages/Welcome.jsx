import styles from "../styles/Welcome.module.css";
import login from "../store/store.js";
export default function Welcome() {
  const { username } = login();
  return (
    <div className={styles.content}>
      <h1>Welcome {username}</h1>
    </div>
  );
}
