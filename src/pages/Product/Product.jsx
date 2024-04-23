import NavigationButton from "../../components/NavigationButton/NavigationButton";
import styles from "./style.module.css";

export default function Product() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <NavigationButton place={"Items"} url={true} />
        <NavigationButton place={"Criar"} url={"create"} />
      </div>

      <div className={styles.contentTable}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NOME</th>
              <th>EM ESTOQUE</th>
              <th>CATEGORIA</th>
              <th>AÇÕES</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>asda</td>
              <td>asdasd</td>
              <td>asdasda</td>
              <td>asdasda</td>
              <td>asdasda</td>
            </tr>
            <tr>
              <td>asda</td>
              <td>asdasd</td>
              <td>asdasda</td>
              <td>asdasda</td>
              <td>asdasda</td>
            </tr>
            <tr>
              <td>asda</td>
              <td>asdasd</td>
              <td>asdasda</td>
              <td>asdasda</td>
              <td>asdasda</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
