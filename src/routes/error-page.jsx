import { useRouteError } from "react-router-dom";
import "../styles/pages/_error-page.scss";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="not-found">
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <a href="/" alt="Accueil">
        Retourner sur la page d'accueil
      </a>
    </div>
  );
}