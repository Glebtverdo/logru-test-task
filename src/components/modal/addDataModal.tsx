import {Button, DialogActions, Dialog, DialogContent, Typography, TextField} from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import {tableRowType} from "../../types"

export default function AddDataModal (params: {showModal: boolean,
   toggleShowModal: () => void, sendData: (newData: tableRowType[]) => void})
{
  const {showModal, toggleShowModal, sendData} = params;
  const {data: {buttonText: [,add], tableHeadText: text}} = useSelector((state : RootState) => state.languageReducer);
  const [inputArr, setInputArr] = useState(text.map(el => ""))
  const disable = inputArr.reduce((acc, el) => {
    if(el !== "")
    {
      return acc + 1
    }
    return acc
  }, 0) !== inputArr.length 

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>, id:number) =>
  {
    setInputArr(inputArr.map((el, elId) => elId === id ? e.target.value : el));
  }

  const submit = () =>
  {
    const data = [{
      firstName: inputArr[0],
      lastName: inputArr[1],
      age: inputArr[2],
      salary: inputArr[3]
    }]
    sendData(data);
    toggleShowModal();
  }

  return (
    <Dialog
        open={showModal}
        onClose={toggleShowModal}
      >
        <DialogContent style={{display: "flex", flexDirection: "column", minWidth: "40vw"}}> 
          {text.map((el, id) => {return (
            <TextField key={el} onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeInput(e, id)}
             variant="standard" style={{margin: "8px"}} label={el}/>
          )})}
        </DialogContent>
        <DialogActions>
          <Button onClick={submit} disabled={disable}
           color="success" variant="outlined">{add}</Button>
        </DialogActions>
      </Dialog>
  )
}