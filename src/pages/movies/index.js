import React, { useState } from 'react';
import config from "../../aws-exports"
import SearchDialogue from '../../components/SearchDialogue';
import { getMovieByTitle } from "../../utils/api-utils";
import Amplify, { DataStore } from "aws-amplify" 
import useSwr from "swr"
import {MoviesDB} from "../../models"
import ResponsiveAppBar  from "../../components/ResponsiveAppBar.js";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  TextField,
  Button
} from "@mui/material";

Amplify.configure(config)

const MovieList = (props) => {
  const [movie, setFetchedMovie] = React.useState({})
  const [movieInput, setMovieInput] = useState('');
  const [dialog, setDialog] = useState({
    isOpen: false,
    movie: undefined,
});

  // 
  //42 mins to finsih save dialogue 
  // handle save movie 51:47
  
  const handleSearch = async () => {
    const returnedMovie = await getMovieByTitle(movieInput)
    setFetchedMovie(returnedMovie)
    console.log(returnedMovie)
    setDialog({ isOpen:true, movie: movie })
  }

  const handleSave = async () => {
    try {
      await DataStore.save(
        new MoviesDB({
          title: movie.Title,
          director: movie.Director,
          runtime: movie.Runtime,
          poster: movie.Poster,
          Rating: movie.Rated

        }
        )

        //55 minutes in 
      )
      console.log("this worked")
    } catch (error) {("save movie error", err)}
    console
  }

  const handleCloseDialog = () => {
    setDialog({ isOpen:false})
  }
  // const { movie } = props;
  return (
      <>
      <ResponsiveAppBar />
      <Box sx={{ display: "flex", justifyContent: "center",  m: 3 }}>
        <TextField sx={{width: 600, backgroundColor: "white"}}  value={movieInput}
          onChange={(e) => setMovieInput(e.target.value)} id="filled" label="Search" variant="outlined" />
        <Button variant="contained"  onClick={handleSearch}>Search</Button>
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
              
            </Typography>
                      </CardContent>
                      </Box>
        </Card>
      </Box>
      <SearchDialogue open={dialog.isOpen} movie={movie} save={handleSave} />
    </>
  );
};

// export async function getStaticProps() {
 
 
 
 
 
 
//   const fetchedMovies = await getMovieByTitle("Speed Racer");

//   return {
//     props: {
//       movie: fetchedMovies,
//     },
//   };
// }

export default MovieList;
