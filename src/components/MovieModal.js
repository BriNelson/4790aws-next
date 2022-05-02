import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BasicModal = (props) => {
  const { open, movieInfo } = props;
  console.log(movieInfo)

  return (
      <div>
      
      <Modal
        open={open}
        
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <video width="320" height="240" controls>
  <source src="https://www.youtube.com/watch?v=V75dMMIW284" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
        </Box>
      </Modal>
     </div>
  );
}

export default BasicModal;