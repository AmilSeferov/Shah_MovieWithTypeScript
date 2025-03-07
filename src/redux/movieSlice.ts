import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'


 export const fechCurrency=createAsyncThunk("fechCurrency",async()=>{
    const data = (await axios.get(" https://v6.exchangerate-api.com/v6/718e7bd4ae2faa46543bd7d9/latest/USD")).data.conversion_rates

    return data
 })
    export interface initialStateType{
         isLoading:boolean,
         error:boolean,
         data:{
            [key:string]:string
         }
    }
 
const initialState:initialStateType={
    isLoading:false,
    error:false,
    data:{}
}
export const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {
      
    },
    extraReducers:(builder:ActionReducerMapBuilder<initialStateType>)=>{
      builder.addCase(fechCurrency.pending,(state)=>{
          state.isLoading=true
      }),
      builder.addCase(fechCurrency.fulfilled,(state,actions:PayloadAction<any, string, {
          arg: void;
          requestId: string;
          requestStatus: "fulfilled";
      }, never>)=>{
          state.isLoading=false,
          state.data=actions.payload
      }),
      builder.addCase(fechCurrency.rejected,(state)=>{
          state.error=true,
          state.isLoading=false
      })
    }
  })
  
  export const {  } = currencySlice.actions
  
  export default currencySlice.reducer