import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

const ImageBackground = styled(BackgroundImage)`
  height: 700px;
  
  
  `;

const TextoImagen = styled.div`
    background-image: linear-gradient(to top, rgb(0,0,0,.8), rgb(0,0,0,.8) );
    color: #fff;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
    
    h1{
        font-size: 4rem;
        margin: 0;
        @media (min-width: 992px){
            font-size: 5.8rem;
        }

        @media (max-width: 480px){
            font-size: 2.6rem;
            text-align: center;
        }
    }
    p{
        font-size: 2rem;
        @media (min-width: 992px){
            font-size: 2.5rem;
        }
        @media (max-width: 480px){
           
            text-align: center;
        }
    }

`;


const ImagenLeon = () => {

    const { image } = useStaticQuery(graphql`
    query{
        image: file(relativePath: { eq: "bg-1.png" }){
        sharp: childImageSharp{
            fluid{
               ...GatsbyImageSharpFluid_withWebp
        }
      }
      }
    }
    `);

    

    return (  
        <ImageBackground tag="section" fluid={image.sharp.fluid} fadein="soft">
            <TextoImagen>
                <p
                    css={css`
                        color: var(--secundario);
                        border-bottom: 1px solid var(--secundario);
                    `}
                >Servi Web</p>
                <h1
                    css={css`
                    max-width: 980px;                   

                `}
                >Somos Diseñadores de Paginas web</h1>
                
            </TextoImagen>            
        </ImageBackground>
    );
}
 
export default ImagenLeon;