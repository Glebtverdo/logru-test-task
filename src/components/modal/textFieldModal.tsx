import {Button, DialogActions, Dialog, DialogContent} from '@mui/material';
import { useEffect, useState } from 'react';
import {textFieldModaltype} from "../../types";
import { textToJson } from '../textToJson';
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import MyAlert from "../myAlert"

export default function TextFieldModal (params: textFieldModaltype)
{
  const {showModal, toggleShowModal, sendData, initialState, showOrEdit} = params;
  const {data: {buttonText: [,add]}} =useSelector((state : RootState) => state.languageReducer);
  const [showAlert, setShowAlert] = useState(false);
  const [inputVall, setInputVall] = useState(initialState[1])
  const [errorMessadge, setErrorMessadge] = useState("");
  const {data: {errors}} = useSelector((state: RootState) => state.languageReducer);
  const disable = inputVall === "" 

  const submit = () =>
  {
    const data = textToJson(
      inputVall,
      () => setErrorMessadge(errors[1]),
      () => setShowAlert(true),
      toggleShowModal,
      () => 0
    );
    sendData(data);
    toggleShowModal();
  }

  useEffect(() => {
    if(inputVall !== initialState && !showOrEdit){
      setInputVall(initialState)
    }
  }, [])
  

  return (<>
    <Dialog
        fullWidth
        maxWidth="md"
        open={showModal}
        onClose={toggleShowModal}
      >
        <DialogContent style={{width: "90%" , height: "40vh", margin: "auto"}}> 
          <textarea value={inputVall} style={{width: "99%" , height: "90%"}}
           onChange={(e) => setInputVall(e.target.value)}>

          </textarea>
        </DialogContent>
        <DialogActions>
          { showOrEdit && <Button onClick={submit} disabled={disable}
           color="success" variant="outlined">{add}</Button>}
        </DialogActions>
      </Dialog>
      <MyAlert errorMessadge={errorMessadge}
      showAlert={showAlert} toggleShowAlert={() => setShowAlert(!showAlert)} />
      </>
  )
}