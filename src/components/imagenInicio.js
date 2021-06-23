import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"
import Barra from "./divisor"

const ImageBackground = styled(BackgroundImage)`
  height: 700px;
`

const TextoImagen = styled.div`
  background-image: linear-gradient(
    to top,
    rgb(0, 0, 0, 0.8),
    rgb(0, 0, 0, 0.8)
  );
  color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  border: none;

  h1 {
    font-size: 4rem;
    margin: 0;
    @media (min-width: 992px) {
      font-size: 4rem;
    }

    @media (max-width: 480px) {
      font-size: 2.6rem;
      text-align: left;
    }
  }
  p {
    color: var(--secundario);
    /* border-bottom: 1px solid var(--secundario); */
    font-size: 2rem;
    @media (min-width: 992px) {
      font-size: 2rem;
    }
    @media (max-width: 480px) {
      text-align: left;
    }
  }
`

const ImagenLeon = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "bg-1.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <>
      <ImageBackground tag="section" fluid={image.sharp.fluid} fadein="soft">
        <TextoImagen>
          <p>Diseño de páginas web</p>
          <h1 className="container">
            Deja tu proyecto en manos de Profesionales
          </h1>
        </TextoImagen>
        {/* <Barra />          */}
      </ImageBackground>
    </>
  )
}

export default ImagenLeon
