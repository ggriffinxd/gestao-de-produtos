import styles from "./style.module.css";
import NavigationButton from "../NavigationButton/NavigationButton";
import { useLocation } from "react-router-dom";

export default function FormItem({ item }) {
  const location = useLocation();
  const currentPath = location.pathname;
  let routeName = false;
  if (currentPath === "/product/edit") {
    routeName = true;
  }

  return (
    <>
      <div style={{ display: "flex" }}>
        <NavigationButton place={"Items"} url={"/product"} />
        <NavigationButton place={"Criar"} url={"create"} />
      </div>
      <br />
      {routeName ? (
        <p style={{ marginLeft: "-10px" }}>Editar Item: {item}</p>
      ) : null}

      <div className={styles.container}>
        <form action="">
          <div className={styles.formItem}>
            <div>
              <label htmlFor="Nome">Nome:</label>
              <br />
              <input type="text" id="Nome" />
            </div>
            <div>
              <label htmlFor="Quantidade">Quantidade:</label>
              <br />
              <input type="number" id="Quantidade" />
            </div>
            <div>
              <label htmlFor="Preco">Preço:</label>
              <br />
              <input type="number" id="Preco" />
            </div>
            <div>
              <label htmlFor="Categoria">Categoria:</label>
              <br />
              <select name="Categoria" id="Categoria">
                <option value="eletronicos">Eletrônicos</option>
                <option value="vestuario">Vestuário</option>
                <option value="livros">Livros</option>
                <option value="casa">Casa & Cozinha</option>
                <option value="brinquedos">Brinquedos & Jogos</option>
              </select>
            </div>
          </div>
          <section>
            <label htmlFor="Lorem">Descrição</label>
            <br />
            <textarea name="Lorem" id="Lorem" cols="113" rows="15"></textarea>
          </section>
          <br />
          <NavigationButton place={"Criar"} url={"/product"} />
        </form>
      </div>
    </>
  );
}
