
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
        <Dialog maxWidth="sm" open={open}>
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
                        <CardActions>
                            <Button onClick={save}>save</Button>
                            
                        </CardActions>
                    </Box>
      </Card>
    </Box>

     </Dialog>
    );
}

export default SearchDialogue;
 