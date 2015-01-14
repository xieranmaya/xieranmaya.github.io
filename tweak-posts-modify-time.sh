for FILE in $(git ls-files posts)
do
    TIME=$(git log --pretty=format:%cd -n 1 --date=iso $FILE)
    #echo $TIME
    TIME=$(date --date="$TIME" "+%Y%m%d%H%M.%S")
    #echo $TIME
    #TIME=$(date -j -f '%Y-%m-%d %H:%M:%S %z' "$TIME" +%Y%m%d%H%M.%S)
    touch -m -t $TIME $FILE
done
