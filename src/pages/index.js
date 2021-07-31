import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ImagenWeb from "../components/imagenInicio"

import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => (
  <Layout>
    <Seo title="Inicio" />

    <ImagenWeb />

    <section className="pb-5">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-8  py-5 pr-lg-5">
            <div className="description">
              <h6 className="font-weight-bold">¡Trabajemos juntos!</h6>
              <p>
                Cuéntanos tu idea y nuestro equipo de profesionales se encargará
                de crear tu sitio web con un diseño centrado en el usuario,
                optimizado para dispositivos móviles 100% personalizado y
                administrable.
              </p>
            </div>
            <div className="mt-4">
              <a
                href="https://api.whatsapp.com/send?phone=595986550235&text=Hola%20quiero%20una%20cotizacion%20perzonalizada!%20para%20mi%20Web"
                target="_blank"
                className="btn btn-primary text-white rounded-pill px-4"
              >
                Inicia tu Proyecto
              </a>
            </div>
          </div>

          <div className="col-lg-4 border-l text-center py-4 pl-lg-5">
            <StaticImage src="../images/5-garantia.jpg" alt="Logo" />
          </div>
        </div>
      </div>
    </section>

    <section className="bg-dark my-5 block371 p-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 d-none d-lg-block">
            <StaticImage src="../images/imagen-pw.png" alt="icon" />
          </div>
          <div className="col-lg-6 p-100 bop">
            <p className="text1 mb-0">3 AÑOS DE EXPERIENCIAS</p>
            <p className="text2 mb-0">Somos expertos</p>
            <p className="text3 mb-0">en soluciones digitales</p>
            <p className="text4 mb-0">
              Encuentra con nosotros todas las soluciones digitales en un solo
              lugar,{" "}
              <strong>
                hosting, dominio, sitios web, APPS, estrategias digitales,
              </strong>{" "}
              lo que tu negocio necesite para sobresalir en linea.
            </p>
          </div>
        </div>
      </div>
    </section>

    <div className="row justify-content-center">
      <div className="col-lg-9 pt-5">
        <div className="text text-center mb-5">
          <h3 className="title">Conoce nuestros planes</h3>
          <div className="summary">
            <div className="icontenteditable">
              Hemos desarrollado diferentes planes según tus necesidades:
            </div>
          </div>
        </div>
      </div>
      <div className=" container up">
        <div className="row ml-1 mr-1">
          <div className="col-md-6 col-lg-3 pb-5 ">
            <article>
              <h4>
                <StaticImage
                  src="../images/emprendedores.png"
                  alt="Emprendedores"
                />
                <div className="icontenteditable">
                  <span>Emprendedores</span>
                </div>
              </h4>
              <div className="icontenteditable text-justify font-weight-normal">
                <p>
                  Perfecto si estás comenzando con tu proyecto y quieres darte a
                  conocer, un sitio web atractivo y básico, cuenta con correo y
                  te regalamos el dominio.
                </p>
              </div>
            </article>
          </div>
          <div className="col-md-6 col-lg-3 pb-5">
            <article>
              <StaticImage src="../images/negocios.png" alt="Negocios" />
              <h4>
                <div className="icontenteditable">
                  <span>Negocios</span>
                </div>
              </h4>
              <div className="icontenteditable text-justify font-weight-normal">
                <p>
                  Ideal para PYMES que necesitan{" "}
                  <strong>funciones avanzadas</strong>, diseño profesional,
                  incluye contenido personalizable y gráfica.
                </p>
              </div>
            </article>
          </div>
          <div className="col-md-6 col-lg-3 pb-5">
            <article>
              <StaticImage src="../images/corporativo.png" alt="Corporativo" />
              <h4>
                <div className="icontenteditable">
                  <span>Corporativo</span>
                </div>
              </h4>
              <div className="icontenteditable text-justify font-weight-normal">
                <p>
                  Especial para corporaciones y medianas empresas que requieren
                  funcionalidades avanzadas y estructuras únicas, y un diseño
                  robusto por la naturaleza de su negocio
                </p>
              </div>
            </article>
          </div>
          <div className="col-md-6 col-lg-3 pb-5">
            <article>
              <StaticImage
                src="../images/tiendas-virtuales.png"
                alt="Tiendas Virtuales"
              />
              <h4>
                <div className="icontenteditable">
                  <span>Tiendas Virtuales</span>
                </div>
              </h4>
              <div className="icontenteditable text-justify font-weight-normal">
                <p>
                  Fortalece el e-commerce de tu empresa, aumenta tus ventas,
                  implementa el carrito de compras y pagos online, con un diseño
                  personalizado y herramientas de posicionamiento
                </p>
              </div>
            </article>
          </div>
          <div className="col-12 pb-5 text-center">
            <Link
              to="contacto"
              className="btn btn-primary rounded-pill my-4 px-4 d-inline-flex align-items-center"
              role="button"
            >
              <span className="fas fa-grin d-inline-block mr-2"></span> Hablemos
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
