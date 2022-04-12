import { TableCell, TableSortLabel} from '@mui/material';
import { useState } from 'react';

export default function TableHeadComp(params: {title: string, isActive: boolean,
   toggleActive:() => void}){
  const {isActive, title, toggleActive} = params;
  const [direction, setDirection] = useState<"asc" | "desc">("asc");
  
  const onClickHandler = () => {
    if (isActive)
    {
      setDirection( direction === "asc" ? "desc" : "asc") 
    }
    else
    {
      setDirection("asc")
    }
    toggleActive();
  }

  return(
    <TableCell align='center'>
      <TableSortLabel direction={direction} onClick={onClickHandler} active={isActive}>
          {title}
      </TableSortLabel>
    </TableCell>
  )
}