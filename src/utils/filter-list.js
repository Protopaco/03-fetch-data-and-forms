
export default function filterList(filteredList, searchBarState) {

    const returnList = filteredList.filter((listItem) => {
        if (String(listItem.sortedCategory).includes(String(searchBarState)) || !searchBarState) {
            return true;
        }
        return false;
    })

    return returnList;
}