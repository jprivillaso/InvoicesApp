var app = angular.module("myApp");
app.controller("InvoicesController", InvoicesController);

InvoicesController.$inject = ["$scope", "InvoicesService"];

function InvoicesController($scope, InvoicesService) {

  $scope.invoices = [];

  InvoicesService.getInvoices().success(function(invoices){
    $scope.invoices = invoices;
  });

}