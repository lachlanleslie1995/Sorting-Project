import * as React from "react";
import { useEffect } from "react";
import * as d3 from "d3";

export interface VisualisationProps {
  Values: number[];
}

const Visualisation: React.SFC<VisualisationProps> = (VisualisationProps) => {
  let values = VisualisationProps.Values;
  let chart;
  const margin = 60;
  const width = 1000 - 2 * margin;
  const height = 600 - 2 * margin;

  const yScale = d3
    .scaleLinear()
    .range([height - 100, 0])
    .domain([0, 100]);

  const xScale = d3
    .scaleBand()
    .range([0, width - 100])
    .domain(values.map((value) => String(value)))
    .padding(0.2);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    chart = d3
      .select("#chart-container")
      .append("g")
      .attr("transform", `translate(${margin}, ${margin})`);

    chart.append("g").call(d3.axisLeft(yScale));
    chart
      .append("g")
      .attr("transform", `translate(0, ${height - 100})`)
      .call(d3.axisBottom(xScale));

    console.log(chart.selectAll("g"));

    chart
      .selectAll()
      .data(values)
      .enter()
      .append("rect")
      .attr("x", (d, i) => 20 + i * (xScale.bandwidth() + 15))
      .attr("y", (d) => yScale(d) - 100)
      //   .attr("y", (d, i) => d)
      .attr("height", (d) => height - yScale(d))
      .attr("width", xScale.bandwidth());
  });

  return (
    <div className="visualisation col-2">
      <div className="display-values">
        {/* {VisualisationProps.Values.map((value, index) => {
          return <div key={index}>{value}</div>;
        })} */}
        <svg id="chart-container" width={width} height={height}></svg>
      </div>
    </div>
  );
};

export default Visualisation;
