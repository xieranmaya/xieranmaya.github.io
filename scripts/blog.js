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
		if(input){
			return $sce.trustAsHtml(converter.makeHtml(input));
		}
		return;
	};
})

.config(function ($routeProvider, $locationProvider){
	$routeProvider.
		when('/', {// 主页，展示文章列表第一页
			templateUrl: 'templates/home.html',
			controller: 'PostList'
		}).
		when('/post/:file',{// 文章页面
			templateUrl: 'templates/post.html',
			controller: 'Post',
			resolve:{
			}
		}).
		when('/pages',{// 页面列表
			templateUrl: 'templates/pages.html'
		}).
		when('/page/:page',{// 页面
			templateUrl: 'templates/page.html',
			controller: 'Page'
		}).
		// when('/:page',{// 文章列表翻页
		// 	templateUrl: 'templates/post-list.html',
		// 	controller: 'PostList'
		// }).
		otherwise({
			templateUrl: 'templates/404.html'
		});

	$locationProvider.html5Mode(true);
})
// .controller('Home', function ($scope, $http){
// 	$http.get('generated/posts.json').success(function(posts){
// 		$scope.posts = posts;
// 	});
// })
.controller('PostList', function ($scope, $http, $routeParams) {
	$http.get('posts/test/g/all.json').success(function (posts) {
		//(posts = data.split('\n')).pop();
		$scope.posts = posts;
	});
})
.controller('Post', function ($scope, $http, $routeParams){
	$http.get('/posts/test/g/' + $routeParams.file + '.json').success(function(post){
		$scope.post = post;
	}).then(function(){
		$http.get('/posts/test/' + $routeParams.file).success(function (content){
			$scope.post.content = content.replace(/[\s\S]*\-\-\-/igm, '');
		});
	})
})
.controller("Blog",function ($scope, $http, $rootScope){
	$http.get("generated/meta.json").success(function (meta){
		$scope.meta = meta;
	});
})