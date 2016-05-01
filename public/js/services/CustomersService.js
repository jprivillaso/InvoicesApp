app.service("CustomersService", ['$http', function($http){

    var getCustomers = function() {

      return $http.get("/api/customers")
            .success(function(data){
                return data;
            })
            .error(function(err){
                return err;
            });

    }

    var getCustomer = function(id) {

      return $http.get("/api/customers/" + id)
            .success(function(data){
                return data;
            })
            .error(function(err){
                return err;
            });

    }

    var saveCustomer = function(customer) {

        return $http.post("/api/customers", customer)
            .success(function(data){
                return data;
            })
            .error(function(err){
                return err;
            });

    }

    var updateCustomer = function(customer) {

        return $http.put("/api/customers/" + customer.id, customer)
            .success(function(data){
                return data;
            })
            .error(function(err){
                return err;
            });

    }

    var deleteCustomer = function() {

        return $http.delete("/api/customers/" + id)
            .success(function(data){
                return data;
            })
            .error(function(err){
                return err;
            });

    }

    return {
      getCustomer : getCustomer,
      getCustomers: getCustomers,
      saveCustomer: saveCustomer,
      updateCustomer: updateCustomer,
      deleteCustomer: deleteCustomer
    }

}]);