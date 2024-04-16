import styles from "./style.module.css";

export default function PlaceItems({ lorem, quantity }) {
  return (
    <div className={styles.dashboard}>
      <p>{lorem}</p>
      <h2>{quantity}</h2>
    </div>
  );
}
