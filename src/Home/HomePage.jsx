import PlaceItems from "../components/PlaceItems/PlaceItems";
import TableItems from "../components/TableItems/TableItems";
import styles from "./style.module.css";

export default function Home() {
  return (
    <>
      <div>
        <div className={styles.loremItem}>
          <PlaceItems lorem={"Diversidade dos Itens"} quantity={"2"} />
          <PlaceItems lorem={"asd"} quantity={"2"} />
          <PlaceItems lorem={"Diversidade dos Itens"} quantity={"2"} />
          <PlaceItems lorem={"asd"} quantity={"2"} />
        </div>
        <div className={styles.loremItem}>
          <TableItems col1={"AAA"} col3={"AAA"} />
          <TableItems col1={"AAA"} col3={"AAA"} />
        </div>
      </div>
    </>
  );
}
