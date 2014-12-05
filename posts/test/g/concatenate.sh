echo concatenating...
fileNum=$(ls *.md.json | wc -l)
echo "[" > all.json
ls -t ../*.md | while read fileName; do
	fileName=$(echo $fileName | cut -c4-999)
	fileName=$fileName.json
	fileContent=$(<$fileName)
	fileNum=$(($fileNum - 1))
	if [[ $fileNum != 0 ]]; then
		echo "$fileContent," >> all.json
	else
		echo "$fileContent" >> all.json
	fi
done
echo "]" >> all.json
