var app = angular.module("myApp", ["ngRoute", "isteven-multi-select"]);

app.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        controller: 'GlobalController',
        templateUrl: '/templates/global.html'
    })
    .when('/products', {
        controller: 'ProductsController',
        templateUrl: '/templates/products.html'
    })
    .when('/customers', {
        controller: 'CustomersController',
        templateUrl: '/templates/customers.html'
    })
    .when('/invoices', {
        controller: 'InvoicesController',
        templateUrl: '/templates/invoices.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});
