(function() {
  angular
    .module("homeApp")
    .service('LoginService', LoginService);

    LoginService.$inject = ['$http', '$location']

    function LoginService($http, $location) {
      var user = {};

      return{
        loginUser: loginUser,
        getToken: getToken,
        getUserId: getUserId,
        getUser: getUser,
        getZip: getZip
      };
      //function to get JWT token
      function getToken(){
        return user.token;
      }

      function setUserData(data){
        user = data;
      }

      function getUserId() {
        return user.userId;
      }

      function getUser() {
        return user.username;
      }

      function getZip() {
        return user.zip;
      }


      function loginUser(username, password, zip){
        $http({
          method: 'POST',
          params:{
            username: username,
            password: password,
            zip: zip
          },
          // url: 'http://localhost:3000/auth/login'
          url: "https://smart-home-api-server.herokuapp.com/auth/login"

        })
        .then(function(response){
          setUserData(response.data);
          $location.path('/dashboard')
        }, function(err){
          return err;
        });
      }
    }
})();
