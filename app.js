angular.module("app", ['ngRoute']);
angular.module('app').config([
      '$routeProvider', '$locationProvider',
      function ($routeProvider, $locationProvider) {
          $locationProvider.html5Mode(true);
          $routeProvider.when("signin", { templateUrl: 'signin.html', controller: 'signincontroller', controllerAs: vm });
          $routeProvider.when("signup", { templateUrl: 'signup.html', controller: 'signupcontroller', controllerAs: vm });
          $routeProvider.when("/signin", { templateUrl: 'signin.html', controller: 'signincontroller', controllerAs: vm });
          $routeProvider.when("/signup", { templateUrl: 'signup.html', controller: 'signupcontroller', controllerAs: vm });
          $routeProvider.when("/signin/", { templateUrl: 'signin.html', controller: 'signincontroller', controllerAs: vm });
          $routeProvider.when("/signup/", { templateUrl: 'signup.html', controller: 'signupcontroller', controllerAs: vm });

          $routeProvider.otherwise({ redirectTo: '/' });
      }
]);
