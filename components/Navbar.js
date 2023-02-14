import Image from "next/image";
import Link from "next/link";
import pageHistoria from "@/pages/pageHistoria";

function Navbar() {
  return (
    <>
      <nav className="navegation navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand navitem" href="/">
            <Image src="/img/logo.png" width={75} height={75} alt="Logotype" />{" "}
            DrakeNier2BPosting
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link className="navitem nav-link" aria-current="page" href="/">
                <i className="fa-solid fa-house"></i> Inicio
              </Link>
              <Link className="navitem nav-link" href="/pageHistoria">
                <i className="fa-solid fa-book-open"></i> Historias
              </Link>
              <Link className="navitem nav-link" href="#">
                <i className="fa-solid fa-user"></i> Personajes
              </Link>
              <Link className="navitem nav-link" href="#">
                <i className="fa-solid fa-star"></i> Extras
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
