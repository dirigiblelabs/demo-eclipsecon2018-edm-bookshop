angular.module('index', []);
angular.module('index').controller('IndexController', function ($scope, $http) {

	$scope.data = {  
	   'WelcomeMessage': 'Welcome to Bookshop',
	   'PromotionsHeading': 'Bestsellers',
	   'PromotionsPerLine': 6,
	   'BrandName': 'Bookshop',
	   'ClearanceHeading': 'Clearance Corner',
	   'ClearancePerLine': 6
	};

	var menu = '../../js/bookshop/api/Menu.js';
	function loadMenu() {
		$http.get(menu)
		.success(function(data) {
			$scope.menu = data;
		});
	}
	loadMenu();

	
	$scope.slides = [{
		"Image":"../bookshop-data/img/daria-nepriakhina-474558-unsplash.jpg",
		"Caption":"Great Collection"
	}, {
		"Image":"../bookshop-data/img/filios-sazeides-540205-unsplash.jpg",
		"Caption":"Low Prices"
	}, {
		"Image":"../bookshop-data/img/thomas-william-302052-unsplash.jpg",
		"Caption":"Lots of Fun"
	}];

	$scope.features = [{
		"Name":"Finding a book",
		"Description":"It can be tough to remember the title and author of a book you read a long time ago",
		"Image":"search",
		"Color":"blue"
	}, {
		"Name":"Read online",
		"Description":"You can read most ebooks online, instantly, through your web browser",
		"Image":"tablet",
		"Color":"green"
	}, {
		"Name":"Books of the month",
		"Description":"We searched through hundreds of new releases to find the five best books coming out this month",
		"Image":"heart-o",
		"Color":"red"
	}];

	$scope.promotions = [{
		"Image":"../bookshop-data/img/books/The-Handmaids-Tale-novel-by-Margaret-Atwood-220x332.jpg",
		"Link":"#"
	}, {
		"Image":"../bookshop-data/img/books/In-Farleigh-Field-Rhys-Bowen-220x330.jpg",
		"Link":"#"
	}, {
		"Image":"../bookshop-data/img/books/Beneath-a-Scarlet-Sky-Mark-Sullivan-220x330.jpg",
		"Link":"#"
	}, {
		"Image":"../bookshop-data/img/books/Beartown-Fredrik-Backman-220x330.jpg",
		"Link":"#"
	}, {
		"Image":"../bookshop-data/img/books/Hillbilly-Elegy-J.-D.-Vance-220x332.jpg",
		"Link":"#"
	}, {
		"Image":"../bookshop-data/img/books/Everything-We-Keep-Kerry-Lonsdale-220x330.jpg",
		"Link":"#"
	}];

	$scope.clearance = [{
		"Image":"../bookshop-data/img/books/Killers-of-the-Flower-Moon-David-Grann-220x334.jpg",
		"Link":"#"
	}, {
		"Image":"../bookshop-data/img/books/Priestdaddy-Patricia-Lockwood-220x332.jpg",
		"Link":"#"
	}, {
		"Image":"../bookshop-data/img/books/Dead-Certain-Adam-Mitzner-220x330.jpg",
		"Link":"#"
	}, {
		"Image":"../bookshop-data/img/books/Exit-West-Mohsin-Hamid-220x331.jpg",
		"Link":"#"
	}, {
		"Image":"../bookshop-data/img/books/Milk-and-Honey-Rupi-Kaur-220x341.jpg",
		"Link":"#"
	}, {
		"Image":"../bookshop-data/img/books/The-Ministry-of-Utmost-Happiness-by-Arundhati-Roy-220x316.jpg",
		"Link":"#"
	}];

});