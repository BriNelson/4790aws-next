

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

  const { open, movie } = props;
  

 
  
  const handleSave = async (index) => {
    try {
      await DataStore.save(

        new MoviesDB({
          title: movie[index].name,
         

        }
        )

        //55 minutes in 
      )
      console.log("this worked")
    } catch (error) { ("save movie error", error) }
    finally {

      
      
      console.log(open)
    }
    
  }


  
  
  return (
     
      <Dialog scroll='paper' open={open}>
        <Box>
      {movie && movie.map((movies, index) => (
        <Card sx={{ maxWidth: 500, m: 2, display: 'flex' }}>
          <CardMedia sx={{ maxWidth: 100, display: 'flex' }} component="img" image={movies.image_url} />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{marginBottom: 'auto'}}>
            <Typography variant="h5" color="initial">  {movies.name}</Typography>
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
 