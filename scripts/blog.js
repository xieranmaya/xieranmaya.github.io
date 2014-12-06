var Blog = angular.module('Blog', ['ngRoute'])

.config(function ($routeProvider, $locationProvider){
	$locationProvider.html5Mode(true)
	$routeProvider.
		when('/', {// 主页，展示文章列表第一页
			templateUrl: 'templates/home.html',
			controller: 'PostList'
		}).
		when('/post/:file',{// 文章页面,首页
			templateUrl: 'templates/post.html',
			controller: 'Post',
		}).
		when('/category/:category',{ // 分类
			templateUrl: 'templates/post.html',
			controller: 'CategoryList'
		}).
		when('/tag/:tag',{// 标签
			templateUrl: 'templates/home.html',
			controller: 'TagList'
		}).
		otherwise({
			templateUrl: 'templates/404.html'
		})
})

.controller('PostList', function ($scope, BlogData) {
	BlogData.postList().then(function (posts){
		$scope.posts = posts
	})
})
.controller('TagList', function($scope, BlogData, $routeParams){
	BlogData.tagList($routeParams.tag).then(function(posts){
		$scope.posts = posts
	})
})
.controller('CategoryList', function($scope, BlogData, $routeParams){
	BlogData.tagList($routeParams.category).then(function(posts){
		$scope.posts = posts
	})
})
.controller('Post', function ($scope, BlogData, $routeParams){
	BlogData.getPost($routeParams.file).then(function(post){
		$scope.post = post
	})
})
.controller("Blog",function ($scope, BlogData){
	BlogData.meta().then(function (meta){
		$scope.meta = meta
	})
})

.factory('BlogData', function ($http, $q){
	// 带缓存功能的数据提供模块
	blogData = {}
	blogData.posts = {}
	return {
		meta:function(){
			return $q(function(resolve){
				if(blogData.meta){
					resolve(blogData.meta)
				}else{
					$http.get('generated/meta.json').success(function(meta){
						blogData.meta = meta
						resolve(meta)
					})
				}
			})
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
		tagList:function(tag){
			return $q(function(resolve){
				$http.get('posts/test/tag/tag-' + tag + '.json').success(function(postList){
					resolve(postList)
				})
			})
		},
		categoryList:function(category){
			return $q(function(resolve){
				$http.get('posts/test/category/category-' + category + '.json').success(function(postList){
					resolve(postList)
				})
			})
		},
		getPost:function(file){
			return $q(function(resolve){
				if(!blogData.posts[file]){
					$http.get('/posts/test/g/' + file + '.md.json').success(function(post){
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

.directive('disqus',function(){
	return {
		restrict:'A',
		link:function(scope, el, attrs){
			DISQUS.reset({reload:true})
		}
	}
})

.directive('duoshuo',function(){
	return {
		restrict:'A',
		link:function(scope, el, attrs){
			scope.$watch(function(){
				return el.attr('data-thread-key')
			},function(newVal){
				if(newVal){
					DUOSHUO.EmbedThread(el[0])
				}
			});
		}
	}
})
