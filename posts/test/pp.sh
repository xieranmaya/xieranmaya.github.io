ls -t *.md | while read filename; do
	echo "filename is === $filename"
	echo $filename | xargs -L 1 bash -c 'md2json.sh $0'
done
wait
echo "all done!"
