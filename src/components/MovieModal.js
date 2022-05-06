import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BasicModal = (props) => {
  const { open, movieInfo, movieId, setClose } = props;

  
  console.log(movieInfo)
  function handleClose() {
    setOpen(false);
  }
//  let youtube = movieInfo.trailer;
  
//  let tokens = youtube.split("=");
//  console.log(tokens[1]);
//  let youtubeLink = "https://www.youtube.com/embed/" + tokens[1];
//   console.log(youtubeLink);
  
  return (
      <div>
      
      <Modal
        open={open}
        onClose={setClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <img src={movieInfo.backdrop} alt="Girl in a jacket"></img>
          <h2>{movieInfo.title}</h2>
          <h5>{movieInfo.us_rating} | {movieInfo.runtime_minutes} | {movieInfo.year} </h5>
          <p>{movieInfo.plot_overview} </p>
          
      

          
        </Box>
      </Modal>
     </div>
  );
}

export default BasicModal;