import * as React from "react"
import PropTypes from "prop-types"

import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import { Link } from "gatsby"
import { css } from "@emotion/react"

const Header = () => (
  <>
    <header className="bg-dark">
      <Navbar className="container" bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">
          <div
            css={css`
              line-height: 0.5;
              text-align: center;
              margin-bottom: 0;
              h5 {
                color: var(--secundario);
                font-size: 2rem;
                font-family: "Poppins", sans-serif;
                font-weight: bold;
                text-shadow: 2px 2px gray;
              }
              p {
                font-size: 1rem;
                margin-bottom: 0;
                opacity: 0.7;
              }
            `}
          >
            <h5>SERVIWEB</h5>
            <p>Desarrollo de sitios WEb</p>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav as="ul" className="ml-auto">
            <Nav.Item as="li">
              <Link to="/" className="nav-link" activeClassName="active">
                Inicio
              </Link>
            </Nav.Item>
            <NavDropdown title="ServiWeb" id="basic-nav-dropdown">
              <NavDropdown.Item href="/nosotros">Conócenos</NavDropdown.Item>
              <NavDropdown.Item href="#">Historia</NavDropdown.Item>
              <NavDropdown.Item href="#">El Team</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#" variant="white" disabled>
                Únete a nuestro equipo
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Soluciones Web" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Marketing Digital</NavDropdown.Item>
              <NavDropdown.Item href="#">Paginas Web</NavDropdown.Item>
              <NavDropdown.Item href="#">Apps</NavDropdown.Item>
              <NavDropdown.Item href="#">Tiendas Virtuales</NavDropdown.Item>
              <NavDropdown.Item href="#">MicroTiendas</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Administrador de Contenido
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Diseño" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Identidad Visual</NavDropdown.Item>
              <NavDropdown.Item href="#">Diseño Gráfico</NavDropdown.Item>
            </NavDropdown>
            <Nav.Item as="li">
              <Link to="#" className="nav-link" activeClassName="active">
                Blog
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link
                to="/contacto"
                className="nav-link"
                activeClassName="active"
              >
                Contacto
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
