app.service("InvoiceItemService", ['$http', function($http){

    var getInvoiceItems = function(invoiceId) {

      return $http.get("/api/invoices/"+ invoiceId +"/items")
            .success(function(data){
                return data;
            })
            .error(function(err){
                return err;
            });

    }

    var getInvoiceItem = function(itemId, invoiceId) {

      return $http.get("/api/invoices/"+ invoiceId +"/items/" + itemId)
            .success(function(data){
                return data;
            })
            .error(function(err){
                return err;
            });

    }

    var saveInvoiceItem = function(invoiceId, item) {

      return $http.post("/api/invoices/"+ invoiceId +"/items", item)
            .success(function(data){
                return data;
            })
            .error(function(err){
                return err;
            });

    }

    return {
      getInvoiceItems : getInvoiceItems,
      getInvoiceItem  : getInvoiceItem,
      saveInvoiceItem : saveInvoiceItem
    }

}]);