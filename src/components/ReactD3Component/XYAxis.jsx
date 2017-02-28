import React  from 'react';
import Axis   from './axis';
import * as d3    from 'd3';


export default (props) => {
  const xSettings = {
    translate: `translate(0, ${props.height - props.padding})`,
    axis: d3.axisBottom().scale(props.xScale),
    orient: 'bottom'
  };
  const ySettings = {
    translate: `translate(${props.padding}, 0)`,
    axis: d3.axisLeft().scale(props.yScale),
    orient: 'left'
  };
  return (
    <g className="xy-axis">
      <Axis {...ySettings}/>
      <Axis {...xSettings}/>
    </g>
    );
}

