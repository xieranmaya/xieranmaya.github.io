# xieranmaya.github.io

## Yet another dead simple static blog system.

All you need to do is clone this repo and start your blogging journey!

NO dependencies! NO generate! NO deploy!

You just write, and then commit, push, and your blog posts are on line then.

Dead simple, aha?

## Way to use it:

clone this repo:
```
git clone https://github.com/xieranmaya/xieranmaya.github.com
```

delete the .git directory:
```
rm .git
```

Start to blogging and push the repo to your github pages' repo:
```
git init
git remote add origin https://github.com/your-username/your-username.github.com
touch posts/hello-world.md
git commit -m "write a new post: Hello World!"
git push origin master
```

## How this works
This project take use of git hooks largely.

Every time when you commit, the pre-commit hook runs and generate the files your blog need and add it to the same commit.

The pre-commit hook generated these files:

* meta.json (containing the Blog name, how many pages your blog containers and other stuff, you can check it yourself)
```
{
	"site_name":"Your Blog Name",
	"site_sub_name":"A sentance to describe your blog",
	"post_page":5,
	"tags":{
		"love":5,
		"life":8,
		"tech":28,
		"jQuery":9,
		"js",34
	},
	"cates":{
		"diary":5,
		"test":8,
		"math":4,
		"computer":18
	}
}
```
* posts-page.json (contains your posts per page(default 10 per page))
```
[
	{
		"title":"Post Title",
		"date":"2014-05-20",
		"time":"13:14:20",
		"summary":"content before <!-- more -->, or the first 2 paragraph of the post content",
		"file":"post.md",
		"cate":"test",
		"tags":["love","life","time"]
	}
]
```
* tags-tagname-page.json
```
{
	{
		"title":"Post Title",
		"date":"2014-05-20",
		"time":"13:14:20",
		"summary":"content before <!-- more -->, or the first 2 paragraph of the post content",
		"file":"post.md",
		"cate":"test",
		"tags":["love","life","time"]
	}
}
```
* cates-catename-page.json
```
{
	{
		"title":"Post Title",
		"date":"2014-05-20",
		"time":"13:14:20",
		"summary":"content before <!-- more -->, or the first 2 paragraph of the post content",
		"file":"post.md",
		"cate":"test",
		"tags":["love","life","time"]
	}
}
```
* archives.json
```
???
```
