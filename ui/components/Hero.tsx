import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'


interface Props {
  className?: string 
}

let Hero:React.FC<Props> = ( {className} ) => {
  return (
    <section className={className}>
      <h2>Agricultural Intelligence</h2>
    </section>
  )
}

Hero = styled(Hero)`
  width: 100vw;
  height: 444px;
  background: linear-gradient(92.5deg, #040404 -7.02%, rgba(9, 15, 12, 0) 111.74%), 
              url("/hero-image.png");
  padding-top: 56px;
  padding-left: calc(50% - var(--container) / 2);
  & h2{
    font-size: 64px;
    font-weight: bold;
    color: white;
  }

`

export default Hero