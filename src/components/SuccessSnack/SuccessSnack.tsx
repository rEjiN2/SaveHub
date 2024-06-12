import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

interface CustomizedSnackbarsProps {
  show: boolean;
  onClose: (event?: React.SyntheticEvent | Event, reason?: string) => void;
  success: 'success' | 'error';
}

const CustomizedSnackbars: React.FC<CustomizedSnackbarsProps> = ({ show, onClose, success }) => {
  const [open, setOpen] = React.useState(false);
  console.log(success, 'hiopen');

  React.useEffect(() => {
    setOpen(show);
  }, [show]);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    onClose();
  };

  return (
    <div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={success}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {success === 'success' ? 'Upload Success' : 'Error'}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CustomizedSnackbars;
