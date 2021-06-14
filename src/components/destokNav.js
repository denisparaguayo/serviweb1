import React, {useEffect,useRef, useState  } from "react"
import Link from "gatsby"
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"
import {css} from '@emotion/react'

const DesktopNavmenu = () => {
    return (  
        <>
        <StyledHeader>
           <Link
                to="/"               
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
        </StyledHeader>
        </>        
    );
}
 
export default DesktopNavmenu;


const StyledHeader = styled.header`
    display: flex;
    position: fixed;
    align-items: center;
    width: 100%;
    top: 0;
    z-index: 10;
    padding: 0 .5rem;
    background: var(--blanco);

`