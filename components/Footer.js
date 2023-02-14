import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="container-fluid">
        <div className="row py-2 w-100 mx-auto">
          <div className="px-3 my-3 col-lg text-center">
            <Image
              className="img-fluid"
              src="/img/Emil_face.png"
              width={125}
              height={720}
              alt="Emil"
            />
          </div>
          <div className="px-3 my-3 col-lg text-center">
            <h4>¿CUÁL ES EL OBJETIVO?</h4>
            <p>
              El objetivo de esta página es el dar información acerca de la saga
              de juegos NieR, para que los nuevos jugadores que se hallan
              interesado en la historia puedan saber aun mas de esta.
            </p>
          </div>
          <div className="px-3 my-3 col-lg text-center">
            <h4>UNETE A LA COMUNIDAD DE NieR</h4>
            <div className="">
              <Link
                href="https://www.facebook.com/groups/1002019186933755"
                className="redes mx-3"
                target="black"
              >
                <i className="fa-brands fa-facebook"></i>
              </Link>
              <Link
                href="https://discord.gg/j9jPGJvz"
                className="redes mx-3"
                target="blank"
              >
                <i class="fa-brands fa-discord"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="row text-center text-white copy">
          <p>Copyright &copy; 2023 William Ramses Vázquez Sánchez.</p>
        </div>
      </footer>
    </>
  );
}
