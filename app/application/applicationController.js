controllers.controller('applicationController', function ($scope, $rootScope, $filter) {

  $('.datepicker').pickadate()
  $scope.date = $filter('date')(new Date(), "dd MMMM yyyy")
  console.log($scope.date)

  new Chart(document.getElementById("bar"), {
    type: 'bar',
    data: {
      labels: ["1900", "1950", "1999", "2050"],
      datasets: [
        {
          label: "OK",
          backgroundColor: "rgba(0, 126, 51, 0.5)",
          data: [15, 1, 6, 0]
        },{
          label: "Warning",
          backgroundColor: "rgba(255, 136, 0, 0.5)",
          data: [18, 3, 4, 0]
        },
        {
          label: "Error",
          backgroundColor: "rgba(204, 0, 0, 0.5)",
          data: [21, 0, 0, 1]
        },
        {
          label: "Fatal",
          backgroundColor: "rgba(153, 51, 204, 0.5)",
          data: [6, 1, 1, 0]
        }
      ]
    },
    options: {
      aspectRatio: 7
    }
  });
})