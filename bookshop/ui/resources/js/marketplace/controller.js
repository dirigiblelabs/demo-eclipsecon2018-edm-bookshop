angular.module('marketplace', []);
angular.module('marketplace').controller('MarketplaceController', function ($scope, $http, $location) {

	var menu = '../../../js/bookshop/api/Menu.js';
	function loadMenu() {
		$http.get(menu)
		.success(function(data) {
			$scope.menu = data;
		});
	}
	loadMenu();

	var searchParams = new URLSearchParams(window.location.search);
	$scope.category = searchParams.get('category');
	if (!$scope.category) {
		$scope.category = 1;
	}
	
	$scope.slides = [{
		"Image": "../../bookshop-data/img/daria-nepriakhina-474558-unsplash.jpg",
	}, {
		"Image": "../../bookshop-data/img/filios-sazeides-540205-unsplash.jpg",
	}, {
		"Image": "../../bookshop-data/img/thomas-william-302052-unsplash.jpg",
	}];
	
	var categories = '../../../js/bookshop-admin/api/Products/Categories.js';
	function loadCategories() {
		$http.get(categories)
		.success(function(data) {
			$scope.categories = data;
		});
	}
	loadCategories();
	
	var products = '../../../js/bookshop-admin/api/Products/Books.js?Category=' + $scope.category;
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
