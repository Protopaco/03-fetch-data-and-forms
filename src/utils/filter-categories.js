
export default function filterCategories(category, pokeArray) {
    if (!category) { category = 'type_1'; }
    return pokeArray.map((pokeObject) => {
        return {
            pokemon: pokeObject.pokemon,
            color_1: pokeObject.color_1,
            sortedCategory: pokeObject[category],
            url_image: pokeObject.url_image,
            label: category,
        }
    })
}