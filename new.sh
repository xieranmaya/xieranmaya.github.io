editor=$(<editor.txt)
title=$1
if [[ $1 == "" ]]; then
	printf "Please input you post title: "
	read title
	title=$(echo $title | tr ' ' '-')
	echo "title is: $title"
fi
fileName=posts/test/$title.md
echo "file name is: $fileName"
echo "title: $title"|tr '-' ' ' > $fileName
date=$(date "+%Y-%m-%d %H:%M:%S")
echo "date: $date" >> $fileName
echo "categories:" >> $fileName
echo "- category" >> $fileName
echo "tags:" >> $fileName
echo "- tag1" >> $fileName
echo "- tag2" >> $fileName
echo "---" >> $fileName
printf "A quick brown fox jumps over the lazy dog.\n\n" >> $fileName
printf "A quick brown fox jumps over the lazy dog.\n\n" >> $fileName
printf "A quick brown fox jumps over the lazy dog.\n" >> $fileName

"$editor" $fileName
