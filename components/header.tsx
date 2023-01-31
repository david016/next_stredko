import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
        <h1>StreDko</h1>
        <ul>
          <li>
            <Link href="./#home">Domov</Link>
          </li>
          <li>
            <Link href="./#about">Kto sme?</Link>
          </li>
          <li>
            <Link href="./#events">Udalosti</Link>
          </li>
          <li>
            <Link href="./#contacts">Kontakt</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
