import { useState } from "react";
import AddDataModal from "../modal/addDataModal";
import { useDispatch, useSelector } from "react-redux";
import { addRows} from "../../store/slicers/rowSlicer";
import {tableRowType} from "../../types"
import Button from "@mui/material/Button";
import { RootState } from "../../store";

export default function AddRow (){
  const [showModal, setShowModal] = useState(false);
  const {data: {buttonText: [,,,text]}} = useSelector((state: RootState) => state.languageReducer);
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
    <AddDataModal showModal={showModal} toggleShowModal={toggleShowModal} sendData={sendData}/>
    </>
  )
}