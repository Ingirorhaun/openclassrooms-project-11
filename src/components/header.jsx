import { Logo } from "./logo";
import "./../styles/components/_header.scss";

export default function Header() {
  const pathname = window.location.pathname;

  return (
    <header>
      <Logo />
      <nav>
        <a href="/" className={pathname === "/" ? "active" : ""}>Accueil</a>
        <a href="/about" className={pathname === "/about" ? "active" : ""}>
          A propos
        </a>
      </nav>
    </header>
  );
}
