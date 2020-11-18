import React from 'react'
import styled from 'styled-components'


interface Props {
  className?: string 
  title: string
  description: string
  inverted?: boolean
}

let AviseryButton = styled.a`
  margin-top: auto;
  align-self: flex-start;
  padding: 15px 44px;
  background: ${props => props.inverted ? "var(--dark-green);": "white;"};
  color: ${props => props.inverted ?"white;": "var(--dark-green);"};
  &:hover{
    cursor: pointer;
  }
`



let  AdviseryItem: React.FC<Props> = ( {className, title, description, inverted=false }) => {
  return (
    <div className={className}>
      <h3>{ title}</h3>
      <p>{description }</p>
      <AviseryButton
        inverted={inverted}
      >
        Know More
      </AviseryButton>
    </div>
  )
}


AdviseryItem = styled(AdviseryItem)`
  box-shadow: var(--shadow-lg);
  width: 32%;
  display: flex;
  flex-direction: column;
  color: ${props => props.inverted ? "var(--grey-dark);": "white;"};
  background: ${props => props.inverted ? "white;" : "var(--dark-green)"};
  border-radius: 10px;
  position: relative;
  padding: 7rem 1rem 1rem 1rem;


  &::after{
    content: "";
    position: absolute;
    background: ${props => props.inverted ?"var(--dark-green)": "white;" };
    width: 70%;
    height: 20px;
    top: 50px;
    left: 0;
  }

  p {
    font-size: 18px;
    font-weight: 500;
    color: ${props => props.inverted ? "var(--dark-grey)" : "white" };
    padding: 2rem 0;
  }
`



export default  AdviseryItem