ls -tr *.md | while read FileName; do
	genFile="g/"$FileName".json"
	echo '{' > $genFile
	printf "\t\"file\":\"$FileName\"\n" >> $genFile
	cat "$FileName" | while read Line; do
		if [[ $PropOver == true ]]; then # 属性读取结束，即---前的内容ok了
			printf "]\n" >> $genFile
			break
		fi
		if [[ $Line == "title: "* ]]; then # title
			title=$(echo $Line | cut -c8-9999)
			printf ",\t\"title\":\"$title\"\n" >> $genFile
		fi
		if [[ $Line == "date: "* ]]; then # date
			date=$(echo $Line | cut -c7-9999)
			printf ",\t\"date\":\"$date\"\n" >> $genFile
		fi
		if [[ $Line == "categories:"* ]]; then # categories, only support one category
			printf ",\t\"categories\":" >> $genFile
			read Line
			cate=$(echo $Line | cut -c3-9999)
			printf "\"$cate\"\n" >> $genFile
		fi
		if [[ $Line == "tags:"* ]]; then # tags
			printf ",\t\"tags\":[" >> $genFile
			read Line
			tag=$(echo $Line | cut -c3-9999)
			printf "\"$tag\"" >> $genFile
			while read Line; do
				if [[ $Line == "---" ]]; then
					PropOver=true
					break
				fi
				if [[ $Line != "---" ]]; then
					printf "," >> $genFile
				fi
				tag=$(echo $Line | cut -c3-9999)
				printf "\"$tag\"" >> $genFile
			done
		fi
	done
	echo '}' >> $genFile
done
