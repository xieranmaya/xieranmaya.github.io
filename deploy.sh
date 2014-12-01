echo deploying...

cd posts
cd test
process.sh

cd g
concatenate.sh

cd ..
cd ..
cd ..

git add .
git commit -m "add deploy scripts"
