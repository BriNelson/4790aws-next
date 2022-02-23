import {getMovieByTitle} from "../../utils/api-utils"
import { Box } from '@mui/material'
const MovieList = (props) => {
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <p>movie data goes here</p>
{/* omdb key  */}
            </Box>
            </>
    )
}

export async function getStaticProps() {
    
    const fetchedMovies = await getMovieByTitle('Thor')

    return {
        props: { 
            movie: fetchedMovies
        }
    }
}

export default MovieList