import React from 'react'
import styled from 'styled-components'
import LogoGreen from '../assets/logo-green.svg'
import FooterInfo from './FooterInfo'
import UpArrow from '../assets/up.svg'

interface Props {
  className?: string 
}



const DownloadButton = styled.a`
  background: var(--dark-green);
  color: white;
  padding: 1rem 3rem;
  text-align: center;
  border-radius: 10px;
  display: inline-block;
  font-weight: bold;
  width: 100%;
  

`





let Footer: React.FC<Props> = ({ className }) => {
  
  const footerSections: any[] = [
    {
      title: "Commnunity",
      elements: ["Create account", "Go premium", "Refer a freind", "Get coupon code"]
    },
    {
      title: "Support",
      elements: ["terms and conditions", "privacy & policy", "copyright issue", "Get help"]
    },
    {
      title: "Join Us",
      elements: ["Become a member", "Join agrilink", "Build your own software", "Partnership"]
    },
  ]
  return (
    <section className={className}>

      <div className="footer container">
        <div className="logo">
          <LogoGreen/>
        </div>
        {
          footerSections.map((section, idx) => (
            <FooterInfo
              title={section.title}
              elements={section.elements}
            />
          ))
        }
        <div className="download">
          <h3>Download App</h3>
          {
            ["Apple IOS", "Google play"].map((el, idx) => (
              <DownloadButton className="download-button" key={idx}>{ el}</DownloadButton>
            ))
          } 
        </div>
      </div>
      <div className="copyright container">
        <span>
          Copyright 2020 AbundeSEG 
        </span>
        <span>
          Go to top &nbsp;
          <UpArrow/>
        </span>
      </div>
    </section>
  )
}


Footer = styled(Footer)`
  .footer{
    display: grid;
    grid-template-columns:12% repeat(4, 1fr);
    color: var(--grey);
    padding-bottom: 1rem;
  }

  .download{
    justify-content: space-between;
    & .download-button{
      margin: 1rem 0;
    }
  }
  
  .copyright {
    background: var(--green);
    color: white;
    padding-top: 1rem;
    padding-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    & span{
      display: inline-block;
      
    }
  }
  


`

export default Footer