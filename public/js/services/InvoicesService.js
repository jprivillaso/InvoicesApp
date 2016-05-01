app.service("InvoicesService", ['$http', function($http){

    var getInvoices = function() {

      return $http.get("/api/invoices")
            .success(function(data){
                return data;
            })
            .error(function(err){
                return err;
            });

    }

    var getInvoice = function(id) {

      return $http.get("/api/invoices/" + id)
            .success(function(data){
                return data;
            })
            .error(function(err){
                return err;
            });

    }

    var saveInvoice = function(invoice) {

        return $http.post("/api/invoices", invoice)
            .success(function(data){
                return data;
            })
            .error(function(err){
                return err;
            });

    }

    var updateInvoice = function(invoice) {

        return $http.put("/api/invoices/" + invoice.id, invoice)
            .success(function(data){
                return data;
            })
            .error(function(err){
                return err;
            });

    }

    var deleteInvoice = function() {

        return $http.delete("/api/invoices/" + id)
            .success(function(data){
                return data;
            })
            .error(function(err){
                return err;
            });

    }

    return {
      getInvoice : getInvoice,
      getInvoices: getInvoices,
      saveInvoice: saveInvoice,
      updateInvoice: updateInvoice,
      deleteInvoice: deleteInvoice
    }

}]);