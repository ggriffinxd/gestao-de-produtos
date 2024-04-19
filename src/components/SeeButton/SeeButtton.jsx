import { Link } from "react-router-dom";
import styles from "./style.module.css";

export default function SeeButton() {
  return (
    <Link className={styles.Link} to={"product"}>
      Ver
    </Link>
  );
}
