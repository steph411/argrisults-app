import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/logo-white.svg'
import Home from '../assets/menu/home.svg'
import Opportunity from '../assets/menu/bookmark.svg'
import Talks from '../assets/menu/talks.svg'
import Insights from '../assets/menu/insights.svg'
import Profile from '../assets/menu/user-profile.svg'
import Publications from '../assets/menu/publications.svg'
import Add from '../assets/menu/add.svg'
import Bell from '../assets/menu/bell.svg'
import NavElement from './NavElement'; 


interface Props {
  className?: string 
}


let Header: React.FC<Props> = ( {className }) => {
  
  const navElements: any[] = [
    {
      name: "home",
      logo: Home
    },
    {
      name: "opportunities",
      logo: Opportunity
    },
    {
      name: "lightning talks",
      logo: Talks
    },
    {
      name: "insights",
      logo: Insights
    },
    {
      name: "profile",
      logo: Profile
    },
    {
      name: "publications",
      logo: Publications
    },
    {
      name: "add new",
      logo: Add
    },
  ] 
  
  return (
    <header className={className}>
      <div className="logo">
        <Logo />
      </div>
      <div className="container">

        <input name="search" className="input" placeholder="search"/>
        <nav className="nav">
          {
            navElements.map((element, index) => (
              <NavElement
                name={element.name}
                key={index}
                logo={<element.logo />} />
              )
            )
          }
        </nav>
      </div>
      <div className="bell">
        <Bell />
      </div>
    </header>
  )
}


Header = styled(Header)`

  width: 100vw;
  padding: 28px 0px;
  background: var(--green);
  display: grid;
  grid-template-columns: 1fr 75vw 1fr;
  
  
  .logo{
    height: 54px;
    display: inline-block;
    justify-self: center;
  }
  .container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: var(--container);
  }

  .input{
    background: white;
    color: black;
    height: 54px;
    width: 338px;
    padding: 16px 18px;
    border-radius: 10px;
    border: none;
    outline: none;
    transition: all 0.05s ease-in-out; 
    &:hover,
    &:active,
    &:focus{
      box-shadow: 0 0 0 4px var(--blue);
    }
  }

  .nav{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    /* margin-left: auto; */
    width: 45%;
    height: 61px;
  }

  .bell{
    margin-right: 28px;
    margin-left: auto;
    align-self: center;
  }


`  
export default Header