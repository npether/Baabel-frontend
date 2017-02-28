import React, { Component } from 'react';
var d3 = require("d3");

  // let width = 960;
  // let height = 500;
  // console.log(d3);
  // let force = d3.forceSimulation();
    // .charge(-300)
    // .linkDistance(50)
    // .size([width, height]);

class ForceDirectedGraph extends Component {

  constructor() {
    super();
    // var nodes = this.props.data.nodes;


    // ##
    // this.state = {
    //   // nodes: this.props.data.nodes,
    //   // links: this.props.data.links,
    // }
  }



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

    var nodes = this.props.data.nodes,
        links = this.props.data.links;

    // var canvas = d3.select("#root");
    // canvas.append("svg").append("circle").attr("cx", 5).attr("cy", 5).attr("r", 5).attr("fill", "red");
    // var svg = canvas.select("svg"),
    // width = +svg.attr("width"),
    // height = +svg.attr("height");

    // var color = d3.scaleOrdinal(d3.schemeCategory20);

    // var simulation = d3.forceSimulation()
    // .force("link", d3.forceLink().id(function(d) { return d.id; }))
    // .force("charge", d3.forceManyBody())
    // .force("center", d3.forceCenter(width / 2, height / 2));

  //   var link = svg.append("g")
  //     .attr("class", "links")
  //   .selectAll("line")
  //   .data(links)
  //   .enter().append("line")
  //     .attr("stroke-width", function(d) { return Math.sqrt(d.value); });

  //    var node = svg.append("g")
  //     .attr("class", "nodes")
  //   .selectAll("circle")
  //   .data(nodes)
  //   .enter().append("circle")
  //     .attr("r", 5)
  //     .attr("fill", function(d) { return color(d.group); })
  //     .call(d3.drag()
  //         .on("start", dragstarted)
  //         .on("drag", dragged)
  //         .on("end", dragended));

  //   node.append("title")
  //     .text(function(d) { return d.id; });

  // simulation
  //     .nodes(nodes)
  //     .on("tick", ticked);

  // simulation.force("link")
  //     .links(links);

//   function ticked() {
//     link
//         .attr("x1", function(d) { return d.source.x; })
//         .attr("y1", function(d) { return d.source.y; })
//         .attr("x2", function(d) { return d.target.x; })
//         .attr("y2", function(d) { return d.target.y; });

//     node
//         .attr("cx", function(d) { return d.x; })
//         .attr("cy", function(d) { return d.y; });
//   }

//   function dragstarted(d) {
//   if (!d3.event.active) simulation.alphaTarget(0.3).restart();
//   d.fx = d.x;
//   d.fy = d.y;
// }

// function dragged(d) {
//   d.fx = d3.event.x;
//   d.fy = d3.event.y;
// }

// function dragended(d) {
//   if (!d3.event.active) simulation.alphaTarget(0);
//   d.fx = null;
//   d.fy = null;
// }

    // var nodes = this.props.data.nodes;
    // var simulation = d3.forceSimulation(nodes);

    // const nodes = this.props.data.nodes,
    //       links = this.props.data.links;

    // console.log(nodes);
    // console.log(links);

    // var svg = 

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
