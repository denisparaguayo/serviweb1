
import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {css} from '@emotion/react'
import {Helmet} from "react-helmet";


import Header from "./header"
import "./layout.css"


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
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous" />
      </Helmet>
      
      <div
        
      >
        <main>{children}</main>
        <footer
          css={css`
            text-align: center;
          `}
        >
          <div css={css`
            margin-top: 2rem;
            margin-bottom: 2rem;
            @media (max-width: 560px){
            font-size: 1rem;
            margin-top: 1rem;
       
          }
          `}>
          © 2019 - {new Date().getFullYear()}, Creado con <span css={css`color: var(--terciario);`}>&hearts;</span> por 
          {` `}
          <a css={css`color: var(--terciario);`}href="https://www.webpy.xyz">WebPy</a>
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
