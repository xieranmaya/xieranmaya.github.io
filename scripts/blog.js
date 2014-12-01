var Blog = angular.module('Blog', ['ngRoute'])

.directive('markdown', function () {
    var converter = new Showdown.converter()
    return {
        restrict: 'EA',
        priority: 10,
        link: function (scope, element, attrs) {
            var htmlText = converter.makeHtml(element.text())
            console.log(htmlText)
            element.html(htmlText)
        }
    }
})
.filter('markdown',function ($sce){
	var converter = new Showdown.converter()
	return function (input){
		if(input){
			return $sce.trustAsHtml(converter.makeHtml(input))
		}
		return
	}
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
		})

	$locationProvider.html5Mode(true)
})
// .controller('Home', function ($scope, $http){
// 	$http.get('generated/posts.json').success(function(posts){
// 		$scope.posts = posts
// 	})
// })
.controller('PostList', function ($scope, BlogData, $routeParams) {
	BlogData.postList().then(function (posts){
		//(posts = data.split('\n')).pop()
		$scope.posts = posts
	})
})
.controller('Post', function ($scope, BlogData, $routeParams){
	BlogData.getPost($routeParams.file).then(function(post){
		$scope.post = post
	})
	// $http.get('/posts/test/g/' + $routeParams.file + '.md.json').success(function(post){
	// 	$scope.post = post
	// }).then(function(){
	// 	$http.get('/posts/test/' + $routeParams.file + '.md').success(function (content){
	// 		$scope.post.content = content.replace(/[\s\S]*\-\-\-/igm, '')
	// 	})
	// })
})
.controller("Blog",function ($scope, BlogData, $rootScope){
	BlogData.meta().success(function (meta){
		$scope.meta = meta
	})
})
.factory('BlogData', function ($http, $q){
	blogData = {}
	blogData.posts = {}
	return {
		meta:function(){
			if(blogData.meta){
				return blogData.meta
			}
			return $http.get('generated/meta.json')
		},
		postList:function(){
			return $q(function(resolve){
				if(blogData.postList){
					resolve(blogData.postList)
				}else{
					$http.get('posts/test/g/all.json').success(function(postList){
						blogData.postList = postList
						resolve(postList)
						postList.forEach(function(post){
							blogData.posts[post.file] = post
						})
					})
				}
			})
		},
		getPost:function(file){
			return $q(function(resolve){
				if(!blogData.posts[file]){
					$http.get('/posts/test/g/'+file+'.md.json').success(function(post){
						blogData.posts[file] = post
					}).then(function(){
						$http.get('/posts/test/' + file + '.md').success(function (content){
							blogData.posts[file].content = content.replace(/[\s\S]*\-\-\-/igm, '')
							resolve(blogData.posts[file])
						})
					})
				}else if(!blogData.posts[file].content){
					$http.get('/posts/test/' + file + '.md').success(function (content){
						blogData.posts[file].content = content.replace(/[\s\S]*\-\-\-/igm, '')
						resolve(blogData.posts[file])
					})
				}else{
					resolve(blogData.posts[file])
				}
			})
		}
	}
})