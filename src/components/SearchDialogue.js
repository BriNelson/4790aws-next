
import React from 'react';
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

    


const SearchDialogue = (props) => {
  const { open, movie, save } = props;
  
  return (
      <>
      <Dialog maxWidth="sm" open={open}>
        
        {movie && movie.map((movies) => (
            
          <p> {movies.name}</p>
          <img src={movies.image_url}>
          
      // <Card sx={{ maxWidth: 300, m:2}}>
      //           {/* <CardMedia component="img" title={movies.name} image={movies.image_url} /> */}
      //           <Box>
      //         <CardContent>
                
      //     <Typography variant="h5" color="initial">
      //       {movies.name}
      //     </Typography>
      //     <Typography variant="subtitle1" color="initial">
      //       {movies.type}
      //     </Typography>
      //     <Typography variant="subtitle2" color="initial">
           
      //     </Typography>

      //     <Typography variant="body1" color="initial">
            
      //     </Typography>
      //                   </CardContent>
      //                   <CardActions>
      //                       <Button onClick={save}>save</Button>
                            
      //                   </CardActions>
      //               </Box>
      // </Card>
   
   ))}
     </Dialog>
          </>
    );
}

export default SearchDialogue;
 