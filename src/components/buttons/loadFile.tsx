import Button from "@mui/material/Button"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { addRows, replaceRows } from "../../store/slicers/rowSlicer";
import { tableRowType } from "../../types";
import LoadFileModal from "../modal/loadFileModal";
import MyAlert from "../myAlert"
import {textToJson} from "../textToJson"

export default function LoadFile()
{
  const [showAlert, setShowAlert] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errorMessadge, setErrorMessadge] = useState("");
  const {data: {errors, buttonText: [text]}} = useSelector((state: RootState) => state.languageReducer);
  const dispatch = useDispatch();
  const [newData, setNewData] = useState<tableRowType[]>([])

  const fileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target != null && e.target.files != null) {
      const file = e.target.files[0] ?? null
      if (file.type !== "application/json")
      {
        setErrorMessadge(errors[0]);
        setShowAlert(true);
      }
      const reader = new FileReader();
      reader.onload = () => textToJson(reader.result as string,
        () => setErrorMessadge(errors[1]),
        () => setShowAlert(true),
        () => setShowModal(true),
        (data: tableRowType[]) => setNewData(data)
      )
      reader.readAsText(file);
    }
  }

  const sendData = (replace: boolean) => {
    if(replace){
      dispatch(replaceRows(newData))
    }
    else
    {
      dispatch(addRows(newData))
    }
    setShowModal(!showModal)
  }

  return <>
    <label htmlFor="inputJson">
      <input accept=".json" id="inputJson" multiple type="file"
      onChange={(e) => {
        fileHandler(e)
      }
    }
      style={{display: "none"}}/>
      <Button style={{border: "none"}} variant="outlined" component="span">
        {text}
      </Button>
    </label>
    <MyAlert errorMessadge={errorMessadge}
      showAlert={showAlert} toggleShowAlert={() => setShowAlert(!showAlert)} />
    <LoadFileModal showModal={showModal} toggleShowModal={() => setShowModal(!showModal)} sendData={sendData}/>
  </>
}