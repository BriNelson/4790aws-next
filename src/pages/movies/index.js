import Amplify, { DataStore } from "aws-amplify"
import useSWR from "swr"
import {moviesDB} from "../../models"
import config from "../../aws-exports"
import { getMovieByTitle } from "../../utils/api-utils";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";

Amplify.configure(config)
const MovieList = () => {
  const [movieList, setMovieList] = React.useState()
  
  const handleDelete = async (movie) => {
    try {
      const movieToDelete = await DataStore.query(moviesDB, movie.id)
    
      await DataStore.delete(movieToDelete)
    } catch (err) {
      console.log(err)
    }
  }

  const fetcher = async () => {
    try {
      let tempList = await DataStore.query(moviesDB)
      setMovieList(tempList)
    } catch (err){
      console.log(err)
    }
    return movieList
}

  const {data, error} = useSWR('/movies', fetcher)
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Card sx={{ maxWidth: 300 }}>
                  <CardMedia component="img" title={movie.Title} image={movie.Poster} />
                  <Box>
          <CardContent>
            <Typography variant="h5" color="initial">
              {movie.Title}
            </Typography>
            <Typography variant="subtitle1" color="initial">
              {movie.Rated}
            </Typography>
            <Typography variant="subtitle2" color="initial">
              {movie.Director}
            </Typography>

            <Typography variant="body1" color="initial">
              {movie.Plot}
            </Typography>
                      </CardContent>
                      </Box>
        </Card>
      </Box>
    </>
  );
};

// export async function getStaticProps() {
 
 
 
 
 
 
//   // const fetchedMovies = await getMovieByTitle("Speed Racer");

//   // return {
//   //   props: {
//   //     movie: fetchedMovies,
//   //   },
//   // };
// }

export default MovieList;
