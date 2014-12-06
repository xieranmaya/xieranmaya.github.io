input=$1
file=${input/".txt"/""} # 文件名,不含ext
filenum=$(cat $input | wc -l) # 

echo "[" > tag/$file.json
cat $input | while read filename; do
	content=$(<$filename)
	filenum=$(($filenum-1))
	if [[ $filenum != 0 ]]; then
		echo "$content," >> tag/$file.json
	else
		echo "$content" >> tag/$file.json
	fi
	
done
echo "]" >> tag/$file.json
