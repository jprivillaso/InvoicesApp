var app = angular.module("myApp");
app.controller("CustomersController", CustomersController);

CustomersController.$inject = ["$scope", "CustomersService"];

function CustomersController($scope, CustomersService) {

  $scope.customers = [];

  CustomersService.getCustomers().success(function(customerList){
    $scope.customers = customerList;
  });

}