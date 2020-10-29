

export default function sort(sortDirection, array) {
    let sortedArray = [];


    if (sortDirection === '<') {
        sortedArray = array.sort((a, b) => {
            if (typeof array[0].sortedCategory === 'string') {
                return String(a.sortedCategory).localeCompare(String(b.sortedCategory));
            } else {
                return a.sortedCategory - b.sortedCategory;
            }
        })
    } else {
        sortedArray = array.sort((a, b) => {
            if (typeof array[0].sortedCategory === 'string') {
                return String(b.sortedCategory).localeCompare(String(a.sortedCategory));
            } else {
                return b.sortedCategory - a.sortedCategory;
            }
        }
        )
    }
    return sortedArray;
}