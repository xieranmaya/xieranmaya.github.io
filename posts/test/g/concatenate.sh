echo concatenating...
fileNum=$(ls *.md.json | wc -l)
echo "[" > all.json
ls -tr *.md.json | while read fileName; do
	fileContent=$(<$fileName)
	fileNum=$(($fileNum - 1))
	if [[ $fileNum != 0 ]]; then
		echo "$fileContent," >> all.json
		#echo "," >> all.json
	else
		echo "$fileContent" >> all.json
	fi
done
echo "]" >> all.json
