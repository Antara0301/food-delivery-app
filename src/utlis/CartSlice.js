import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name: "Cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(initState,action) =>{
           initState.items.push(action.payload)
        },
        deleteItem:(initState) =>{
         initState.items.pop();
        },
        clearCart:(initState)=>{
         initState.items.length=0
        }
    }
})
export const {addItem,deleteItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;