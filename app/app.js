var simpleApp = angular.module('SimpleApp',["ngRoute","Controllers"])

var controllers = angular.module('Controllers', [])

simpleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: 'app/dashboard/dashboard.html',
      controller: 'dashboardController'
    }).
    when('/application', {
      templateUrl: 'app/application/application.html',
      controller: 'applicationController'
    }).
    otherwise({
      redirectTo: '/'
    })
}])