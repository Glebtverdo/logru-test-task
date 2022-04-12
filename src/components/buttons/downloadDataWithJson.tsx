import Button from "@mui/material/Button"
import { useSelector } from "react-redux";
import { RootState } from "../../store";


export default function DownloadDataWithJson (){
  const {data} = useSelector((state: RootState) => state.rowReducer)
  const {data: {buttonText: [,,,,,text]}} = useSelector((state: RootState) => state.languageReducer);

  const file = new Blob(
    [JSON.stringify(data)], {
        type: 'application/json'
  })

  return (
    <>
      <a href={URL.createObjectURL(file)} style={{textDecoration:"none"}} download="data.json">
         <Button>{text}</Button> </a>
    </>
  )

  
}