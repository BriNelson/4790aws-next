import React, { useState } from 'react';
import config from "../../aws-exports"
import SearchDialogue from '../../components/SearchDialogue';
import MovieModal from '../../components/MovieModal';


import {Amplify, DataStore, AuthModeStrategyType } from "aws-amplify" 
import { useAuthenticator } from '@aws-amplify/ui-react';
import useSWR from "swr"
import {MoviesDB} from "../../models"

import {
  Box,
  CircularProgress,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  CardActions,
  TextField,
  Button,
} from "@mui/material";

Amplify.configure({
  ...config,
  DataStore: {
    authModeStrategyType: AuthModeStrategyType.MULTI_AUTH
  }
})

const MovieList = () => {
  const [movieList, setMovieList] = useState({});
  const [fetchedMovie, setFetchedMovie] = React.useState([])
  const [movieInput, setMovieInput] = useState('');
  const [dialog, setDialog] = useState({
    isOpen: false,
    movie: undefined,
    
  });
  const [movieId, setMovieId] = useState('');
  const [open, setOpen] = React.useState(false);
  
  const [moviesProp, setMoviesProp] = useState('');
  const handleOpen = (index, movies) => {

    setOpen(true)
    setMovieId(index)
    setMoviesProp(movies)
    console.log("test")
    
  };
  const handleClose = () => setOpen(false);
  

  const { user } = useAuthenticator((context) => [context.user])

  
  
  
  
  const handleSearch = async () => {
    if (!movieInput) return
    const watchmodeMovie = await fetch('/api/movie', {
      method: 'POST',
      body: JSON.stringify({ title: movieInput }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
const test = await watchmodeMovie.json()
    console.log(test.results)
    setFetchedMovie(test.results)
     //setFetchedMovie(await watchmodeMovie.json())

    setDialog({
      isOpen: true,
      movie: test.results
      
    })
  } 


  const deleteMovie = async (movie) => {
    try {
      const movieToDelete = await DataStore.query(MoviesDB, movie.id)
      await DataStore.delete(movieToDelete)
    } catch (error) {
      console.log(
        "delete error"
      )
    }
  }

  const handleCloseDialog = () => {
    console.log('does this work')
    setDialog({ isOpen: false })
    
  }

  const fetcher = async () => {
    
    try {
      let movieTempList = await DataStore.query(MoviesDB)
      
      setMovieList(movieTempList)

      
    } catch (error) {
      console.log('fetcher error', error)
      
      
    }
    return movieList
  }

  const { data, error } = useSWR('/movies', fetcher, {refreshInterval: 300})
  
  // const { movie } = props;
  if (error) return <p>failed</p>
  if (!data) return <CircularProgress />
  return (
    <div>
      
      <Box sx={{ display: "flex", justifyContent: "center", m: 3 }}>
        
        <TextField sx={{width: 600}}  value={movieInput}
          onChange={(e) => setMovieInput(e.target.value)} id="filled" label="Search" variant="outlined" />
        <Button variant="contained"  onClick={handleSearch}>Search</Button>
        </Box>
          
      <Box sx={{ display: "flex", flexWrap: 'wrap' }}>
      {movieList && movieList.map((movies, index) => (   
        <Card sx={{ width: 200, m: 2 }}>
          <CardActionArea onClick={() => handleOpen(index, movies)} >
            <CardMedia component="img" title={movies.title} image={movies.poster} />
            
                  
          <CardContent>
            <Typography sx={{ color: "white" }} variant="h6" color="initial">
              {movies.title}
            </Typography>
            <Typography variant="subtitle1" color="initial">
              {movies.us_rating}
            </Typography>
           

            <Typography variant="body1" color="initial">
              
            </Typography>
              </CardContent>
              </CardActionArea>
            <CardActions >
                           {user.username === movies.owner && (<Button onClick={() => deleteMovie(movies)}>delete</Button>)}
                        </CardActions>
                              
        </Card>
        
        ))}
      </Box>
      <MovieModal open={open} movieInfo={moviesProp} movieId={movieId} setClose={handleClose}/>
      <SearchDialogue open={dialog.isOpen} movie={fetchedMovie} closeDialog={handleCloseDialog}  />
    </div>
  );
};



export default MovieList;
