import React from 'react'
import styled from 'styled-components'
import Weather from '../assets/weather.svg'
import Indicators from '../assets/indicators.svg'
import Market from '../assets/market.svg'
import SidebarMenuItem from './SidebarMenuItem'


interface Props {
  className?: string 
}

let  SidebarMenu: React.FC<Props> = ( {className }) => {
  const items: any[] = [
    {
      name: "Weather",
      logo: Weather
    },
    {
      name: "Agronomic indicators",
      logo: Indicators
    },
    {
      name: "Market",
      logo: Market
    },
  ]
  return (
    <div className={className}>
      {items.map((item, idx) => (
        <SidebarMenuItem
          name={item.name}
          logo={<item.logo/>}
          key={idx}
        />
      ))}
    </div>
  )
}


SidebarMenu = styled(SidebarMenu)`
  background: var(--grey-light);
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: var(--shadow-sm);
 
`

export default  SidebarMenu