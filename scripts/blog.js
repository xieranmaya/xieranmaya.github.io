var Blog = angular.module('Blog', ['ngRoute'])

.directive('markdown', function () {
    var converter = new Showdown.converter();
    return {
        restrict: 'EA',
        priority: 10,
        link: function (scope, element, attrs) {
            var htmlText = converter.makeHtml(element.text());
            console.log(htmlText);
            element.html(htmlText);
        }
    };
})
.filter('markdown',function ($sce){
	var converter = new Showdown.converter();
	return function (input){
		console.log(input);
		return $sce.trustAsHtml(converter.makeHtml(input));
	};
})

.config(function ($routeProvider, $locationProvider){
	$routeProvider.
		when('/', {// 主页，展示文章列表第一页
			templateUrl: 'templates/post-list.html',
			controller: 'PostList'
		}).
		when('/pages',{// 页面列表
			templateUrl: 'templates/pages.html'
		}).
		when('/page/:page',{// 页面
			templateUrl: 'templates/page.html',
			controller: 'Page'
		}).
		when('/:page',{// 文章列表翻页
			templateUrl: 'templates/post-list.html',
			controller: 'PostList'
		}).
		when('/post/:post',{// 文章页面
			templateUrl: 'templates/post.html',
			controller: 'Post'
		}).
		otherwise({
			templateUrl: 'templates/404.html'
		});

	$locationProvider.html5Mode(true);
})

.controller('PostList', function ($scope, $http, $routeParams) {
	$http.get('/post-list.txt').success(function (data) {
		(posts = data.split('\n')).pop();
		$scope.posts = posts;
	});
})
.controller('Post', function ($scope, $http, $routeParams){
	$scope.post = {};
	$scope.post.title = $routeParams.post;
	$http.get('/posts/'+$routeParams.post).success(function (post){
		//console.log(post);
		$scope.post.content = post;
	});
});
