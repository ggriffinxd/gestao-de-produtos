import { Link } from "react-router-dom";
import styles from "./style.module.css";

export default function Header({ place }) {
  return (
    <div>
      <nav className={styles.Header}>
        <h3>React Stock</h3>
        <div>
          <Link id={styles.linkTo} to={"/"}>
            Inicio
          </Link>
          <Link id={styles.linkTo} to={"/product"}>
            Items
          </Link>
        </div>
      </nav>
      <h2 id={styles.homeTitle}>{place}</h2>
    </div>
  );
}
