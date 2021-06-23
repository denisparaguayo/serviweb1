import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/react"
import { Helmet } from "react-helmet"

import Header from "./header"
import "bootstrap/dist/css/bootstrap.css"
import "./cssdenis.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Helmet>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
          integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
          crossOrigin="anonymous"
        />
      </Helmet>

      <div>
        <main>{children}</main>

        <footer class="bg-dark text-center text-white mt-3">
          <div class="container p-4 pb-0">
            <section class="mb-1">
              <a
                class="btn btn-outline-light btn-floating m-1 fb"
                href="#!"
                role="button"
              >
                <i class="fab fa-facebook-f"></i>
              </a>

              <a
                class="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i class="fab fa-twitter"></i>
              </a>

              {/* <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i class="fab fa-google"></i
              ></a> */}

              <a
                class="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i class="fab fa-instagram"></i>
              </a>

              <a
                class="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>

              <a
                class="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i class="fab fa-github"></i>
              </a>
            </section>
          </div>
          <div class="text-center pb-1">
            <p>
              © 2019 - {new Date().getFullYear()}. Creado con{" "}
              <span
                css={css`
                  color: red;
                `}
              >
                &hearts;
              </span>{" "}
              por
              {` `}
              <a
                css={css`
                  color: var(--blanco);
                `}
                href="https://www.webpy.xyz"
              >
                WebPy
              </a>
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
