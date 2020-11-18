import React from 'react'
import styled from 'styled-components'


interface Props {
  className?: string 
  name: string
  logo: any;
  value: number;
  unit?: string;
}

let  OverviewItem: React.FC<Props> = ( {className, value, logo, name, unit=""}) => {
  return (
    <div className={className}>
      <p className="value">{value.toFixed(2)} <span className="unit">{ unit }</span> </p>
      {logo}
      <p className="name">{ name }</p>
    </div>
  )
}


OverviewItem = styled(OverviewItem)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  & .value{
    text-align: left;
    width: 100%;
    padding: 4px;
  }
  border-radius: 10px;
  text-align: center;
  font-size: 14px;
  width: 19%;
  background-color: var(--grey-light); 
  & .name{
    margin-top: auto;
  }

  .unit{
    font-weight: 600;
    color: var(--grey-dark);
    margin-left: auto;
  }


`

export default  OverviewItem