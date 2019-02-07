ctx = document.getElementById('bandastic-mvp-graph').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'bar',

  // The data for our dataset
  data: {
      labels: ["Purchase New Gear", "Purchase Used Gear", "Sell Gear", "Rent Gear", "Repair Gear", "Take Music Lessons"],
      datasets: [{
          label: "Choose the most (1) to least (6) important to you. I want to...",
          backgroundColor: '#1863CD',
          borderWidth: 2,
          borderColor: '#4B9BFF',
          data: [12, 12, 16, 19, 17, 16],
      }]
      
  },

  

  // Configuration options go here
  options: { }
});