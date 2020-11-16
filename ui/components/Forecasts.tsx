import React from 'react'
import styled from 'styled-components'


interface Props {
  className?: string 
}

interface FlagProps{
  className?: string
  color?: string
  text: string
}
let Flag: React.FC<FlagProps> = ({ className, color, text }) => {
  return (
    <a className={className}>
       {text} 
    </a>
  )
}

Flag = styled(Flag)`
  background: ${(props) => props.color? `var(${props.color})`: "var(--green)"};
  padding: 8px 20px;
  color: white;
  border-radius: 20px;

  &:hover{
    cursor: pointer;
    box-shadow: var(--shadow-sm);
  }
  
`





let  Forecasts: React.FC<Props> = ({className}) => {
  const flags: any[] = [
    {
      text: "today",
      color: "--blue"
    },
    {
      text: "month",
      color: "--green"
    },
    {
      text: "today",
      color: "--teal"
    },
  ]
  return (
    <section className={className}>
      <div className="graphic">
        <div className="header">
          <span>Forecasts since</span>
          {flags.map((flag, index) => (
            <Flag
              text={flag.text}
              color={flag.color}
              key={index}
            />)
          )}
        </div>
        <div className="chart">

        </div>
      </div>
      <div className="parameters">

      </div>
    </section>
  )
}


Forecasts = styled(Forecasts)`
  height: 498px;
  background: var(--grey-light);
  box-shadow: var(--shadow-sm);
  width: 100%;
  border-radius: 10px;
  padding: 30px;
  display: grid;
  grid-template-columns: 70% 1fr;
  grid-column-gap: 10px;
  grid-area: forecasts;
  align-self: start;
  justify-content: space-between;

  .header{
    padding: 0px 0px 20px 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .graphic{
    /* width: 70%; */
  }
  
  .chart{
    /* width: 694px; */
    height: 378px;
    background: white;
    box-shadow: var(--shadow-sm);
  }

  .parameters{
    height: 378px;
    /* width: 28%; */
    background: white;
    box-shadow: var(--shadow-sm);
    align-self: flex-end;
    
  }
`

export default  Forecasts