var app = angular.module("myApp");
app.controller("ProductsController", ProductsController);

ProductsController.$inject = ["$scope", "ProductsService"];

function ProductsController($scope, ProductsService) {

  ProductsService.getProducts().success(function(productsList){
    $scope.products = productsList;
  });

}