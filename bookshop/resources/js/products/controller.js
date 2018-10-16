angular.module('product', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);
angular.module('product').controller('ProductController', function ($scope, $http, $location) {
	
	var searchParams = new URLSearchParams(window.location.search);
	$scope.category = searchParams.get('category');
	if (!$scope.category) {
		$scope.category = 1;
	}
	$scope.id = searchParams.get('product');
	if (!$scope.id) {
		$scope.id = 1;
	}
	
	var categories = '../../js/bookshop/api/Products/Categories.js';
	function loadCategories() {
		$http.get(categories)
		.success(function(data) {
			$scope.categories = data;
		});
	}
	loadCategories();
	
	var product = '../../js/bookshop/api/Products/Books.js/' + $scope.id;
	function loadProduct() {
		$http.get(product)
		.success(function(data) {
			$scope.product = data;
		});
	}
	loadProduct();
	
	var products = '../../js/bookshop/api/Products/Books.js?Category=' + $scope.category;
	function loadProducts() {
		$http.get(products)
		.success(function(data) {
			$scope.products = data;
			$scope.products.forEach(function(product, index, object){
				if ($scope.product && product.Id === $scope.product.Id) {
    				object.splice(index, 1);
  				}
				product.Link = 'product.html?category=' + $scope.category + '&product=' + product.Id;
			});
		});
	}
	loadProducts();
	
    $scope.hoveringOver = function(value) {
        $scope.overStar = value;
        $scope.percent = 100 * (value / $scope.max);
    };
    
    $scope.openNewDialog = function() {
		$scope.actionType = 'new';
		$scope.entity = {};
		$('#reviewModal').modal('toggle');
	};
	
});