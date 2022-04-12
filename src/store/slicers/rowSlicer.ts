import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {langs} from './dataForSliser';
import {tableRowType} from '../../types'

const initialState: {data: tableRowType[]} = {
	data: []
}

const rowSlice = createSlice({
	name: 'rows',
	initialState,
	reducers: {
		replaceRows: (state: {data: tableRowType[]}, actions: PayloadAction<tableRowType[]>) =>
		{
			state.data = actions.payload.map(el => {return {...el}})
		},
    addRows: (state: {data: tableRowType[]}, actions: PayloadAction<tableRowType[]>) =>
		{
			actions.payload.forEach(el => {state.data.push({...el})});
    },
		sortRows: (state: {data: tableRowType[]}, actions: PayloadAction<number>) =>
		{
			state.data.sort((a, b) => {
				const index  = actions.payload < 0 ? actions.payload * -1 : actions.payload;
				const key = Object.keys(state.data[0])[index - 1]
				if (a[key] > b[key]) {
					return 1 * actions.payload;
				}
				if (a[key] < b[key]) {
					return -1 * actions.payload;
				}
				return 0;
			})
    },
		changeField: (state: {data: tableRowType[]}, actions: PayloadAction<{id: number, key: string, val: string}>) =>
		{
			const {id, key, val} = actions.payload;
			state.data[id][key] = val
		},
		deletRow: (state: {data: tableRowType[]}, actions: PayloadAction<number>) =>
		{
			state.data = state.data.filter((el, id) => id !== actions.payload);
		}
	}
})

export const {replaceRows, addRows, sortRows, changeField, deletRow} = rowSlice.actions
export default rowSlice.reducer