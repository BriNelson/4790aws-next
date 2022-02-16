export async function getMovieByTitle(title) {
    const response = await fetch(`http://www.omdbapi.com/?apikey=17669979&t=${title}&plot=full`)
    const data = await response.json()
    console.log(data)
}