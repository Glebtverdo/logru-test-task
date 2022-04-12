import { Box, Typography, IconButton, TextField, Tooltip } from "@mui/material";
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { ChangeEvent, useState, useEffect } from "react";
import MyAlert from "../myAlert";
import { useDispatch } from "react-redux";
import { changeField } from "../../store/slicers/rowSlicer";

function EditableInput (props: {id: number, propKey: string, text: string, style: {}}){
	const {text, style, propKey: key, id} = props;
	const [showInput, setShowInput] = useState(false);
	const [inputValue, setInputValue] = useState(text);
  const dispatch = useDispatch();
	
	useEffect(() => {
		setInputValue(text)
	}, [text])
		
	const chekInputValue = (event: ChangeEvent<HTMLInputElement>) =>{
		setInputValue(event.target.value)
	}

	const sendData = () => {
		dispatch(changeField({id, key, val: inputValue}))
	}

	return(<>
	<Box style={{display: "flex", flexWrap:"nowrap", justifyContent: "center"}}>
		{!showInput && 
		<Typography variant="h6" style={{textAlign: "center"}} sx={{...style}}>
			{text}
		</Typography>
		}
		{showInput && <> 
			<TextField variant="outlined" size="small" style={{textAlign: "center", padding: "1px"}} sx={{...style}}
			value={inputValue} onChange={chekInputValue}/>
		</>
		}
		{ !showInput &&
		 <Tooltip title="Изменить" placement="bottom">
			<IconButton onClick={()=> {setShowInput(!showInput)}} size="small" style={{alignItems: "center"}}>
				<ModeEditOutlineOutlinedIcon fontSize={"inherit"}/>	
			</IconButton>
		</Tooltip>
		}
		{ showInput && <>
			<Tooltip title="Отменить" placement="bottom">
				<IconButton
				onClick={()=> {setShowInput(!showInput)}} style={{alignItems: "center", padding: "0px "}}>
					<CloseOutlinedIcon fontSize={"inherit"}/>
				</IconButton>
			</Tooltip>
			<Tooltip title="Сохранить" placement="bottom">
				<IconButton
				onClick={sendData} style={{alignItems: "center", padding: "0px  "}}>
					<SaveOutlinedIcon fontSize={"inherit"}/>
				</IconButton>
			</Tooltip>
		</>}

	</Box> 
</>)
}

export default EditableInput;