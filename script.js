function makeBarChart(sampledata) {
  var sampledataLabels = sampledata.map(function (d) {
    return d.Method;
  });
  var weeksData = sampledata.map(function (d) {
    return +d.Frequency;
  });

  var chart = new Chart('chart', {
    type: "bar",
    data: {
      labels: sampledataLabels,
      datasets: [{
        data: weeksData,
        backgroundColor: ["#3e95cd", "#8e5ea2"],
        barThickness: 15,
      }]
    },
    options: {
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          padding: 20,
          font: {size: 30},
          text: 'Basic Bar Chart',
        },
        legend: {display: false},
        tooltip: {
          usePointStyle: true,
          callbacks: {
            labelPointStyle: function (context) {
              return {
                pointStyle: 'square',
                rotation: 0
              };
            }
          }
        }
      },

    }
  });
}


d3.csv("meth_freq.csv")
  .then(makeBarChart);