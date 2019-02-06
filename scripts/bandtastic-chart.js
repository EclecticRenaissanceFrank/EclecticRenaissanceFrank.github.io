ctx = document.getElementById('bandastic-mvp-graph').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'bar',

  // The data for our dataset
  data: {
      labels: ["1 (Most Used/Important)", "2", "3", "4", "5", "6 (Least Used/Important)"],
      datasets: [{
          label: "Purchase New Gear",
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [0, 10, 5, 2, 20, 30, 45],
      }]
      
  },

  

  // Configuration options go here
  options: {
    scales: {
        yAxes: [{
            id: 'left-y-axis',
            type: 'linear',
            position: 'left'
        }, {
            id: 'right-y-axis',
            type: 'linear',
            position: 'right'
        }]
    }

  }
});