angular.module("app").controller("signupcontroller", function ($location) {
    var vm = this;
    vm.performsignup = performsignup;
    function performsignup()
    {
        $location.path('/default');
    }
});
