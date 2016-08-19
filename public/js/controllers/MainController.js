(function(){
  angular.module("homeApp")
    .controller("MainController", MainController)
    MainController.$inject = ["$scope", "LoginService", "SignupService"];

    function MainController($scope, LoginService, SignupService) {

      $scope.addUser = function(username, password, zip){
        SignupService.createUser(username, password, zip)
      }

      $scope.loginUser = function(username, password){
        LoginService.loginUser(username, password)
      }
    }
})();
