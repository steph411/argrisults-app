import * as d3 from 'd3'




export const drawChart = (formattedData, chartRef, hour=true) => {
  
  
  const labels = formattedData.map(el => el.label)
  const values = formattedData.map(el => el.value)
  const containerHeight = chartRef.current.clientHeight
  const containerWidth = chartRef.current.clientWidth
  console.log({containerWidth, containerHeight})
  
  let svg = d3.select(chartRef.current)
    .append("svg")
    // .attr("preserveAspectRatio", "xMinYMin meet")
    // .attr("viewBox", "0 0 300 300")
    .attr("width", containerWidth)
    .attr("height", containerHeight)
    .classed("svg-content", true)  
  
  let selection = svg.selectAll("rect").data(values);
  let yScale = d3.scaleLinear()
    .domain([0, d3.max(values)])
    // .range([containerHeight, 0])
    .range([0, containerHeight - 50]);
 
  // add axis and labels



  let xDateScale = d3.scalePoint()
      .domain(labels)
      .range([0, containerWidth])
  svg
    .append("g")
    .attr("transform", "translate(0, 0)")      // This controls the vertical position of the Axis
    .call(d3.axisBottom(xDateScale));
  

  
  let y_axis = d3.axisLeft()
    .scale(yScale);

  svg.append("g")
    .attr("transform", "translate(0, 300)")
    .call(y_axis);
  
  selection
  .transition().duration(300)
      .attr("height", (d) => yScale(d))
      .attr("y", (d) => containerHeight - yScale(d))
  
  selection
    .enter()
    .append("rect")
    .attr("x", (d, i) => i * 45)
    .attr("y", (d) => containerHeight)
    .attr("width", 40)
    .attr("height", 0)
    .attr("fill", "steelblue")
    .transition().duration(300)
    .attr("height", (d) => yScale(d))
    .attr("y", (d) => containerHeight - yScale(d))
  

  selection
    .exit()
    .transition().duration(300)
        .attr("y", (d) => containerHeight)
        .attr("height", 0)
    .remove()

}