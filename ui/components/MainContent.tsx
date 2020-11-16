import React from 'react'
import styled from 'styled-components'
import Temperature from '../assets/temperature.svg'
import Rainfall from '../assets/rain.svg'
import Humidity from '../assets/humidity.svg'
import Radiation from '../assets/radiation.svg'
import Wind from '../assets/wind.svg'
import Location from '../assets/location.svg'
import OverviewItem from './OverviewItem';
import Forecasts from './Forecasts'
import SidebarMenu from './SidebarMenu'
import Ads from './Ads'
import Advisery from './Advisery'



interface Props {
  className?: string 
}

let MainContent: React.FC<Props> = ( {className}) => {
  
  const overviews: any[] = [
    {
      name: "temperature",
      logo: Temperature,
      value: 15
    },
    {
      name: "Rainfall",
      logo: Rainfall,
      value: 15
    },
    {
      name: "humidity",
      logo: Humidity,
      value: 15
    },
    {
      name: "Solar radiation",
      logo: Radiation,
      value: 15
    },
    {
      name: "Wind speed",
      logo: Wind,
      value: 15
    },
  ]
  
  return (
    <section className={className}>
      <div className="location-icon-container">
          <div className="location-icon">
            <Location />
          </div>
          <p className="location-text">Choose your location</p>
      </div>
      <section className="overview-container">
        <div className="overview">
          <h2 className="overview-title">Overview</h2>
          <div className="overview-content">
            {
              overviews.map((el, idx) => (
                <OverviewItem
                  name={el.name}
                  logo={<el.logo />}
                  value={el.value}
                  key={idx}
                />
              ))
            }
          </div>
        </div>
      </section>
      <SidebarMenu/>
      <Forecasts />
      <Ads />
      <Advisery/>
    </section>
  )
}


MainContent = styled(MainContent)`
  margin-top: 45px;
  display: grid;
  grid-template-columns: 339px 1fr;
  grid-template-rows: 200px 330px 100px auto;
  grid-template-areas: "location overview"
                      "menu forecasts"
                      "ads forecasts"
                      "ads advisery";
  grid-row-gap: 40px;
  grid-column-gap: 20px;
  padding-left: calc(50% - var(--container) / 2);
  padding-right: calc(50% - var(--container) / 2);
  & div{
    /* background: palegoldenrod; */
  }
  & section{
    /* background: palevioletred; */
  }

  .sidebar{
    display: flex
  }

  .location-icon-container{
    height: 202px;
    width: 100%;
    display: grid;
    place-items: center;
    text-align: center;
    border-radius: 10px;
    background-color: var(--grey-light);
    box-shadow: var(--shadow-sm);
    grid-area: location;
  }

  .location-icon{
    width: 70px;
    height: 70px;
    box-shadow: var(--shadow-sm);
    border-radius: 50%;
    display: grid;
    place-items: center;
  }

  .location-text{

  }

  
  .overview-container{
    grid-area: overview;
  }
  .overview{
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .overview-title{
    font-size: 36px;
    padding: 10px 0px;
  }
  .overview-content{
    width: 100%;
    display: flex;
    margin-top: auto;
    justify-content: space-between;
    align-self: end;
  }
`


export default MainContent