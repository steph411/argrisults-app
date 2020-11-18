import React, {useRef, useEffect} from 'react'
import styled from 'styled-components'
import { drawChart } from '../utils'

interface Props {
  className?: string 
  chartData?: any[] 
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





let Forecasts: React.FC<Props> = ({ className, chartData = [] }) => {
  const chartRef = useRef(null)
  const hour = true;




  
  useEffect(() => {
    let data = chartData
    if (hour) {
      data = chartData[0].forecast
    }
    
    let formattedData = data.map((el, i) => {
      // console.log({ element: el });
      if (hour) {
        return {
          label: el.endTime.split("T")[1].split("+")[0].slice(0, 2),
          value: el.temperatures.value
        }
      }
      else {
        return {
          label: el.date,
          value: el.forecast[12].temperatures.value
        }
      }
    });

    // let formattedDataDates = data.map((el, i) => {
    //   return el.endTime.split("T")[1].split("+")[0].slice(0,2)
    // })

    drawChart(formattedData, chartRef);


    // const containerHeight = chartRef.current.clientHeight
    // const containerWidth = chartRef.current.clientWidth
    // console.log({containerWidth, containerHeight})
    
    // let svg = d3.select(chartRef.current)
    //   .append("svg")
    //   // .attr("preserveAspectRatio", "xMinYMin meet")
    //   // .attr("viewBox", "0 0 300 300")
    //   .attr("width", containerWidth)
    //   .attr("height", containerHeight)
    //   .classed("svg-content", true)  
    
    // let selection = svg.selectAll("rect").data(formattedData);
    // let yScale = d3.scaleLinear()
    //   .domain([0, d3.max(formattedData)])
    //   .range([0, containerHeight - 100]);
    
    // let xDateScale = d3.scalePoint()
    //   .domain(formattedDataDates)
    //   .range([0, containerWidth])
    
    // svg
    //   .append("g")
    //   .attr("transform", "translate(0, 0)")      // This controls the vertical position of the Axis
    //   .call(d3.axisBottom(xDateScale));
    
    // let y_axis = d3.axisLeft()
    //   .scale(yScale);

    // svg.append("g")
    //   .attr("transform", "translate(0, 0)")
    //   .call(y_axis);
    
    // selection
    // .transition().duration(300)
    //     .attr("height", (d) => yScale(d))
    //     .attr("y", (d) => containerHeight - yScale(d))
    
    // selection
    //   .enter()
    //   .append("rect")
    //   .attr("x", (d, i) => i * 45)
    //   .attr("y", (d) => containerHeight)
    //   .attr("width", 40)
    //   .attr("height", 0)
    //   .attr("fill", "steelblue")
    //   .transition().duration(300)
    //   .attr("height", (d) => yScale(d))
    //   .attr("y", (d) => containerHeight - yScale(d))
    

    // selection
    //   .exit()
    //   .transition().duration(300)
    //       .attr("y", (d) => containerHeight)
    //       .attr("height", 0)
    //   .remove()
  
    },
    [chartData]
  )




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
      text: "year",
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
        <div className="chart" id="chart" ref={chartRef}>
          
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
    position: relative;
    width: 100%;
    vertical-align: top;
    overflow: hidden;
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