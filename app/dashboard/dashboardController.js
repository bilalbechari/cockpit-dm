controllers.controller('dashboardController', function($scope, $rootScope) {
  new Chart(document.getElementById("horizontalBar"), {
    type: "horizontalBar",
    data: {
      "labels": ["OK", "Warning", "Erreur", "Fatal"],
      "datasets": [{
        "data": [15, 4, 1, 1,],
        "fill": false,
        "backgroundColor": ["rgba(0, 126, 51, 0.5)", "rgba(255, 136, 0, 0.5)",
          "rgba(204, 0, 0, 0.5)", "rgba(153, 51, 204, 0.5)"
        ],
        "borderColor": ["rgba(0, 126, 51, 1)", "rgba(255, 136, 0, 1)",
          "rgba(204, 0, 0, 1)", "rgba(153, 51, 204, 1)"
        ],
        "borderWidth": 1
      }]
    },
    options: {
      legend: {
        display: false,
        labels: {
          fontColor: 'rgb(255, 99, 132)'
        }
      }
    }
  })
  
  new Chart(document.getElementById("pieChart"), {
    type: "pie",
    data: {
      "labels": ["OK", "Warning", "Erreur", "Fatal"],
      "datasets": [{
        "data": [15, 4, 1, 1,],
        "fill": false,
        "backgroundColor": ["rgba(0, 126, 51, 0.5)", "rgba(255, 136, 0, 0.5)",
          "rgba(204, 0, 0, 0.5)", "rgba(153, 51, 204, 0.5)"
        ],
        "borderColor": ["rgba(0, 126, 51, 1)", "rgba(255, 136, 0, 1)",
          "rgba(204, 0, 0, 1)", "rgba(153, 51, 204, 1)"
        ],
        "borderWidth": 1
      }]
    },
    options: {
      legend: {
        display: false,
        position: 'left'
      }
    }
  })
  
  new Chart(document.getElementById("pieChart2"), {
    type: "pie",
    data: {
      "labels": ["OK", "Warning", "Erreur", "Fatal"],
      "datasets": [{
        "data": [15, 4, 1, 1,],
        "fill": false,
        "backgroundColor": ["rgba(0, 126, 51, 0.5)", "rgba(255, 136, 0, 0.5)",
          "rgba(204, 0, 0, 0.5)", "rgba(153, 51, 204, 0.5)"
        ],
        "borderColor": ["rgba(0, 126, 51, 1)", "rgba(255, 136, 0, 1)",
          "rgba(204, 0, 0, 1)", "rgba(153, 51, 204, 1)"
        ],
        "borderWidth": 1
      }]
    },
    options: {
      legend: {
        display: true,
        position: 'top'
      }
    }
  })
})