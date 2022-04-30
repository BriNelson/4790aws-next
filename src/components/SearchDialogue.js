

import Amplify, { DataStore } from "aws-amplify" 
import {MoviesDB} from "../models"
import React from 'react';
import config from "../aws-exports"
import {
    Box,
    Card,
    CardMedia,
    CardContent,
    Dialog,
    Typography,
    CardActions,
    TextField,
    Button
} from "@mui/material"

    
Amplify.configure(config)


const SearchDialogue = (props) => {

  const { open, movie, closeDialog } = props;
  
  async function getMovieById(id) {
    const response = await fetch(`https://api.watchmode.com/v1/title/${id}/details/?apiKey=PuUQcHotZnAXXYNAbwGxPfwLVS81iC7tfeV3s9Wv&append_to_response=sources`)
return await response.json()
    
}
 
  
  const handleSave = async (index) => {

   const movieInfo = await getMovieById(movie[index].id)
    
    const sourcesArray = movieInfo.sources.map(test => test.name)
console.log(sourcesArray)
    try {
      await DataStore.save(
        new MoviesDB({
          title: movie[index].name,
           director: movie[index].director,
           poster: movie[index].image_url,
           us_rating: movieInfo.us_rating,
           trailer: movieInfo.trailer,
           trailer_thumbnail: movieInfo.trailer_thumbnail,
           backdrop: movieInfo.backdrop,
          plot_overview: movieInfo.plot_overview,
          year: movieInfo.year,
          runtime_minutes: movieInfo.runtime_minutes,
          genre_names: movieInfo.genre_names,
          sources: sourcesArray
           
        })

       
      );
      console.log("this worked");
    } catch (error) {
      "save movie error", error;
    } finally {
      
      closeDialog();
      
      console.log(open);
    }
  };


  
  
  return (
     
      <Dialog scroll='paper' open={open}>
        <Box>
      {movie && movie.map((movies, index) => (
        <Card sx={{ maxWidth: 500, m: 2, display: 'flex' }}>
          <CardMedia sx={{ maxWidth: 100, display: 'flex' }} component="img" image={movies.image_url} />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{marginBottom: 'auto' }}>
              <Typography variant="h5">  {movies.name}</Typography>
          </CardContent>
          <CardActions sx={{marginTop: 'auto'}}>
               <Button onClick={() => handleSave(index)}>Save</Button> 
            </CardActions>
            </Box>
        </Card>
            
            ))}
          
          </Box>
   
   
     </Dialog>
          
    );
}

export default SearchDialogue;
 