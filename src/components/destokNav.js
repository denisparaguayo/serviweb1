import React, { useEffect, useRef, useState } from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { breakpoints } from "../utils/breakpoint"
import { css } from "@emotion/react"

const DesktopNavmenu = () => {
  const [background, setBackground] = useState(false)
  const navRef = useRef()

  navRef.current = background
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 20
      if (navRef.current !== show) {
        setBackground(show)
      }
    }
    document.addEventListener("scroll", handleScroll)

    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <StyledHeader background={background}>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            line-height: 1;
            margin-left: 4rem;
          `}
        >
          <Link
            css={css`
              @import url("https://fonts.googleapis.com/css2?family=Signika:wght@400;700&display=swap");
              text-decoration: none;
              color: var(--secundario);
              font-size: 4rem;
              transition: color 300ms;
              font-family: "Signika", sans-serif;
              font-weight: bold;
              text-transform: uppercase;
              text-align: center;
              text-shadow: 2px 2px var(--primario);
              div {
              }

              :hover {
                color: var(--secundario);
                text-shadow: 2px 2px var(--primario);
              }
            `}
            to="/"
          >
            ServiWeb
          </Link>
          <p
            css={css`
              text-align: center;
              color: rgb(222, 222, 228, 0.8);
            `}
          >
            Desrrollo de Sitios Web
          </p>
        </div>

        <ul>
          <li>
            <Link to="/" activeClassName="pagina-actual">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/page-2" activeClassName="pagina-actual">
              Pagina 2
            </Link>
          </li>
          <li>
            <Link to="/nosotros" activeClassName="pagina-actual">
              Nosotros
            </Link>
          </li>
        </ul>
      </StyledHeader>
    </>
  )
}

export default DesktopNavmenu

const StyledHeader = styled.header`
  display: none;
  @media ${breakpoints.lg} {
    display: flex;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 10;
    padding: 0.5rem;
    transition: background 400ms;
    background: ${({ background }) =>
      background ? "rgb(222,222,228, .8)" : "rgb(50,49,49, .8)"};

    ul {
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: flex-end;
      padding: 0 3rem 0 0;

      margin: 0;
      li {
        list-style: none;
        margin-right: 3rem;
      }
      a {
        text-decoration: none;
        color: white;
        transition: color 300ms;

        :hover {
          color: var(--secundario);
        }
        &.pagina-actual {
          border-bottom: 2px solid var(--terciario);
        }
      }
    }
  }
`
