export async function getMovieByTitle(title) {
    const response = await fetch(`https://www.omdbapi.com/?apikey=17669979&t=${title}&plot=full`)
return await response.json()
    
}