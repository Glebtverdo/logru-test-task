import {combineReducers, configureStore} from "@reduxjs/toolkit";
import languageReducer from "./slicers/languageSlicer";
import rowReducer from "./slicers/rowSlicer"

const rootReducer = combineReducers({
	languageReducer,
  rowReducer
})

export const setupStore = () => {
    return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
