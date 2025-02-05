// <!-- Styles -->
// <style>
// #chartdiv {
//   width: 100%;
//   height: 500px;
// }

// </style>

// <!-- Resources -->
// <script src="https://www.amcharts.com/lib/4/core.js"></script>
// <script src="https://www.amcharts.com/lib/4/charts.js"></script>
// <script src="https://www.amcharts.com/lib/4/themes/animated.js"></script>

// <!-- Chart code -->
// <script>
// am4core.ready(function() {

// // Themes begin
// am4core.useTheme(am4themes_animated);
// // Themes end

// // Create chart instance
// var chart = am4core.create("chartdiv", am4charts.XYChart3D);

// // Add data
// chart.data = [{
//   "country": "USA",
//   "visits": 4025
// }, {
//   "country": "China",
//   "visits": 1882
// }, {
//   "country": "Japan",
//   "visits": 1809
// }, {
//   "country": "Germany",
//   "visits": 1322
// }, {
//   "country": "UK",
//   "visits": 1122
// }, {
//   "country": "France",
//   "visits": 1114
// }, {
//   "country": "India",
//   "visits": 984
// }, {
//   "country": "Spain",
//   "visits": 711
// }, {
//   "country": "Netherlands",
//   "visits": 665
// }, {
//   "country": "Russia",
//   "visits": 580
// }, {
//   "country": "South Korea",
//   "visits": 443
// }, {
//   "country": "Canada",
//   "visits": 441
// }, {
//   "country": "Brazil",
//   "visits": 395
// }, {
//   "country": "Italy",
//   "visits": 386
// }, {
//   "country": "Australia",
//   "visits": 384
// }, {
//   "country": "Taiwan",
//   "visits": 338
// }, {
//   "country": "Poland",
//   "visits": 328
// }];

// // Create axes
// let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
// categoryAxis.dataFields.category = "country";
// categoryAxis.renderer.labels.template.rotation = 270;
// categoryAxis.renderer.labels.template.hideOversized = false;
// categoryAxis.renderer.minGridDistance = 20;
// categoryAxis.renderer.labels.template.horizontalCenter = "right";
// categoryAxis.renderer.labels.template.verticalCenter = "middle";
// categoryAxis.tooltip.label.rotation = 270;
// categoryAxis.tooltip.label.horizontalCenter = "right";
// categoryAxis.tooltip.label.verticalCenter = "middle";

// let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
// valueAxis.title.text = "Countries";
// valueAxis.title.fontWeight = "bold";

// // Create series
// var series = chart.series.push(new am4charts.ColumnSeries3D());
// series.dataFields.valueY = "visits";
// series.dataFields.categoryX = "country";
// series.name = "Visits";
// series.tooltipText = "{categoryX}: [bold]{valueY}[/]";
// series.columns.template.fillOpacity = .8;

// var columnTemplate = series.columns.template;
// columnTemplate.strokeWidth = 2;
// columnTemplate.strokeOpacity = 1;
// columnTemplate.stroke = am4core.color("#FFFFFF");

// columnTemplate.adapter.add("fill", function(fill, target) {
//   return chart.colors.getIndex(target.dataItem.index);
// })

// columnTemplate.adapter.add("stroke", function(stroke, target) {
//   return chart.colors.getIndex(target.dataItem.index);
// })

// chart.cursor = new am4charts.XYCursor();
// chart.cursor.lineX.strokeOpacity = 0;
// chart.cursor.lineY.strokeOpacity = 0;

// }); // end am4core.ready()
// </script>

// <!-- HTML -->
// <div id="chartdiv"></div>

function makeplot() {
  Plotly.d3.csv("https://raw.githubusercontent.com/rschroer/ds_final_project/master/data/features_and_null_percents.csv", function(data){ processData(data) } );

};
 
function processData(allRows) {

 console.log(allRows);
//  var x = [], y = [], standard_deviation = [];
 var x = [], y = [];

 for (var i=0; i<allRows.length; i++) {
   row = allRows[i];
   x.push( row['Feature'] );
   y.push( row['Percentage_of_missing_values'] );
 }
//  console.log( 'X',x, 'Y',y, 'SD',standard_deviation );
//  makePlotly( x, y, standard_deviation );
 console.log( 'X',x, 'Y',y);
 makePlotly( x, y);
}

// function makePlotly( x, y, standard_deviation ){
function makePlotly( x, y){
 var plotDiv = document.getElementById("plot");
 var traces = [{
   x: x, 
   y: y
 }];

 Plotly.newPlot('myDiv', traces, 
   {title: '% Null Values for Each Column'});
};
 makeplot();