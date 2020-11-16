import React from 'react'
import styled from 'styled-components'


interface Props {
  className?: string 
  name: string
  logo: any
}

let  NavElement: React.FC<Props> = ( {className, logo, name }) => {
  return (
    <div className={className}>
      {logo} 
      {name}
    </div>
  )
}


NavElement = styled(NavElement)`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 12px;
  color: white;
  font-weight: 500;

  
`

export default  NavElement