export default async function handler(req, res) {
    
    if (req.method === 'POST') {
        
        const title = req.body.title
        const response = await fetch(`https://api.watchmode.com/v1/autocomplete-search/?apiKey=${process.env.WATCHMODE_APIKEY}&search_value=${title}&search_type=1'`)
        const movieData = await response.json()
        
        res.status(200).json(movieData)
    
}

}