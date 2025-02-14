import styles from "../styles/About.module.css";
export default function About() {
  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <div className={styles.aboutbox}>
          <h1>
            At Smart Solutions, we specialize in industry and home automation to
            make life smarter and businesses more efficient. Our IoT-driven
            systems enhance security, optimize energy use, and simplify daily
            tasks.
          </h1>
          <p>Cutting-edge technology</p>
          <p>Affordable & scalable solutions</p>
          <p>24/7 customer support</p>
          <p>Tailored automation for homes & industries</p>
        </div>
      </div>
    </div>
  );
}
