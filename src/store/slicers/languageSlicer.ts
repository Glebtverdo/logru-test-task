import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {langs} from './dataForSliser';
import {langType} from '../../types'

const initialState = {
	data: langs.en,
	key: "en"
}

const langugeSlice = createSlice({
	name: 'languge',
	initialState,
	reducers: {
		changeLanguage: (state: {data: langType,	key: string}, actions: PayloadAction<string>) =>
		{
			state.data = langs[actions.payload]
			state.key = actions.payload
		}
	}
})

export const {changeLanguage} = langugeSlice.actions
export default langugeSlice.reducer