import React from 'react'
import styled from 'styled-components'
import Chevron from '../assets/chevron_right.svg'


interface Props {
  className?: string 
  name: string
  logo: any
}

let  SidebarMenuItem: React.FC<Props> = ( {className, name, logo}) => {
  return (
    <div className={className}>
      {logo}
      <span className="name">{name}</span>
      <Chevron/>
    </div>
  )
}


SidebarMenuItem = styled(SidebarMenuItem)`
  padding: 8px; 
  display: flex;
  font-size: 18px;
  font-weight: 500;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 30px 22px; 
  color: var(--grey-dark);
  &:hover{
    cursor: pointer;
    background: var(--grey-light);
  }
  
  .name{
    display: inline-block;
    margin-right: auto;
    padding-left: 1rem;
    justify-self: flex-start;
  }
  
  &:last-child{
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  
  &:first-child{
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

`

export default  SidebarMenuItem