angular.module('marketplace', []);
angular.module('marketplace').controller('MarketplaceController', function ($scope, $http, $location) {
	
	var searchParams = new URLSearchParams(window.location.search);
	$scope.category = searchParams.get('category');
	if (!$scope.category) {
		$scope.category = 1;
	}
	
	$scope.slides = [{
		"Image": "../vendorx-ecommerce-bookshop/images/daria-nepriakhina-474558-unsplash.jpg",
	}, {
		"Image": "../vendorx-ecommerce-bookshop/images/filios-sazeides-540205-unsplash.jpg",
	}, {
		"Image": "../vendorx-ecommerce-bookshop/images/thomas-william-302052-unsplash.jpg",
	}];
	
	var categories = '../../js/bookshop/api/Products/Categories.js';
	function loadCategories() {
		$http.get(categories)
		.success(function(data) {
			$scope.categories = data;
		});
	}
	loadCategories();
	
	var products = '../../js/bookshop/api/Products/Books.js?Category=' + $scope.category;
	function loadProducts() {
		$http.get(products)
		.success(function(data) {
			$scope.products = data;
			$scope.products.forEach(function(product){
				product.Link = 'product.html?category=' + $scope.category + '&product=' + product.Id;
			});
		});
	}
	loadProducts();
	
});