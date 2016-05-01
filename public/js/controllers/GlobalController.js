var app = angular.module("myApp");
app.controller("GlobalController", GlobalController);

GlobalController.$inject = ["$scope", "InvoicesService", "CustomersService", "ProductsService",
                            "InvoiceItemService"];

function GlobalController($scope, InvoicesService, CustomersService, ProductsService, InvoiceItemService) {

  $scope.invoices = [];
  $scope.products = [];
  $scope.total    = 0;
  $scope.discount = 0;
  $scope.customer = {};
  $scope.selectedProducts = [];

  var getTotal = function() {
    $scope.calculatedTotal = parseFloat($scope.total) - (parseFloat($scope.total) * parseFloat($scope.discount) / 100);
    return $scope.calculatedTotal;
  }

  $scope.calculatedTotal = getTotal();
  $scope.updateTotal = function() {
    getTotal();
  }

  $scope.createInvoice = function() {

    var invoice = {
      customer_id: $scope.customer.id,
      discount: $scope.discount,
      total: $scope.calculatedTotal,
      id: $scope.id
    };

    InvoicesService.saveInvoice().success(function(invoice){

      $scope.invoiceId = invoice.id;
      $scope.invoices.push(invoice);

    });

  }

  $scope.updateInvoice = function() {

    var customer  = $scope.customer || {};
    var invoiceId = $scope.invoiceId;

    var invoice = {
      customer_id: customer.id,
      discount: $scope.discount,
      total: $scope.calculatedTotal,
      id: invoiceId
    };

    InvoicesService.updateInvoice(invoice).success(function(data){

      if ($scope.selectedProducts && $scope.selectedProducts.length > 0) {

        for (var i = 0 ; i < $scope.selectedProducts.length; i++) {

          var actualProduct = $scope.selectedProducts[i];

          var eachItem = {
            product_id: actualProduct.id,
            quantity: 15
          };

          InvoiceItemService.saveInvoiceItem(invoiceId, eachItem).success(function(invoiceItem){
            console.log(invoiceItem);
          });

        };

      }

    });

  }

  $scope.loadInvoice = function(data) {

    var actualInvoice = this.invoice;

    InvoiceItemService.getInvoiceItems(actualInvoice.id).success(function(items){

      var selectedProducts = [];

      if (items.length == 0) {

        for (var i = 0; i < $scope.products.length; i++) {
          $scope.products[i].ticked = false;
        };

      } else {

        for (var i = 0; i < items.length; i++) {

          var product = _.find($scope.products, {id: items[i].id});
          product.ticked = true;

        };

      }

      $scope.discount        = actualInvoice.discount;
      $scope.calculatedTotal = actualInvoice.total;
      $scope.total           = actualInvoice.total / ((100 - actualInvoice.discount) / 100);
      $scope.invoiceId       = actualInvoice.id;

      CustomersService.getCustomer(actualInvoice.customer_id).success(function(actualCustomer){
        $scope.customer = _.find($scope.customers, {id: actualCustomer.id});
      });

    });

  }

  InvoicesService.getInvoices().success(function(invoicesList){
    $scope.invoices = invoicesList;
  });

  CustomersService.getCustomers().success(function(customerList){
    $scope.customers = customerList;
  });

  ProductsService.getProducts().success(function(productsList){
    $scope.products = productsList;
  });

}