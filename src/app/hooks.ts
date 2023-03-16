import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from './store'

// Fra repo react-rtk-ts-demo:
// video31, 8:37 "We are going to export the typed versions of
// useDispatch and useSelector" (merk at type var definert i store)

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// "equal to a function which returns the useDispatch hook, of type AppDispatch"
export const useAppDispatch = () => useDispatch<AppDispatch>()

// "Finally, we will use these two hooks in every component"

