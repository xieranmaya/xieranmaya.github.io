//Define an angular module for our app
var sampleApp = angular.module('sampleApp', []);
//Define Routing for app
//Uri /AddNewOrder -> template add_order.html and Controller AddOrderController
//Uri /ShowOrders -> template show_orders.html and Controller AddOrderController
sampleApp.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {
		$routeProvider.
		when('/',{
			templateUrl: 'templates/list.html',
			controller:'List'
		}).
		when('/AddNewOrder', {
			templateUrl: 'templates/add_order.html',
			controller: 'AddOrderController'
		}).
		when('/ShowOrders', {
			templateUrl: 'templates/show_orders.html',
			controller: 'ShowOrdersController'
		}).
		otherwise({
			templateUrl: 'templates/otherUrl.html',
			controller: 'otherUrl'
		});


		$locationProvider.html5Mode(true);
	}
]);
sampleApp.controller('AddOrderController', function($scope) {
	$scope.message = 'This is Add new order screen';
});
sampleApp.controller('ShowOrdersController', function($scope) {
	$scope.message = 'This is Show orders screen';
});
sampleApp.controller('otherUrl', function($scope,$http) {
	$scope.message = 'You are in here: '+location.pathname;
	$http.get(location.pathname+".txt").success(function(data){
		$scope.blogContent = data;
	})
});
sampleApp.controller('List',function($scope,$http){
	$http.get('/posts.json').success(function(data){
		$scope.posts=data;
	});
});
