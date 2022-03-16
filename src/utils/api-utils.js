export async function getMovieByTitle(title) {
    const response = await fetch(`http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_APIKEY}&t=${title}&plot=full`)
return await response.json()
    
}
17669979