import React from 'react'
import styled from 'styled-components'


interface Props {
  className?: string 
}


const SubscribeButton: React.FC = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  background: var(--green);
  padding: 1.25rem 5rem;
  border-radius: 34px;
  transition: all 200ms ease-in-out;
  &:hover{
    cursor: pointer;
    box-shadow: var(--shadow-lg);
  }

`



let  NewsletterSub: React.FC<Props> = ( {className }) => {
  return (
    <div className={className}>
      <h3 className="title">To get the latest News &amp; Further updates</h3>
      <h3 className="subscribe">Subscribe To Our Newsletter</h3>
      <h4 className="sub-button">
        <SubscribeButton>Subscribe</SubscribeButton>
      </h4>
    </div>
  )
}


NewsletterSub = styled(NewsletterSub)`
  text-align: center;
  padding: 8rem 0px;
  .title{
    color: var(--green);
    font-size: 2.25rem;
    font-weight: 500;
    line-height: 150%;
  }
  
  .subscribe{
    font-size: 2.25rem;
    font-weight: bold;
    color: var(--dark-green);
    line-height: 150%;
    
  }
  .sub-button{
    padding: 2rem 0;
    
  }

`

export default  NewsletterSub