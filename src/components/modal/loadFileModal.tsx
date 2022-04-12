import {Button, DialogActions, Dialog} from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export default function LoadFileModal (params: {showModal: boolean,
   toggleShowModal: () => void, sendData: (replace: boolean) => void})
{
  const {showModal, toggleShowModal, sendData} = params;
  const {data: {buttonText: [,add, replace]}} = useSelector((state : RootState) => state.languageReducer);
  return (
    <Dialog
        open={showModal}
        onClose={toggleShowModal}
      >
        <DialogActions>
          <Button onClick={() => sendData(true)} color="error" variant="outlined">{replace}</Button>
          <Button onClick={() => sendData(false)} color="success" variant="outlined">{add}</Button>
        </DialogActions>
      </Dialog>
  )
}