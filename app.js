var sampleApp = angular.module('sampleApp', []);

sampleApp.config(['$routeProvider', '$locationProvider',
	function ($routeProvider, $locationProvider) {
		$routeProvider.
		when('/', {
			templateUrl: 'templates/list.html',
			controller: 'List'
		}).
		when('/post/:postname',{
			templateUrl: 'templates/post.html',
			controller: 'Post'
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
sampleApp.controller('AddOrderController', function ($scope) {
	$scope.message = 'This is Add new order screen';
}).controller('ShowOrdersController', function ($scope) {
	$scope.message = 'This is Show orders screen';
}).controller('otherUrl', function ($scope, $http) {
	$scope.message = 'You are in here: ' + location.pathname;
	$http.get(location.pathname + ".txt").success(function (data) {
		$scope.blogContent = data;
	});
}).controller('List', function ($scope, $http) {
	$http.get('/filelist.txt').success(function (data) {
		posts = data.split('\n');
		posts.pop();
		$scope.posts = posts;
	});
}).controller('Post', function ($scope, $http, $routeParams){
	$scope.postName = $routeParams.postname;
	$http.get('/posts/'+$routeParams.postname).success(function(post){
		$scope.postContent = post;
	});
});
