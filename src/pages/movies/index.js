import {getMovieByTitle} from "../../utils/api-utils"
import { Box } from '@mui/material'
const MovieList = (props) => {
    const {movie} = props
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <p>{movie.Title}</p>
                <p></p>

            </Box>
            </>
    )
}

export async function getStaticProps() {
    
    const fetchedMovies = await getMovieByTitle('Speed Racer')

    return {
        props: { 
            movie: fetchedMovies
        }
    }
}

export default MovieList