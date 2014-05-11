#!/bin/bash
# 作用
# 删除.git目录
# 拉取用户的gh-pages的repo但不checkout出来:
# cd ..
# git clone -n repo-address
# 把当前目录的所有文件提交
# 移动hooks里的文件到.git/hooks
# push


rm -rf .git
git init
cp hooks/* .git/hooks # copy hooks to .git/hooks directory
git remote add origin https://github.com/${1}/${1}.github.com
git push --set-upstream origin master
