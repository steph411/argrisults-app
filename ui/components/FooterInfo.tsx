import React from 'react'
import styled from 'styled-components'


interface Props {
  className?: string 
  title: string
  elements: string[]
}

let  FooterInfo: React.FC<Props> = ( {className, title, elements }) => {
  return (
    <div className={className}>
      <h4 className="title">{title }</h4>
      {
        elements.map((el, idx) => (
          <p key={idx} className="text">{ el}</p>
        ))
      }
    </div>
  )
}


FooterInfo = styled(FooterInfo)`
  display: flex;
  text-align: center;
  flex-direction: column;
  padding: 0 0 0 0;
  color: var(--grey); 
  
  .title{
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 150%;
  }
  
  .text{
    font-size: 1.125rem;
    line-height: 150%;
    padding: .5rem 0;
  }

`

export default  FooterInfo