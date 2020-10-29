import filterCategories from './filter-categories.js';
import filterList from './filter-list.js';
import sort from './Sort.js'



export default function parseList(sortCategoryState, pokeArray, searchBarState, sortOrderState) {

    let searchCategory = sortCategoryState;
    let filteredArray = filterCategories(searchCategory, pokeArray);
    const parsedList = filterList(filteredArray, searchBarState);
    const sortedList = sort(sortOrderState, parsedList)
    console.log(sortedList)
    return sortedList
}