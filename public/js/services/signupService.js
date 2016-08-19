(function(){
  angular
    .module("homeApp")
    .service('SignupService', SignupService);

    SignupService.$inject = ['$http', 'LoginService']

    function SignupService($http, LoginService) {
      return {
        createUser: createUser
      };

      function createUser(username, password, zip){
        $http({
          method:'POST',
          params:{
            username: username,
            password:password,
            zip: zip
          },
          // url: "http://localhost:3000/auth/signup"
          url: "https://smart-home-api-server.herokuapp.com/auth/signup"
        }).then(function(response){
          LoginService.loginUser(username, password, zip);
        }, function(err){
          return err;
        });
      }
    }
})();
