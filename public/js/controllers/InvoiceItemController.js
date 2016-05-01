var app = angular.module("myApp");
app.controller("InvoiceItemController", InvoiceItemController);

InvoiceItemController.$inject = ["$scope", "$controller"];

function InvoiceItemController($scope, $controller) {

  $scope.products = [];
  $scope.customers = [];

}