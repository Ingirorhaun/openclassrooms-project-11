import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/pages/_root.scss";

export default function Root() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
