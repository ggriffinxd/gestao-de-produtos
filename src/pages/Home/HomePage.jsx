import PlaceItems from "../../components/PlaceItems/PlaceItems";
import TableItems from "../../components/TableItems/TableItems";
import styles from "./style.module.css";

export default function Home() {
  return (
    <>
      <div>
        <div className={styles.loremItem}>
          <PlaceItems lorem={"Diversidade dos Itens"} quantity={"2"} />
          <PlaceItems lorem={"Inventário total"} quantity={"2"} />
          <PlaceItems lorem={"Itens Recentes"} quantity={"2"} />
          <PlaceItems lorem={"Itens acabando"} quantity={"2"} />
        </div>
        <div className={styles.loremItem}>
          <TableItems col1={"Itens recentes"} col3={"Ações"} />
          <TableItems col1={"Itens acabando"} col2={"Qtd."} col3={"Ações"} />
        </div>
      </div>
    </>
  );
}
