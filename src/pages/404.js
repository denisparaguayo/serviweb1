import * as React from "react"
import { css } from "@emotion/react"
import { Link } from "gatsby"
import Emoji from "a11y-react-emoji"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1
      css={css`
        margin-top: 10rem;
        text-align: center;
      `}
    >
      404: Pagina no Encontrada
    </h1>
    <p
      css={css`
        margin-top: 4rem;
        text-align: center;
        font-weight: bold;
      `}
    >
      Acabas de llegar a una ruta que no existe ...{" "}
      <Emoji symbol="🥴" label="love" />.
    </p>

    <h2
      css={css`
        margin-top: 4rem;
        text-align: center;
        font-weight: bold;
        a {
          text-decoration: none;
          color: green;
        }
      `}
    >
      <Link to="/">Volver el Inicio &#128281;</Link>
    </h2>
  </Layout>
)

export default NotFoundPage
