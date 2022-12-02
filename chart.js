async function start() {
  var parent = document.getElementById("content");
  parent.innerHTML = '<div id="chart_div" style="width: 761px; height: 300px;"></div>'
// Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Month');
        data.addColumn('number', 'Percentage');
        data.addRows([
          ['2016', 2.1],
          ['2017', 2.1],
          ['2018', 1.9],
          ['2019', 2.3],
          ['2020', 1.4],
          ['2021',7],
          ['2022',7.7]
        ]);

        // Set chart options
        var options = {'title':'USA Inflation Yearly',
                       'width':750,
                       'height':300,
                       backgroundColor:'#b4ebff',
                      legend:{position: 'none'},
                       
      };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
}
start();