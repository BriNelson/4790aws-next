import React, { useState } from 'react';
import config from "../../aws-exports"
import SearchDialogue from '../../components/SearchDialogue';
import { getMovieByTitle } from "../../utils/api-utils";
import Amplify, { DataStore } from "aws-amplify" 
import useSWR from "swr"
import {MoviesDB} from "../../models"

import {
  Box,
  CircularProgress,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  TextField,
  Button
} from "@mui/material";

Amplify.configure(config)

const MovieList = () => {
  const [movieList, setMovieList] = useState({});
  const [movie, setFetchedMovie] = React.useState([])
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
    setFetchedMovie(returnedMovie.results)
    console.log(returnedMovie.results)
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
    } catch (error) { ("save movie error", err) }
    finally {
      setDialog({ isOpen: false})
    }
    
  }

  const handleCloseDialog = () => {
    setDialog({ isOpen: false })
    
  }

  const fetcher = async () => {
    try {
      let movieTempList = await DataStore.query(MoviesDB)
      setMovieList(movieTempList)

      console.log(movieList)
    } catch (error) {
      console.log('fetcher error', error)
      
      
    }
    return movieList
  }

  const { data, error } = useSWR('/movies', fetcher, {refreshInterval: 100000})
  
  // const { movie } = props;
  if (error) return <p>failed</p>
  if (!data) return <CircularProgress />
  return (
      <>
      
      <Box sx={{ display: "flex", justifyContent: "center", m: 3 }}>
        
        <TextField sx={{width: 600, backgroundColor: "white"}}  value={movieInput}
          onChange={(e) => setMovieInput(e.target.value)} id="filled" label="Search" variant="outlined" />
        <Button variant="contained"  onClick={handleSearch}>Search</Button>
        </Box>
          
      <Box sx={{ display: "flex", flexWrap: 'wrap' }}>
      {movieList && movieList.map((movies) => (   
        <Card sx={{ maxWidth: 300, m:2}}>
                  <CardMedia component="img" title={movies.title} image={movies.poster} />
                  <Box>
          <CardContent>
            <Typography variant="h5" color="initial">
              {movies.title}
            </Typography>
            <Typography variant="subtitle1" color="initial">
              {movies.Rating}
            </Typography>
            <Typography variant="subtitle2" color="initial">
              {movies.director}
            </Typography>

            <Typography variant="body1" color="initial">
              
            </Typography>
            </CardContent>
            <CardActions>
                            <Button>delete</Button> 
                            
                        </CardActions>
                      </Box>
        </Card>
        ))}
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
