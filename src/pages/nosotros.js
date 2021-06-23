import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Nosotros = () => (
  <Layout>
    <Seo title="Nosotros" />

    <div className="container mt-3 mb-4 text-center col-md-10 col-lg-9 col-xl-7 text-justify pt-4">
      <h1>
        «Sé un punto de referencia de calidad. Algunas personas no están
        acostumbradas a un ambiente donde la excelencia es aceptada.»
      </h1>
    </div>
    <div class="container-fluid">
      <div class="row align-items-center justify-content-center">
        <div class="col d-none d-md-block">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 368.39 53.13">
            <g class="arrow-gris">
              <g>
                <path
                  fill="gray"
                  class="arrow"
                  d="M367.49,24,343.92.86a3,3,0,0,0-4.19,4.27l18.79,18.44H0v6H357.83L339.69,48A3,3,0,1,0,344,52.23l23.57-24a3,3,0,0,0,0-4.23Z"
                ></path>
              </g>
            </g>
          </svg>
        </div>
        <div class="col-md-10 col-lg-9 col-xl-7 text-justify pt-4">
          <div class="icontenteditable px-lg-5">
            <p>
              En SERVIWEB PARAGUAY somos una empresa con una trayectoria de más
              de 3 años que cuenta con más de 100 clientes, dedicada al
              desarrollo de sitios web personalizados -totalmente
              administrable-, desarrollo de aplicaciones web y móviles
              (Smartphone, Tablets), tiendas virtuales y venta de servicios de
              Hosting y Dominio.
            </p>

            <p>
              Además, integramos sistemas abiertos de CMS como WordPress,
              Joomla, Drupal y sistemas de venta y catálogos en línea Magento,
              Prestashop, contando siempre con un equipo de trabajo con un alto
              grado de profesionalidad, íntegro y responsable.
            </p>

            <p>&nbsp;</p>
          </div>
        </div>
        <div class="col d-none d-md-block">
          <div className="flecha">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 368.39 53.13">
              <g class="arrow-gris" data-name="Capa 2">
                <g>
                  <path
                    class="arrow"
                    d="M367.49,24,343.92.86a3,3,0,0,0-4.19,4.27l18.79,18.44H0v6H357.83L339.69,48A3,3,0,1,0,344,52.23l23.57-24a3,3,0,0,0,0-4.23Z"
                    fill="gray"
                  ></path>
                </g>
              </g>
            </svg>{" "}
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Nosotros
