import { getMovieByTitle } from "../../utils/api-utils";
import Amplify, {Datastore} from "aws-amplify" 
import ResponsiveAppBar  from "../../components/ResponsiveAppBar.js";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  TextField
} from "@mui/material";
const MovieList = (props) => {
  const { movie } = props;
  return (
      <>
      <ResponsiveAppBar />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <TextField sx={{ m: 3, width: 600  }}id="filled" label="Search" variant="outlined" />
        </Box>
          
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

export async function getStaticProps() {
 
 
 
 
 
 
  const fetchedMovies = await getMovieByTitle("Speed Racer");

  return {
    props: {
      movie: fetchedMovies,
    },
  };
}

export default MovieList;
