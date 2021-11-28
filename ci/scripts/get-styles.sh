get_style () {
    echo "Installing $2 from $1 ..."
    curl -s https://api.github.com/repos/$1/$2/releases/latest \
    | grep "browser_download_url.*zip" \
    | cut -d : -f 2,3 \
    | tr -d \" \
    | wget -qi -
}

styles=( Microsoft )
for i in "${styles[@]}"
do
    get_style "errata-ai" $i
done
