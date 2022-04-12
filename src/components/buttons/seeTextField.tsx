import { useState } from "react";
import TextFieldModal from "../modal/textFieldModal";
import {useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { RootState } from "../../store";

export default function SeeTextField (){
  const [showModal, setShowModal] = useState(false);
  const {data: {buttonText: [,,,,,,text]}} = useSelector((state: RootState) => state.languageReducer);
  const {data} = useSelector((state: RootState) => state.rowReducer);
  const toggleShowModal = () => {
    setShowModal(!showModal)
  }

  const initialState  = JSON.stringify(data);

  return (<>
    <Button onClick={toggleShowModal}>
      {text}
    </Button>
    <TextFieldModal initialState={initialState} showOrEdit={false} showModal={showModal} toggleShowModal={toggleShowModal} sendData={() => null}/>
    </>
  )
}