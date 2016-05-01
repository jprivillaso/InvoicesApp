app.service("ProductsService", ['$http', function($http){

    var getProducts = function() {

      return $http.get("/api/products")
            .success(function(data){
                return data;
            })
            .error(function(err){
                return err;
            });

    };

    var getProduct = function(id) {

      return $http.get("/api/products/" + id)
            .success(function(data){
                return data;
            })
            .error(function(err){
                return err;
            });

    };

    var saveProduct = function(product) {

        return $http.post("/api/products", product)
            .success(function(data){
                return data;
            })
            .error(function(err){
                return err;
            });

    };

    var updateProduct = function(product) {

        return $http.put("/api/products/" + product.id, product)
            .success(function(data){
                return data;
            })
            .error(function(err){
                return err;
            });

    };

    var deleteProduct = function() {

        return $http.delete("/api/products/" + id)
            .success(function(data){
                return data;
            })
            .error(function(err){
                return err;
            });

    };

    return {
      getProduct : getProduct,
      getProducts: getProducts,
      saveProduct: saveProduct,
      updateProduct: updateProduct,
      deleteProduct: deleteProduct
    }

}]);