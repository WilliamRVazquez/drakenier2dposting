import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

function pageHistoria() {
  return (
    <>
      <Head>
        <title>DrkNr2B | Historias de NieR</title>
      </Head>
      <Layout>
          <Image
            src="/img/banner3.png"
            className="img-fluid w-100"
            width={1980}
            height={145}
            alt="NieR Replicant"
          />
          <div className="container ">
            <div className="card-group">
              <div className="row">
                <h1 className="text-center">GRIMOIRE NieR</h1>
                <div className="row text-center w-100 mx-auto">
                  <div className="col-lg my-3">
                    <div className="card w-100 h-100 shadow">
                      <Image
                        src="/img/grimories.png"
                        width={1920}
                        height={220}
                        className="card-img-top img-fluid"
                        alt="Y no quedó ninguno"
                      />
                      <div className="card-body">
                        <h5 className="card-title px-1">Long Story Short</h5>
                        <span>Volumen 2</span>
                        <p className="card-text px-1">
                          La historia de NieR Automata mas detallada.
                        </p>
                      </div>
                      <div className="card-footer">
                        <Link
                          href="https://www.animemaniaco.com/2021/06/nier-automata-short-story-long-novela-ligera-en-espanol.html#google_vignette"
                          className="btn btn-success"
                          target="blank"
                        >
                          Leer
                        </Link>
                      </div>
                    </div>
                  </div>{" "}
                  {/* div col 1 */}
                  <div className="col-lg my-3">
                    <div className="card h-100 shadow">
                      <Image
                        src="/img/emil_halua.jpg"
                        width={1920}
                        height={220}
                        className="card-img-top img-fluid"
                        alt="Y no quedó ninguno"
                      />
                      <div className="card-body">
                        <h5 className="card-title px-1">La flor de piedra</h5>
                        <p className="card-text px-1">
                          Historia sobre cómo Emil y Halua fueron convertidos en
                          armas.
                        </p>
                      </div>
                      <div className="card-footer">
                        <Link
                          href="http://elhonordelsamurai.blogspot.com/2020/09/flor-de-piedra-emil-halua-traduccion.html"
                          className="btn btn-success"
                          target="black"
                        >
                          Leer
                        </Link>
                      </div>
                    </div>
                  </div>{" "}
                  {/* div col 2 */}
                  <div className="col-lg my-3">
                    <div className="card h-100 shadow">
                      <Image
                        src="/img/nier_yonah.png"
                        width={1920}
                        height={220}
                        className="card-img-top img-fluid"
                        alt="Y no quedó ninguno"
                      />
                      <div className="card-body">
                        <h5 className="card-title px-1">Rojo y negro</h5>
                        <p className="card-text px-1">
                          Historia sobre Nier y Yonah un año antes de los hechos
                          de NieR RepliCant que explica como Yonah contrajo la
                          necrosis rúnica.
                        </p>
                      </div>
                      <div className="card-footer">
                        <Link href="#" className="btn btn-success">
                          Leer
                        </Link>
                      </div>
                    </div>
                  </div>{" "}
                  {/* div col 3 */}
                  <div className="col-lg my-3">
                    <div className="card h-100 shadow">
                      <Image
                        src="/img/fyra.png"
                        width={1920}
                        height={220}
                        className="card-img-top img-fluid"
                        alt="Y no quedó ninguno"
                      />
                      <div className="card-body">
                        <h5 className="card-title px-1">La princesita</h5>
                        <p className="card-text px-1">
                          Historia sobre la vida de Fyra y del rey de Fachada.
                        </p>
                      </div>
                      <div className="card-footer">
                        <Link
                          href="https://www.fantasycloud.net/relato-de-nier-replicant-una-princesita/"
                          className="btn btn-success"
                          target="black"
                        >
                          Leer
                        </Link>
                      </div>
                    </div>
                  </div>{" "}
                  {/* div col 4 */}
                </div>{" "}
                {/* div row 1.1 */}
                <div className="row text-center w-100 mx-auto">
                  <div className="col-lg my-3">
                    <div className="card h-100 shadow">
                      <Image
                        src="/img/kaine_tyraan.jpg"
                        width={1920}
                        height={220}
                        className="card-img-top img-fluid"
                        alt="Y no quedó ninguno"
                      />
                      <div className="card-body">
                        <h5 className="card-title px-1">
                          El banquete de brujas
                        </h5>
                        <p className="card-text px-1">
                          Historia sobre un momento del turbio pasado de Kainé,
                          ya poseída por la sombra Tyrann.
                        </p>
                      </div>
                      <div className="card-footer">
                        <Link
                          href="https://www.fantasycloud.net/relato-de-nier-replicant-el-sabbath-de-las-brujas/"
                          className="btn btn-success"
                          target="black"
                        >
                          Leer
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg my-3">
                    <div className="card h-100 shadow">
                      <Image
                        src="/img/kaine_emil.png"
                        width={1920}
                        height={220}
                        className="card-img-top img-fluid"
                        alt="Y no quedó ninguno"
                      />
                      <div className="card-body">
                        <h5 className="card-title px-1">La puerta estrecha</h5>
                        <p className="card-text px-1">
                          Historia sobre la discriminación sufrida por Kainé y
                          Emil y a un terrible secreto…
                        </p>
                      </div>
                      <div className="card-footer">
                        <Link
                          href="http://www.fantasycloud.net/relato-de-nier-replicant-estrecha-es-la-puerta/"
                          className="btn btn-success"
                        >
                          Leer
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg my-3">
                    <div className="card h-100 shadow">
                      <Image
                        src="/img/grimories.jpg"
                        width={1920}
                        height={220}
                        className="card-img-top img-fluid"
                        alt="Y no quedó ninguno"
                      />
                      <div className="card-body">
                        <h5 className="card-title px-1">La montaña magica</h5>
                        <p className="card-text px-1">[Sin definir].</p>
                      </div>
                      <div className="card-footer">
                        <Link href="#" className="btn btn-success">
                          Leer
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg my-3">
                    <div className="card h-100 shadow">
                      <Image
                        src="/img/grimories.jpg"
                        width={1920}
                        height={220}
                        className="card-img-top img-fluid"
                        alt="Y no quedó ninguno"
                      />
                      <div className="card-body">
                        <h5 className="card-title px-1">
                          La vuelta al mundo en 80 días
                        </h5>
                        <p className="card-text px-1">[Sin Definir]</p>
                      </div>
                      <div className="card-footer">
                        <Link href="#" className="btn btn-success">
                          Leer
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* div row 1.2 */}
                <div className="row text-center w-100 mx-auto">
                  <div className="col-lg-3 my-3">
                    <div className="card h-100 shadow">
                      <Image
                        src="/img/grimories.jpg"
                        width={1920}
                        height={220}
                        className="card-img-top img-fluid"
                        alt="Y no quedó ninguno"
                      />
                      <div className="card-body">
                        <h5 className="card-title px-1">La sirenita</h5>
                        <p className="card-text px-1">[Sin Definir]</p>
                      </div>
                      <div className="card-footer">
                        <Link href="#" className="btn btn-success">
                          Leer
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 my-3">
                    <div className="card h-100 shadow">
                      <Image
                        src="/img/grimories.jpg"
                        width={1920}
                        height={220}
                        className="card-img-top"
                        alt="Y no quedó ninguno"
                      />
                      <div className="card-body">
                        <h5 className="card-title px-1">
                          Final E - El mundo perdido
                        </h5>
                        <p className="card-text px-1">[Sin definir]</p>
                      </div>
                      <div className="card-footer">
                        <Link href="#" className="btn btn-success">
                          Leer
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* div row 1.3 */}
              </div>
            </div>
          </div>

          <hr />

          <div className="row">
            <Image
              src="/img/banner2.png"
              className="img-fluid w-100"
              width={1980}
              height={420}
              alt="NieR Automata"
            />
            <div className="card-group">
              <div className="row text-center w-100 mx-auto">
                <h2>Novelas Ligeras</h2>
                <div className="col-lg-3">
                  <div className="card h-100 shadow">
                    <Image
                      src="/img/nierautomata_v1.jpg"
                      width={1920}
                      height={450}
                      className="card-img-top img-fluid"
                      alt="Y no quedó ninguno"
                    />
                    <div className="card-body">
                      <h5 className="card-title px-1">Long Story Short</h5>
                      <span>Volumen 1</span>
                      <p className="card-text px-1">
                        La historia de NieR Automata mas detallada.
                      </p>
                    </div>
                    <div className="card-footer">
                      <Link href="#" className="btn btn-success">
                        Leer
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card h-100 shadow">
                    <Image
                      src="/img/nierautomata_v2.jpg"
                      width={1920}
                      height={420}
                      className="card-img-top img-fluid"
                      alt="Y no quedó ninguno"
                    />
                    <div className="card-body">
                      <h5 className="card-title px-1">Long Story Short</h5>
                      <span>Volumen 2</span>
                      <p className="card-text px-1">
                        La historia de NieR Automata mas detallada.
                      </p>
                    </div>
                    <div className="card-footer">
                      <Link
                        href="https://www.animemaniaco.com/2021/06/nier-automata-short-story-long-novela-ligera-en-espanol.html#google_vignette"
                        className="btn btn-success"
                        target="blank"
                      >
                        Leer
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Layout>
    </>
  );
}

export default pageHistoria;
