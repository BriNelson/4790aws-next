export async function getMovieByTitle(title) {
    const response = await fetch(`https://api.watchmode.com/v1/autocomplete-search/?apiKey=PuUQcHotZnAXXYNAbwGxPfwLVS81iC7tfeV3s9Wv&search_value=${title}&search_type=1'`)
return await response.json()
    
}