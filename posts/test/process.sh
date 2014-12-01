ls -tr *.md | while read FileName; do
	echo processing $FileName...
	genFile="g/"$FileName".json"
	lineNum=0
	echo '{' > $genFile
	printf "\t\"file\":\"$FileName\"\n" >> $genFile
	cat "$FileName" | while read line; do
		lineNum=$(($lineNum+1))
		if [[ $PropOver == true ]]; then # 属性读取结束，即---前的内容ok了
			printf ",\t\"summary\":\"$line\\\\n" >> $genFile
			read line
			printf "$line\\\\n" >> $genFile
			read line
			printf "$line\\\\n" >> $genFile
			read line
			printf "$line\\\\n\"\n" >> $genFile
			break
		fi
		if [[ $lineNum == 1 && $line != "title: "* ]]; then # 第一行不以title开头,认为是没有元信息
			#echo =================$FileName:$line
			printf ",\t\"summary\":\"$line\\\\n" >> $genFile
			read line
			printf "$line\\\\n" >> $genFile
			read line
			printf "$line\\\\n" >> $genFile
			read line
			printf "$line\\\\n\"\n" >> $genFile
			break
		fi
		if [[ $line == "title: "* ]]; then # title
			title=$(echo $line | cut -c8-9999)
			printf ",\t\"title\":\"$title\"\n" >> $genFile
		fi
		if [[ $line == "date: "* ]]; then # date
			date=$(echo $line | cut -c7-9999)
			printf ",\t\"date\":\"$date\"\n" >> $genFile
		fi
		if [[ $line == "---" ]]; then
			PropOver=true
		fi
		if [[ $line == "categories:"* ]]; then # categories, only support one category
			printf ",\t\"categories\":" >> $genFile
			read line
			cate=$(echo $line | cut -c3-9999)
			printf "\"$cate\"\n" >> $genFile
		fi
		if [[ $line == "tags:"* ]]; then # tags
			printf ",\t\"tags\":[" >> $genFile
			read line
			tag=$(echo $line | cut -c3-9999)
			printf "\"$tag\"" >> $genFile
			while read line; do
				if [[ $line == "---" ]]; then
					PropOver=true
					printf "]\n" >> $genFile
					break
				fi
				if [[ $line != "---" ]]; then
					printf "," >> $genFile
				fi
				tag=$(echo $line | cut -c3-9999)
				printf "\"$tag\"" >> $genFile
			done
		fi
	done
	echo '}' >> $genFile
done
