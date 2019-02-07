ctx = document.getElementById('vocoach-learning-graph').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'bar',

  // The data for our dataset
  data: {
      labels: ["Visual", "Aural", "Verbal", "Physical", "Logical", "Social", "Solitary"],
      datasets: [{
          label: "What type of learning style(s) do you prefer?",
          backgroundColor: ['#2E7D32', '#ccc', '#ccc', '#1B5E20', '#1B5E20', '#ccc'],

          data: [12, 5, 5, 9, 7, 5, 4],
      }]
      
  },

  

  // Configuration options go here
  options: { }
});