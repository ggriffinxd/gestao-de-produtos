import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header&Footer/Header";

export default function RootLayout() {
  const location = useLocation();
  const currentPath = location.pathname;
  let routeName = "";
  if (currentPath === "/") {
    routeName = "Dashboard";
  } else {
    routeName = "Stock Items";
  }

  return (
    <>
      <Header place={routeName} />
      <div className="container">
        <Outlet />
      </div>
      <footer>
        <h2 style={{ fontWeight: "400", margin: "20px" }}>
          Feito com React e React Router DOM! By: @ggriffinxd
        </h2>
      </footer>
    </>
  );
}
