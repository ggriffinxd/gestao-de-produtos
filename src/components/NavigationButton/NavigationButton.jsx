import { Link } from "react-router-dom";
import styles from "./style.module.css";
export default function NavigationButton({ place, url }) {
  return (
    <div>
      <Link to={url} className={styles.navigationButton}>
        {place}
      </Link>
    </div>
  );
}
