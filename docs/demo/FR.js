var line4 = document.getElementById("my_dataviz4")

var margin = { top: 10, right: 100, bottom: 30, left: 100 },
  width = 700 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg4 = d3.select("#my_dataviz4")
  .append("svg")
  .attr("width", "100%")
  .attr("height", height + margin.top + margin.bottom + 100)
  .append("g")
  .attr("transform",
    "translate(" + 65 + "," + margin.bottom + ")");

//Read the data
d3.csv("./data/FR_connected_scatter.csv", function (data) {

  // List of groups
  var allGroup = ["France_2019", "France_2020"]

  // Reformat the data: we need an array of arrays of {x, y} tuples
  var dataReady = allGroup.map(function (grpName) {
    return {
      name: grpName,
      values: data.map(function (d) {
        return { time: d.time, value: +d[grpName] };
      })
    };
  });

  console.log(dataReady)

  // A color scale
  var myColor = d3.scaleOrdinal()
    .domain(allGroup)
    .range(d3.schemeCategory10);

  // Add X axis
  var tickLabels = ['0', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  var x = d3.scaleLinear()
    .domain([0, 12])
    .range([0, width - 50])
  svg4.append("g")
    .attr("transform", "translate(0," + height + ")")
    .style("font-size", "15px")
    .call(d3.axisBottom(x).tickFormat(function (d, i) { return tickLabels[i] }));

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([8000, 130000])
    .range([height, 0]);
  svg4.append("g")
    .style("font-size", "15px")
    .call(d3.axisLeft(y));

  // Add the lines
  var line = d3.line()
    .x(function (d) { return x(+d.time) })
    .y(function (d) { return y(+d.value) })
  svg4.selectAll("myLines")
    .data(dataReady)
    .enter()
    .append("path")
    .attr("class", function (d) { return d.name })
    .attr("d", function (d) { return line(d.values) })
    .attr("stroke", function (d) { return myColor(d.name) })
    .style("stroke-width", 4)
    .style("fill", "none")

  // Add the points
  svg4
    .selectAll("myDots")
    .data(dataReady)
    .enter()
    .append('g')
    .style("fill", function (d) { return myColor(d.name) })
    .attr("class", function (d) { return d.name })
    .selectAll("myPoints")
    .data(function (d) { return d.values })
    .enter()
    .append("circle")
    .attr("cx", function (d) { return x(d.time) })
    .attr("cy", function (d) { return y(d.value) })
    .attr("r", 5)
    .attr("stroke", "white")

  // Add a label at the end of each line
  // svg4
  //   .selectAll("myLabels")
  //   .data(dataReady)
  //   .enter()
  //   .append('g')
  //   .append("text")
  //   .attr("class", function (d) { return d.name })
  //   .datum(function (d) { return { name: d.name, value: d.values[d.values.length - 1] }; }) 
  //   .attr("transform", function (d) { return "translate(" + x(d.value.time) + "," + y(d.value.value) + ")"; }) 
  //   .attr("x", 12) 
  //   .text(function (d) { return d.name; })
  //   .style("fill", function (d) { return myColor(d.name) })
  //   .style("font-size", 20)
  //   .style("font-weight", "bold")

  // Add a legend (interactive)
  svg4
    .selectAll("myLegend")
    .data(dataReady)
    .enter()
    .append('g')
    .append("text")
    .attr('x', function (d, i) { return 30 + i * 160 })
    .attr('y', 430)
    .text(function (d) { return d.name; })
    .style("fill", function (d) { return myColor(d.name) })
    .style("font-size", 20)
    .style("font-weight", "bold")
    .on("click", function (d) {
      currentOpacity = d3.selectAll("." + d.name).style("opacity")
      d3.selectAll("." + d.name).transition().style("opacity", currentOpacity == 1 ? 0 : 1)

    })
})
var myimage = svg4.append('image')
  .attr('xlink:href', './img/FR.png')
  .attr('width', 70)
  .attr("style", "outline: thin solid black;")

myimage.attr('x', 40)
