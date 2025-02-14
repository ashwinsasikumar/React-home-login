import styles from "../styles/Contact.module.css";
export default function Contact() {
  return (
    <div className={styles.content}>
      <h1>Our office</h1>
      <p>
        Smart Solutions Pvt Ltd 123, Tech Park Road, Coimbatore, Tamil Nadu
        641001, India
      </p>
      <hi>Business hours</hi>
      <p>Monday – Friday: 9:00 AM – 6:00 PM</p>
      <p>Saturday: 10:00 AM – 4:00 PM </p>
      <p>Sunday: Closed</p>
    </div>
  );
}
