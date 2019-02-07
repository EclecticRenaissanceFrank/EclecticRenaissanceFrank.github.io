ctx = document.getElementById('bandastic-mvp-graph').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'doughnut',

  // The data for our dataset
  data: {
      labels: ["Purchase New Gear", "Purchase Used Gear", "Sell Gear", "Rent Gear", "Repair Gear", "Take Music Lessons"],
      datasets: [{
          label: ". I want to...",
          backgroundColor: ['#1863CD', '#5E35B1', '#2E7D32', '#ccc', '#ccc', '#ccc'],
          borderWidth: 2,
          borderColor: '#ffffff',
          data: [12, 12, 16, 19, 17, 16],
      }]
      
  },

  

  // Configuration options go here
  options: { }
});