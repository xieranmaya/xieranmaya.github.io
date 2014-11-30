fileNum=$(ls *.md.json | wc -l)
printf "[" > all.json
ls -tr *.md.json | while read FileName; do
	FileContent=$(<$FileName)
	fileNum=$(($fileNum - 1))
	if [[ $fileNum != 0 ]]; then
		printf "$FileContent," >> all.json
		#echo "," >> all.json
	else
		printf "$FileContent" >> all.json
	fi
done
echo "]" >> all.json
