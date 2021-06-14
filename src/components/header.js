import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import {css} from '@emotion/react'
import Navegacion from '../components/nav'
import DesktopNavmenu from '../components/destokNav'



const Header = () => (
  <header
            css={css`
               
                padding: .5rem;
                margin-top: 2rem;
                background: #dedee4;
            `}
        >
            <div
                css={css`
                    max-width: 1200px;
                    margin: 0 auto;
                    text-align: center;
                    
                    @media(min-width: 768px){
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                `}
            >
                <Link
                to="/"
                style={{
                  color: `white`,
                  textDecoration: `none`,                  
                }}
                >
                <StaticImage
                src="../images/serviwebSample.png"
                width={250}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="A Gatsby astronaut"
                style={{ marginBottom: `1.45rem` }}
                
                
                />
                </Link>
                
               
            </div>
            <DesktopNavmenu />
            <Navegacion />
        </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
