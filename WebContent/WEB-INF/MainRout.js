var app = angular.module("app", ["ngRoute"]);

app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {templateUrl: 'home.html'});
        $routeProvider.when('/login', {templateUrl: 'login.html', controller: 'loginCtrl'});
        $routeProvider.when('/register', {templateUrl: 'register.html', controller: 'registerCtrl'});
        $routeProvider.otherwise({redirectTo: '/home'});
    }]);