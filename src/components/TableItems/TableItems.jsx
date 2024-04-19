import SeeButton from "../SeeButton/SeeButtton";
import styles from "./style.module.css";

export default function TableItems({ col1, col2, col3 }) {
  return (
    <div className={styles.tableItem}>
      <table>
        <thead>
          <tr>
            <th>{col1}</th>
            <th>{col2}</th>
            <th>{col3}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{col1}</td>
            <td>{col2}</td>
            <td>
              <SeeButton />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
