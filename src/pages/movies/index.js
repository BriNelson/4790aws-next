import React, { useState } from 'react';
import config from "../../aws-exports"
import SearchDialogue from '../../components/SearchDialogue';

import Amplify, { DataStore } from "aws-amplify" 
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

Amplify.configure(config)

const MovieList = () => {
  const [movieList, setMovieList] = useState({});
  const [fetchedMovie, setFetchedMovie] = React.useState([])
  const [movieInput, setMovieInput] = useState('');
  const [dialog, setDialog] = useState({
    isOpen: false,
    movie: undefined,
    
});

  
  
  
  // const handleSearch = async () => {
  //   if (!movieInput) return
    
  //   const watchmodeMovie = await fetch('/api/movieId', {
  //     method: 'POST',
  //     body: JSON.stringify({ title: movieInput }),
  //     headers: {
  //       'Content-type': 'application/json'
  //     }
  //   })
  // setFetchedMove(await watchmodeMovie.json())
    
  //   setDialog({ isOpen: true, movie: movie }),
  // }
  
  
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



  
  // const handleSave = async () => {
  //   try {
  //     await DataStore.save(
  //       new MoviesDB({
  //         title: movie.Title,
  //         director: movie.Director,
  //         runtime: movie.Runtime,
  //         poster: movie.Poster,
  //         Rating: movie.Rated

  //       }
  //       )

  //       //55 minutes in 
  //     )
  //     console.log("this worked")
  //   } catch (error) { ("save movie error", err) }
  //   finally {
  //     setDialog({ isOpen: false})
  //   }
    
  // }

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

      console.log(movieList)
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
      {movieList && movieList.map((movies) => (   
        <Card sx={{ width: 200, m: 2 }}>
          <CardActionArea>
            <CardMedia component="img" title={movies.title} image={movies.poster} />
            
                  
          <CardContent>
            <Typography variant="h5" color="initial">
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
                            <Button onClick={() => deleteMovie(movies)}>delete</Button> 
                            
                        </CardActions>
                      
        </Card>
        ))}
      </Box>
      <SearchDialogue open={dialog.isOpen} movie={fetchedMovie} closeDialog={handleCloseDialog}  />
    </div>
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
