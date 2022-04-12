import { useState } from "react";
import TextFieldModal from "../modal/textFieldModal";
import { useDispatch, useSelector } from "react-redux";
import { addRows} from "../../store/slicers/rowSlicer";
import {tableRowType} from "../../types"
import Button from "@mui/material/Button";
import { RootState } from "../../store";

export default function TextFieldButton (){
  const [showModal, setShowModal] = useState(false);
  const {data: {buttonText: [,,,,text]}} = useSelector((state: RootState) => state.languageReducer);
  const dispatch = useDispatch();
  const toggleShowModal = () => {
    setShowModal(!showModal)
  }

  const sendData = (newData: tableRowType[]) => {
    dispatch(addRows(newData))
  }

  return (<>
    <Button onClick={toggleShowModal}>
      {text}
    </Button>
    <TextFieldModal initialState="" showOrEdit={true} showModal={showModal} toggleShowModal={toggleShowModal} sendData={sendData}/>
    </>
  )
}