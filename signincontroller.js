angular.module("app").controller("signincontroller", function () {
    var vm = this;
    vm.login=login;
    function login()
    {
        alert("login performed");
        //$routeProvider.redirectTo("/sigup/signup.index.html");
    }

});
    
