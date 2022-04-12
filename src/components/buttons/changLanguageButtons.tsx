import { ButtonGroup, Button } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store"
import {changeLanguage} from "../../store/slicers/languageSlicer"

export default function ChangLanguageButtons(){
  const {data: {changeButtonLang: text}, key} = useSelector((state: RootState) => state.languageReducer);
  const dispatch = useDispatch();

  const changeLang = (langName: string) => {
    dispatch(changeLanguage(langName))
  }

  return( <ButtonGroup style={{width: "5vw", height: "3vh"}}>
    {text.map(el=> {
      return <Button key={el.key} onClick={() => changeLang(el.key)}
       variant={el.key === key ? "contained" : "outlined" }> {el.name} </Button>
    })}
  </ButtonGroup>
  )
}