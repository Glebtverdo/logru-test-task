import {Table, TableBody, TableContainer,
   TableHead, TableRow, Paper, TableCell, IconButton} from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import TableHeadComp from "./tableHeadComp"
import { RootState } from "../../store"
import { useDispatch, useSelector } from "react-redux"
import { useState } from 'react';
import { deletRow, sortRows } from '../../store/slicers/rowSlicer';
import EditableInput from "./editableInput"

export default function MainTable(){
  const {data: {tableHeadText: text}} = useSelector((state: RootState) => state.languageReducer);
  const [activeArr, setActiveArr] = useState(text.map( () => false));
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);
  const {data} = useSelector((state: RootState) => state.rowReducer);
  const keys = data[0] ? Object.keys(data[0]) : undefined
  const dispatch = useDispatch();

  const toggleActive = (id: number) => {
    setActiveArr(activeArr.map((el, elId) => id === elId))
    if(activeIndex && (id + 1 === activeIndex || id + 1 === activeIndex * -1))
    {
      setActiveIndex(activeIndex * -1)
      dispatch(sortRows(activeIndex * -1))
    }
    else
    {
      setActiveIndex(id + 1)
      dispatch(sortRows(id + 1))
    }
  }

  const deletRowFunc = (elId: number) => {
    dispatch(deletRow(elId))
  }

  return <>
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
          {text.map((el, id) => { return (
            <TableHeadComp key={el} isActive={activeArr[id]} toggleActive={() => toggleActive(id)}
             title={el} />
          )
          })
          }
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((el, elId) => {
            const id = Math.random() * 10000
            return <TableRow
              key={id + el.firstName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            {keys && keys.map((key, index)=> (<TableCell key={id * index + el[key]} >
                <EditableInput propKey={key} id={elId} text={el[key]} style={{maxWidth: "100px", textAlignLast: "center"}} />
              </TableCell>))}
              <TableCell>
                <IconButton onClick={() => deletRowFunc(elId)}>
                  <DeleteOutlineOutlinedIcon />
                </IconButton>
              </TableCell>
            </TableRow>
            })}
        </TableBody>
      </Table>
    </TableContainer>
  </>
}