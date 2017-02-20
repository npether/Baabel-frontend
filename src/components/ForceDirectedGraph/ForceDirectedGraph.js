import React, { Component } from 'react';

class ForceDirectedGraph extends Component {

  // let width = 960;
  // let height = 500;
  // let force = d3.layout.force()
  //   .charge(-300)
  //   .linkDistance(50)
  //   .size([width, height]);

  // let data = this.props.data;
  // let

  // *****************************************************
  // ** d3 functions to manipulate attributes
  // *****************************************************

  // var enterNode = (selection) => {
  //   selection.classed('node', true);

  //   selection.append('circle')
  //     .attr("r", (d) => d.size)
  //     .call(force.drag);

  //   selection.append('text')
  //     .attr("x", (d) => d.size + 5)
  //     .attr("dy", ".35em")
  //     .text((d) => d.key);
  // };

  // var updateNode = (selection) => {
  //   selection.attr("transform", (d) => "translate(" + d.x + "," + d.y + ")");
  // };

  // var enterLink = (selection) => {
  //   selection.classed('link', true)
  //     .attr("stroke-width", (d) => d.size);
  // };

  // var updateLink = (selection) => {
  //   selection.attr("x1", (d) => d.source.x)
  //     .attr("y1", (d) => d.source.y)
  //     .attr("x2", (d) => d.target.x)
  //     .attr("y2", (d) => d.target.y);
  // };

  // var updateGraph = (selection) => {
  //   selection.selectAll('.node')
  //     .call(updateNode);
  //   selection.selectAll('.link')
  //     .call(updateLink);
  // };
 
  // *****************************************************
  // ** Graph and App components
  // *****************************************************
  render() {
    return (
      <div className="ForceDirectedGraph">
        

        <p>{this.props.data.nodes[1]["fill"]}</p>
      </div>
    );
  }
}

// ForceDirectedGraph.propTypes = {
//   txt: React.PropTypes.string
// }

//i'm going to set prop data as .isRequired

export default ForceDirectedGraph;
