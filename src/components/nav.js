import React, {useState} from 'react'
import {Link} from 'gatsby'
import styled from '@emotion/styled'
import  {Global, css}  from '@emotion/react'




 const NavLink = styled(Link)`
     color: var(--negro);
     font-size: 1.5rem;
     font-weight: 700;
     line-height: 1;
     text-decoration: none;
     padding: 1rem;
     margin-right: 1rem;
     transition: color 300ms;
     &:last-of-type{
         margin-right: 0;
     }
     &.pagina-actual{
         border-bottom: 2px solid var(--primario);
     }
     &:hover{
         transform: translateY(-5px);
         color: var(--secundario);
         &.pagina-actual{
             border-bottom: 2px solid var(--secundario);
        }
    }
     
     `

const MenuIcon = styled.button`

  position: fixed;
  top: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 5;
  div{
      width: 2rem;
      height: .33rem;
      background: black;
      border-radius: 5px;
      transform-origin: 1px;
      position: relative;
      transition: opacity 300ms, transform 300ms;

    :first-child {
        transform: ${({nav}) => (nav ? 'rotate(45deg)' : 'rotate(0)')}
    }
    :nth-child(2) {
        opacity: ${({nav}) => (nav ? "0" : "1")}
    }
    :nth-child(3){
         transform: ${({nav}) => (nav ? 'rotate(-45deg)' : 'rotate(0)')}

    }

  }
`
const MenuLink = styled.nav`
    display: flex;
    z-index: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    width: 25%;
    background: #d7d7d7;
    position: absolute;
    top: 0;
    right: 0;
    transition: transform 300ms;
    transform: ${({nav}) => nav ? "translateX(0)": "translateX(100%)"};

    ul{
        list-style-type: none;
     }

    li{
        margin-top: 2rem;
    }
    
    

`




const Navegacion = () => {

    const [nav, showNav] = useState(false)


    return ( 
           
        <div>
            <Global 
                styles={css`
                body, html{
                    margin: 0;
                    padding: 0;
                    overflow-x: hidden;
                }
                `}
            />
                <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
                    <div />
                    <div />
                    <div />
                </MenuIcon>
                <MenuLink nav={nav}>
                    <ul>
                        <li>
                            <NavLink to="/" activeClassName="pagina-actual">Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/" activeClassName="pagina-actual">PAge2</NavLink>
                        </li>
                    </ul>
                </MenuLink>
        </div>          
    );
}
 
export default Navegacion;