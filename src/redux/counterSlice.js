import { createSlice } from "@reduxjs/toolkit";

//to initialize the file as slice we use a method createSlice
export const counterSlice=createSlice({
    //name has no imp
 name:'counterApp',
 //initial state creation
 initialState:{
    value:0
 },
 reducers:{
    //logic to update the value
    //actions are created inside reducers
    increment:(state,data)=>{
        if(!data.payload){
            state.value+=1
        }
        else{
        state.value=state.value+data.payload
        }
    },
    //data is the range passed through the function it ill be stored inside payload
    decrement:(state,data)=>{
        if(!data.payload){
            state.value-=1
        }
        else{
        state.value-=data.payload
        }
    },
    reset:(state)=>{
        state.value=0;
    }
 }
})
//exporting functions inside counterdlice
//they will be stored inside actions as default
export const {increment,decrement,reset}=counterSlice.actions
//inbuilt
export default counterSlice.reducer;