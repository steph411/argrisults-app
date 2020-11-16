import React from 'react'
import styled from 'styled-components'


interface Props {
  className?: string 
  name: string
  logo: any;
  value: number;
}

let  OverviewItem: React.FC<Props> = ( {className, value, logo, name}) => {
  return (
    <div className={className}>
      <p className="value">{ value}</p>
      {logo}
      <p className="name">{ name }</p>
    </div>
  )
}


OverviewItem = styled( OverviewItem)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  & .value{
    text-align: left;
    width: 100%;
    padding: 4px 10px;
  }
  border-radius: 10px;
  text-align: center;
  font-size: 14px;
  width: 19%;
  background-color: var(--grey-light); 
  & .name{
    margin-top: auto;
  }
`

export default  OverviewItem