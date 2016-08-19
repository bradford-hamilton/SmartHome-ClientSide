angular
  .module("homeApp")
  .controller("DashboardController", DashboardController);

  DashboardController.$inject = ["$scope", "$firebaseObject", "LoginService", "$http"];

  function DashboardController ($scope, $firebaseObject, LoginService, $http){
    var firebaseTemperatureF = new Firebase(
      'https://smarthomedenver.firebaseio.com/temperatureF'
    );
    $scope.data = $firebaseObject(firebaseTemperatureF);

    var firebaseTemperatureC = new Firebase(
      'https://smarthomedenver.firebaseio.com/temperatureC'
    );
    $scope.data4 = $firebaseObject(firebaseTemperatureC);

    var firebaseDoors = new Firebase(
      'https://smarthomedenver.firebaseio.com/doors'
    );
    $scope.data2 = $firebaseObject(firebaseDoors);

    var firebaseLights = new Firebase(
      'https://smarthomedenver.firebaseio.com/lights'
    );
    $scope.data3 = $firebaseObject(firebaseLights);

    $scope.view = 'Dashboard Controller';

    $scope.user = LoginService.getUser();
    $scope.zip = LoginService.getZip();

    $http({
      method:'GET',
      params:{
        zip: LoginService.getZip()
      },
      headers: {
          Authorization: 'Bearer ' + LoginService.getToken()
      },
      // url: "http://localhost:3000/weather"
      url: "https://smart-home-api-server.herokuapp.com/weather"
    })
    .then(function(data) {
      $scope.weatherData = data.data.response[0].periods
      $scope.twoDayPrecip = $scope.weatherData[0].precipIN + $scope.weatherData[1].precipIN;

      function shouldWater(){
        if($scope.twoDayPrecip < 0.5){
          return true
        }else{
          return false
        }
      }
      $scope.water = shouldWater()
  })
}
