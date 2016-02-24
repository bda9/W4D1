angular.module('miniRouting')
  .controller('productsCtrl', function($scope, $stateParams, productService) {
    
    var product = $stateParams.id;

    if (product === 'shoes') {
      $scope.productData = productService.shoeData;
    } else if (product === 'socks') {
      $scope.productData = productService.sockData;
    }
  });
