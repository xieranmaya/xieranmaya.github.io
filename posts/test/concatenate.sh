echo concatenating...
fileNum=$(ls g/*.md.json | wc -l)
echo "[" > g/all.json
ls -t *.md | while read fileName; do
	#fileName=$(echo $fileName | cut -c4-999)
	fileName=g/$fileName.json
	fileContent=$(<$fileName)
	fileNum=$(($fileNum - 1))
	if [[ $fileNum != 0 ]]; then
		echo "$fileContent," >> g/all.json
	else
		echo "$fileContent" >> g/all.json
	fi
done
echo "]" >> g/all.json
