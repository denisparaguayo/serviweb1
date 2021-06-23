import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { breakpoints } from "../utils/breakpoint"
import { css } from "@emotion/react"

const MobileNavMenu = () => {
  const [menuOpen, toggleMenuOpen] = useState(false)

  return (
    <MenuBar>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          margin-top: 2rem;
          margin-left: 2rem;
          margin-bottom: 0;
          line-height: 1;
        `}
      >
        <Link
          css={css`
            @import url("https://fonts.googleapis.com/css2?family=Signika:wght@400;700&display=swap");
            text-decoration: none;
            color: var(--secundario);
            text-shadow: 2px 2px var(--primario);
            font-size: 1.8rem;
            transition: color 300ms;
            font-family: "Signika", sans-serif;
            font-weight: bold;
            text-transform: uppercase;
            text-align: center;
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
            color: var(--blanco);
            opacity: 0.8;
            font-size: 1rem;
          `}
        >
          Desarrollo de Sitios Web
        </p>
      </div>
      <MenuIconContainer>
        <MenuIcon menuOpen={menuOpen} onClick={() => toggleMenuOpen(!menuOpen)}>
          <div />
          <div />
          <div />
        </MenuIcon>
      </MenuIconContainer>
      <MenuLinks menuOpen={menuOpen}>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/page-2">Pagina 2</Link>
          </li>
        </ul>
      </MenuLinks>
    </MenuBar>
  )
}

export default MobileNavMenu

const MenuBar = styled.nav`
  @media ${breakpoints.lg} {
    display: none;
  }
  height: 5rem;
  position: relative;
  z-index: 10;
  width: 100%;
  background: rgb(50, 49, 49, 0.8);
  border-bottom: blue;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const MenuIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
`
const MenuIcon = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 2rem;
  outline: thin-dotted;
  z-index: 11;

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ menuOpen }) =>
      menuOpen ? "red" : "var(--blanco)"}; //!icono menu
    border-radius: 10px;
    transform-origin: 1px;
    transition: opacity 300ms, transform 300ms;

    :first-of-type {
      transform: ${({ menuOpen }) =>
        menuOpen ? "rotate(45deg)" : "rotate(0)"};
    }

    :nth-of-type(2) {
      opacity: ${({ menuOpen }) => (menuOpen ? "0" : "1")};
      transform: ${({ menuOpen }) =>
        menuOpen ? "translateX(-20deg)" : "translateX(0)"};
    }
    :nth-of-type(3) {
      transform: ${({ menuOpen }) =>
        menuOpen ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
`

const MenuLinks = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(0, 0, 0, 0.9);
  position: absolute;
  z-index: 5;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  transition: all 0.5s ease-out;
  transform: ${({ menuOpen }) =>
    menuOpen ? "translateX(0)" : "translateX(100%)"};
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    justify-content: center;
    margin: 0;
    li {
      list-style: none;
    }
    a {
      text-decoration: none;
      color: var(--blanco);
      transition: color 300ms;
      font-size: 1.5rem;

      :hover {
        color: var(--secundario);
      }
    }
  }
`
