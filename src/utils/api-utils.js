export async function getMovieByTitle(title) {
    const response = await fetch(`https://api.watchmode.com/v1/search/?apiKey=PuUQcHotZnAXXYNAbwGxPfwLVS81iC7tfeV3s9Wv&search_field=name&search_value=${title}`)
return await response.json()
    
}
