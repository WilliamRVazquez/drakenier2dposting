import Head from "next/head";
import Layout from "@/components/Layout";

import Image from "next/image";
import Link from "next/link";

function home() {
  return (
    <>
      <Head>
        <title>DrakeNieR2B Posting</title>
      </Head>
      <Layout>
        {/* Carrusel de imagenes */}
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="5000">
              <Image
                src="/img/banner.png"
                className="d-block w-100 img-fluid"
                width={1280}
                height={1080}
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block text-white">
                <h5>DrakeNieR2BPosting</h5>
                <p>
                  Un lugar donde compartir tu amor o fascinación por la saga de
                  NieR, Drakengard o SINoALICE, 100% en español por y para los
                  fans del Yokoverso.
                </p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="5000">
              <Image
                src="/img/banner2.png"
                className="d-block w-100 img-fluid"
                width={1920}
                height={1080}
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block text-white">
                <h5>NieR Automata</h5>
                <p>
                  Es un videojuego de rol de acción desarrollado por
                  PlatinumGames y publicado por Square Enix para PlayStation 4,
                  Microsoft Windows y Xbox One, así como para Nintendo Switch.
                </p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="5000">
              <Image
                src="/img/banner3.png"
                className="d-block w-100 img-fluid"
                width={1920}
                height={1080}
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block text-white">
                <h5>NieR Replicant</h5>
                <p>
                  Nier estilizado como NieR es un Videojuego de Rol en 3.ª
                  persona desarrollado por Cavia y producido por Square Enix.
                  Fue lanzado para PlayStation 3 y Xbox 360 en Australia,
                  Europa, Japón y América del Norte en abril de 2010.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Contenido de página principal */}
        <div className="py-3 container">
          <div className="row py-3">
            <div className="col-lg my-3">
              <div className="card h-100 shadow">
                <Image
                  className="card-img-top img-fluid"
                  src="/img/banner3.png"
                  width={1280}
                  height={200}
                  alt="NieRReplicant"
                />
                <div className="card-body">
                  <h5 className="card-title p-2">NieR Replicant</h5>
                  <p className="card-text p-2">
                    En un futuro muy, muy lejano la humanidad está al borde de
                    la extinción.{" "}
                  </p>
                  <p className="card-text p-2">
                    Una siniestra enfermedad y unas bestias retorcidas amenazan
                    el mundo.
                  </p>
                  <p className="card-text p-2">
                    Un chico bondadoso le hace una promesa a su hermana pequeña.
                    Una mentira milenaria que perdurará en la eternidad...
                  </p>
                </div>
                <div className="card-footer">
                  <div className="p-2">
                    <div className="ratio ratio-16x9">
                      <iframe
                        src="https://www.youtube.com/embed/sPcf4pfTqfY"
                        title="YouTube video player"
                      ></iframe>
                    </div>
                  </div>
                  <div className="row w-100 mx-auto text-center">
                    <div className="col">
                      <Link
                        href="https://www.xbox.com/es-MX/games/store/nier-replicant-ver122474487139/9NMBK4V30XJR"
                        className="btn btn-success"
                        target="black"
                      >
                        <i class="fa-brands fa-xbox"></i>
                      </Link>
                    </div>
                    <div className="col">
                      <Link
                        href="https://store.playstation.com/es-mx/product/UP0082-CUSA18774_00-0000000000000000"
                        className="btn btn-primary"
                        target="black"
                      >
                        <i class="fa-brands fa-playstation"></i>
                      </Link>
                    </div>
                    <div className="col">
                      <Link
                        href="https://store.steampowered.com/app/1113560/NieR_Replicant_ver122474487139/"
                        className="btn btn-secondary"
                        target="black"
                      >
                        <i class="fa-solid fa-desktop"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg my-3">
              <div className="card h-100 shadow">
                <Image
                  className="card-img-top img-fluid"
                  src="/img/banner2.png"
                  width={1280}
                  height={200}
                  alt="NieRAutomata"
                />
                <div className="card-body">
                  <h5 className="card-title p-2">NieR Automata</h5>
                  <p className="card-text p-2">El futuro lejano…</p>
                  <p className="card-text p-2">
                    Invasores de otro mundo atacan sin previo aviso, desatando
                    un nuevo tipo de amenaza: armas conocidas como -formas de
                    vida mecánicas.-
                  </p>
                  <p className="card-text p-2">
                    Ante esta amenaza insuperable, la humanidad es expulsada de
                    la Tierra y se refugia en la Luna.
                  </p>
                  <p className="card-text p-2">
                    Como 2B, miembro de la recién organizada fuerza militar
                    androide YoRHa. los jugadores se sumergirán en una feroz
                    batalla para recuperar el planeta.
                  </p>
                </div>
                <div className="card-footer">
                  <div className="p-2">
                    <div className="ratio ratio-16x9">
                      <iframe
                        src="https://www.youtube.com/embed/Rx3v171IWyQ"
                        title="YouTube video player"
                      ></iframe>
                    </div>
                  </div>
                  <div className="row w-100 mx-auto text-center">
                    <div className="col">
                      <Link
                        className="btn btn-success"
                        href="https://www.xbox.com/es-MX/games/store/nierautomata-become-as-gods-edition/bppzvt8bz15n"
                        target="black"
                      >
                        <i class="fa-brands fa-xbox"></i>
                      </Link>
                    </div>
                    <div className="col">
                      <Link
                        className="btn btn-primary"
                        href="https://store.playstation.com/es-mx/product/UP0082-CUSA04551_00-GOTYORHADIGITAL0"
                        target="black"
                      >
                        <i class="fa-brands fa-playstation"></i>
                      </Link>
                    </div>
                    <div className="col">
                      <Link
                        className="btn btn-secondary"
                        href="https://store.steampowered.com/app/524220/NieRAutomata/"
                        target="black"
                      >
                        <i class="fa-solid fa-desktop"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col"></div> */}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default home;
