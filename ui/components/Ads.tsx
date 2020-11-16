import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

interface Props {
  className?: string 
}

let  Ads: React.FC<Props> = ( {className }) => {
  return (
    <div className={className}>
      <img
        src="/data.jpg"
        width="100%"
        height="auto"
      />
    </div>
  )
}


Ads = styled(Ads)`
  box-shadow: var(--shadow-sm);  
  width: 100%;
  border-radius: 10px;
  grid-area: ads;
  border-radius: 10px;
  background: var(--grey-light);
  & img{
    display: block;
    border-radius: 10px;
    object-fit: cover;
    height: 100%;
    max-width: 100%;
  }
`

export default  Ads